import React, { useState } from 'react';
import { quickItems } from '../data/quickItems';
import { CATEGORIES } from '../types/item';
import { getCategoryIcon } from '../utils/icons';
import './QuickItemSelector.css';

interface QuickItemSelectorProps {
  onSelectItem: (name: string, unit: string, category?: string) => void;
}

export const QuickItemSelector: React.FC<QuickItemSelectorProps> = ({ onSelectItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredItems = selectedCategory
    ? quickItems.filter(item => item.category === selectedCategory)
    : quickItems;

  const handleSelectItem = (name: string, unit: string, category: string) => {
    onSelectItem(name, unit, category);
    setIsOpen(false);
  };

  return (
    <div className="quick-item-selector">
      <button
        className="btn-quick-items"
        onClick={() => setIsOpen(!isOpen)}
      >
        ⚡ เลือกเร็ว
      </button>

      {isOpen && (
        <div className="quick-selector-modal">
          <div className="quick-selector-overlay" onClick={() => setIsOpen(false)} />
          
          <div className="quick-selector-content">
            <div className="quick-selector-header">
              <h3>เลือกรายการอาหาร</h3>
              <button
                className="btn-close"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Category Filter */}
            <div className="category-quick-filter">
              <button
                className={`cat-btn ${selectedCategory === null ? 'active' : ''}`}
                onClick={() => setSelectedCategory(null)}
              >
                ทั้งหมด ({quickItems.length})
              </button>
              {CATEGORIES.map(cat => {
                const count = quickItems.filter(item => item.category === cat.value).length;
                return (
                  <button
                    key={cat.value}
                    className={`cat-btn ${selectedCategory === cat.value ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat.value)}
                  >
                    <span className="cat-icon">{getCategoryIcon(cat.value as any)}</span>
                    {cat.label} ({count})
                  </button>
                );
              })}
            </div>

            {/* Items Grid */}
            <div className="quick-items-grid">
              {filteredItems.map((item, idx) => (
                <button
                  key={idx}
                  className="quick-item-btn"
                  onClick={() => handleSelectItem(item.name, item.unit, item.category)}
                >
                  <span className="item-icon">{getCategoryIcon(item.category)}</span>
                  <span className="item-name">{item.name}</span>
                  <span className="item-unit">{item.unit}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
