import React, { useState, useRef, useEffect } from 'react';
import { quickItems } from '../data/quickItems';
import './ItemNameInput.css';

interface ItemNameInputProps {
  value: string;
  onChange: (value: string, unit?: string) => void;
  onSelect?: (name: string, unit: string) => void;
}

export const ItemNameInput: React.FC<ItemNameInputProps> = ({ value, onChange, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredItems, setFilteredItems] = useState<typeof quickItems>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value.trim()) {
      const query = value.toLowerCase();
      const filtered = quickItems.filter(item =>
        item.name.toLowerCase().includes(query)
      );
      setFilteredItems(filtered);
      setIsOpen(filtered.length > 0);
    } else {
      setFilteredItems(quickItems);
      setIsOpen(false);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectItem = (name: string, unit: string) => {
    onChange(name, unit);
    setIsOpen(false);
    onSelect?.(name, unit);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'Enter') {
      setIsOpen(false);
    }
  };

  return (
    <div className="item-name-input-container" ref={containerRef}>
      <input
        ref={inputRef}
        type="text"
        className="item-name-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => value.length > 0 && setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder="พิมพ์ชื่อหรือเลือกจากลิสต์..."
        autoComplete="off"
      />

      {isOpen && filteredItems.length > 0 && (
        <div className="item-name-suggestions">
          {filteredItems.slice(0, 10).map((item, idx) => (
            <button
              key={idx}
              className="suggestion-item"
              onMouseDown={(e) => {
                e.preventDefault();
                handleSelectItem(item.name, item.unit);
              }}
              type="button"
            >
              <span className="suggestion-name">{item.name}</span>
              <span className="suggestion-unit">{item.unit}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
