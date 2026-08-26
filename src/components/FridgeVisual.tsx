import React, { useMemo } from 'react';
import { FridgeItem } from '../types/item';
import './FridgeVisual.css';

interface FridgeVisualProps {
  items: FridgeItem[];
}

interface Shelf {
  level: number;
  items: FridgeItem[];
}

export const FridgeVisual: React.FC<FridgeVisualProps> = ({ items }) => {
  const shelves = useMemo(() => {
    // แบ่งสิ่งของเป็น 4 ชั้น
    const shelvesData: Shelf[] = [
      { level: 0, items: [] },
      { level: 1, items: [] },
      { level: 2, items: [] },
      { level: 3, items: [] },
    ];

    items.forEach((item, idx) => {
      const shelfIdx = idx % 4;
      shelvesData[shelfIdx].items.push(item);
    });

    return shelvesData;
  }, [items]);

  const getCategoryEmoji = (category: string) => {
    const emojiMap: Record<string, string> = {
      vegetables: '🥬',
      fruits: '🍎',
      meat: '🥩',
      dairy: '🧈',
      condiments: '🍯',
      frozen: '❄️',
      other: '📦',
    };
    return emojiMap[category] || '📦';
  };

  return (
    <div className="fridge-visual">
      <div className="fridge-container">
        {/* Fridge Exterior */}
        <div className="fridge-exterior">
          <div className="fridge-door">
            <div className="door-handle"></div>
            <div className="door-gradient"></div>

            {/* Shelves */}
            <div className="fridge-shelves">
              {shelves.map((shelf) => (
                <div key={shelf.level} className="shelf">
                  {/* Shelf background */}
                  <div className="shelf-background"></div>

                  {/* Items on shelf */}
                  <div className="shelf-items">
                    {shelf.items.length > 0 ? (
                      shelf.items.map((item) => (
                        <div
                          key={item.id}
                          className="shelf-item"
                          title={`${item.name} (${item.quantity}${item.unit})`}
                        >
                          <div className="item-emoji">
                            {getCategoryEmoji(item.category)}
                          </div>
                          <div className="item-label">{item.name.substring(0, 6)}</div>
                        </div>
                      ))
                    ) : (
                      <div className="shelf-empty">ว่าง</div>
                    )}
                  </div>

                  {/* Shelf divider line */}
                  {shelf.level < 3 && <div className="shelf-divider"></div>}
                </div>
              ))}
            </div>

            {/* Frost effect */}
            <div className="frost-effect"></div>
          </div>
        </div>

        {/* Stats on side */}
        <div className="fridge-stats">
          <div className="stat-item">
            <span className="stat-label">ทั้งหมด</span>
            <span className="stat-value">{items.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">พร้อมใช้</span>
            <span className="stat-value" style={{ color: '#10b981' }}>
              {items.filter(i => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const expiry = new Date(i.expiryDate);
                expiry.setHours(0, 0, 0, 0);
                return expiry.getTime() >= today.getTime();
              }).length}
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-label">หมดอายุ</span>
            <span className="stat-value" style={{ color: '#ef4444' }}>
              {items.filter(i => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const expiry = new Date(i.expiryDate);
                expiry.setHours(0, 0, 0, 0);
                return expiry.getTime() < today.getTime();
              }).length}
            </span>
          </div>
        </div>
      </div>

      {/* Temperature Display */}
      <div className="temperature-display">
        <span className="temp-icon">❄️</span>
        <span className="temp-value">2-4°C</span>
      </div>
    </div>
  );
};
