import { FridgeItem } from '../types/item';

const STORAGE_KEY = 'fridge_items';

export const storage = {
  getItems: (): FridgeItem[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveItems: (items: FridgeItem[]): void => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save items:', error);
    }
  },

  addItem: (item: FridgeItem): void => {
    const items = storage.getItems();
    items.push(item);
    storage.saveItems(items);
  },

  updateItem: (id: string, updates: Partial<FridgeItem>): void => {
    const items = storage.getItems();
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
      items[index] = { ...items[index], ...updates };
      storage.saveItems(items);
    }
  },

  deleteItem: (id: string): void => {
    const items = storage.getItems().filter(item => item.id !== id);
    storage.saveItems(items);
  },

  clearAll: (): void => {
    localStorage.removeItem(STORAGE_KEY);
  },

  exportData: (): string => {
    const items = storage.getItems();
    return JSON.stringify(items, null, 2);
  },

  importData: (jsonData: string): boolean => {
    try {
      const items = JSON.parse(jsonData);
      if (Array.isArray(items)) {
        storage.saveItems(items);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  },
};
