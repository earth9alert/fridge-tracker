import { useState, useCallback, useEffect } from 'react';
import { FridgeItem } from '../types/item';
import { storage } from '../utils/storage';

export const useFridgeItems = () => {
  const [items, setItems] = useState<FridgeItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load items on mount
  useEffect(() => {
    const loadedItems = storage.getItems();
    setItems(loadedItems);
    setIsLoading(false);
  }, []);

  // Add new item
  const addItem = useCallback((item: FridgeItem) => {
    setItems(prevItems => {
      const newItems = [...prevItems, item];
      storage.saveItems(newItems);
      return newItems;
    });
  }, []);

  // Update item
  const updateItem = useCallback((id: string, updates: Partial<FridgeItem>) => {
    setItems(prevItems => {
      const newItems = prevItems.map(item =>
        item.id === id ? { ...item, ...updates } : item
      );
      storage.saveItems(newItems);
      return newItems;
    });
  }, []);

  // Delete item
  const deleteItem = useCallback((id: string) => {
    setItems(prevItems => {
      const newItems = prevItems.filter(item => item.id !== id);
      storage.saveItems(newItems);
      return newItems;
    });
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
