import { useState, useCallback, useEffect } from 'react';
import { FridgeItem } from '../types/item';
import { storage } from '../utils/storage';
import * as supabaseUtils from '../utils/supabase';

const USE_SUPABASE = import.meta.env.VITE_USE_SUPABASE === 'true';

export interface UseFridgeItemsState {
  items: FridgeItem[];
  isLoading: boolean;
  isSaving: boolean;
  error: string | null;
}

export const useFridgeItems = () => {
  const [items, setItems] = useState<FridgeItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load items on mount
  useEffect(() => {
    const loadItems = async () => {
      setIsLoading(true);
      setError(null);
      let loadedItems: FridgeItem[] = [];

      if (USE_SUPABASE) {
        // ลองโหลดจาก Supabase ก่อน
        const result = await supabaseUtils.getItems();
        if (result.success && result.data) {
          loadedItems = result.data;
        } else if (!result.success) {
          setError(result.error || 'ไม่สามารถดึงข้อมูลได้');
          // fallback to localStorage
          loadedItems = storage.getItems();
        } else {
          // Supabase ว่าง ให้ย้ายจาก LocalStorage
          const localItems = storage.getItems();
          if (localItems.length > 0) {
            for (const item of localItems) {
              const addResult = await supabaseUtils.addItem(item);
              if (addResult.success) {
                // Item added successfully
              }
            }
            loadedItems = localItems;
          }
        }
      } else {
        // ใช้ LocalStorage ตามปกติ
        loadedItems = storage.getItems();
      }

      setItems(loadedItems);
      setIsLoading(false);
    };

    loadItems();
  }, []);

  // Add new item
  const addItem = useCallback(async (item: FridgeItem) => {
    setIsSaving(true);
    setError(null);

    if (USE_SUPABASE) {
      const result = await supabaseUtils.addItem(item);
      if (result.success && result.data) {
        setItems(prevItems => [...prevItems, result.data!]);
      } else {
        setError(result.error || 'ไม่สามารถเพิ่มสิ่งของได้');
      }
    } else {
      setItems(prevItems => {
        const newItems = [...prevItems, item];
        storage.saveItems(newItems);
        return newItems;
      });
    }

    setIsSaving(false);
  }, []);

  // Update item
  const updateItem = useCallback((id: string, updates: Partial<FridgeItem>) => {
    setIsSaving(true);
    setError(null);

    if (USE_SUPABASE) {
      supabaseUtils.updateItem(id, updates).then(result => {
        if (result.success && result.data) {
          setItems(prevItems =>
            prevItems.map(item => (item.id === id ? result.data! : item))
          );
        } else {
          setError(result.error || 'ไม่สามารถอัปเดตสิ่งของได้');
        }
        setIsSaving(false);
      });
    } else {
      setItems(prevItems => {
        const newItems = prevItems.map(item =>
          item.id === id ? { ...item, ...updates } : item
        );
        storage.saveItems(newItems);
        return newItems;
      });
      setIsSaving(false);
    }
  }, []);

  // Delete item
  const deleteItem = useCallback((id: string) => {
    setIsSaving(true);
    setError(null);

    if (USE_SUPABASE) {
      supabaseUtils.deleteItem(id).then(result => {
        if (result.success) {
          setItems(prevItems => prevItems.filter(item => item.id !== id));
        } else {
          setError(result.error || 'ไม่สามารถลบสิ่งของได้');
        }
        setIsSaving(false);
      });
    } else {
      setItems(prevItems => {
        const newItems = prevItems.filter(item => item.id !== id);
        storage.saveItems(newItems);
        return newItems;
      });
      setIsSaving(false);
    }
  }, []);

  // Get items by category
  const getItemsByCategory = useCallback((category: string) => {
    return items.filter(item => item.category === category);
  }, [items]);

  // Search items
  const searchItems = useCallback((query: string) => {
    const lowerQuery = query.toLowerCase();
    return items.filter(item =>
      item.name.toLowerCase().includes(lowerQuery) ||
      item.notes?.toLowerCase().includes(lowerQuery)
    );
  }, [items]);

  // Get expiring items
  const getExpiringItems = useCallback((daysThreshold: number = 3) => {
    return items.filter(item => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const expiry = new Date(item.expiryDate);
      expiry.setHours(0, 0, 0, 0);
      const daysUntil = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      return daysUntil >= 0 && daysUntil <= daysThreshold;
    });
  }, [items]);

  // Get expired items
  const getExpiredItems = useCallback(() => {
    return items.filter(item => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const expiry = new Date(item.expiryDate);
      expiry.setHours(0, 0, 0, 0);
      return expiry.getTime() < today.getTime();
    });
  }, [items]);

  return {
    items,
    isLoading,
    isSaving,
    error,
    addItem,
    updateItem,
    deleteItem,
    getItemsByCategory,
    searchItems,
    getExpiringItems,
    getExpiredItems,
  };
};
