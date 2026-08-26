export type Category = 'vegetables' | 'fruits' | 'meat' | 'dairy' | 'condiments' | 'frozen' | 'other';

export interface Portion {
  id: string;
  quantity: number;
  unit: string;
  usedDate?: string; // ISO date string, empty if not used yet
}

export interface FridgeItem {
  id: string;
  name: string;
  category: Category;
  quantity: number;
  unit: string;
  expiryDate: string; // ISO date string
  addedDate: string;
  notes?: string;
  portions?: Portion[]; // แบ่งเป็นถุงๆ (optional, สำหรับเนื้อและอื่นๆ)
}

export const CATEGORIES: { label: string; value: Category }[] = [
  { label: '🥬 ผัก', value: 'vegetables' },
  { label: '🍎 ผลไม้', value: 'fruits' },
  { label: '🥩 เนื้อสัตว์', value: 'meat' },
  { label: '🧈 นมและเนย', value: 'dairy' },
  { label: '🍯 ซอส/เครื่องปรุง', value: 'condiments' },
  { label: '❄️ ของแช่แข็ง', value: 'frozen' },
  { label: '📦 อื่นๆ', value: 'other' },
];
