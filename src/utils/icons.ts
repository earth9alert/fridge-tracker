import { Category } from '../types/item';

export const categoryIcons: Record<Category, string> = {
  vegetables: '🥬',
  fruits: '🍎',
  meat: '🥩',
  dairy: '🧈',
  condiments: '🍯',
  frozen: '❄️',
  other: '📦',
};

export const getCategoryIcon = (category: Category): string => {
  return categoryIcons[category] || '📦';
};
