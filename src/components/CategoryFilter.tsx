import React from 'react';
import { Category, CATEGORIES } from '../types/item';
import './CategoryFilter.css';

interface CategoryFilterProps {
  selectedCategory: Category | null;
  onSelect: (category: Category | null) => void;
  itemCounts: Record<Category, number>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelect,
  itemCounts,
}) => {
  return (
    <div className="category-filter">
      <button
        className={`category-btn ${selectedCategory === null ? 'category-btn--active' : ''}`}
        onClick={() => onSelect(null)}
      >
        ทั้งหมด ({Object.values(itemCounts).reduce((a, b) => a + b, 0)})
      </button>

      {CATEGORIES.map(cat => (
        <button
          key={cat.value}
          className={`category-btn ${selectedCategory === cat.value ? 'category-btn--active' : ''}`}
          onClick={() => onSelect(cat.value)}
          title={cat.label}
        >
          {cat.label} ({itemCounts[cat.value] || 0})
        </button>
      ))}
    </div>
  );
};
