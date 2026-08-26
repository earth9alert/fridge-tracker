import { useState, useCallback, useEffect } from 'react';
import { FridgeItem } from '../types/item';
import { storage } from '../utils/storage';
import * as supabaseUtils from '../utils/supabase';

const USE_SUPABASE = (import.meta as any).env.VITE_USE_SUPABASE === 'true';

export const useFridgeItems = () => {
  const [items, setItems] = useState<FridgeItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load items on mount
  useEffect(() => {
    const loadItems = async () => {
      setIsLoading(true);
      let loadedItems: FridgeItem[] = [];

      if (USE_SUPABASE) {
        // ลองโหลดจาก Supabase ก่อน
        loadedItems = await supabaseUtils.getItems();
        if (loadedItems.length === 0) {
          // ถ้า Supabase ว่าง ให้ย้ายจาก LocalStorage
          const localItems = storage.getItems();
          if (localItems.length > 0) {
            for (const item of localItems) {
              await supabaseUtils.addItem(item);
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
    if (USE_SUPABASE) {
      const result = await supabaseUtils.addItem(item);
      if (result) {
        setItems(prevItems => [...prevItems, result]);
      }
    } else {
      setItems(prevItems => {
        const newItems = [...prevItems, item];
        storage.saveItems(newItems);
        return newItems;
      });
    }
  }, []);

  // Update item
  const updateItem = useCallback((id: string, updates: Partial<FridgeItem>) => {
    if (USE_SUPABASE) {
      supabaseUtils.updateItem(id, updates).then(result => {
        if (result) {
          setItems(prevItems =>
            prevItems.map(item => (item.id === id ? result : item))
          );
        }
      });
    } else {
      setItems(prevItems => {
        const newItems = prevItems.map(item =>
          item.id === id ? { ...item, ...updates } : item
        );
        storage.saveItems(newItems);
        return newItems;
      });
    }
  }, []);

  // Delete item
  const deleteItem = useCallback((id: string) => {
    if (USE_SUPABASE) {
      supabaseUtils.deleteItem(id).then(success => {
        if (success) {
          setItems(prevItems => prevItems.filter(item => item.id !== id));
        }
      });
    } else {
      setItems(prevItems => {
        const newItems = prevItems.filter(item => item.id !== id);
        storage.saveItems(newItems);
        return newItems;
      });
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
    addItem,
    updateItem,
    deleteItem,
    getItemsByCategory,
    searchItems,
    getExpiringItems,
    getExpiredItems,
  };
};
