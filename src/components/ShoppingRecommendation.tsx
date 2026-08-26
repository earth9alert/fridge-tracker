import React, { useMemo } from 'react';
import { FridgeItem, CATEGORIES, Category } from '../types/item';
import './ShoppingRecommendation.css';

interface ShoppingRecommendationProps {
  items: FridgeItem[];
}

interface Recommendation {
  reason: string;
  category: Category;
  suggestions: string[];
  icon: string;
  priority: 'high' | 'medium' | 'low';
}

export const ShoppingRecommendation: React.FC<ShoppingRecommendationProps> = ({ items }) => {
  const recommendations = useMemo(() => {
    const recs: Recommendation[] = [];

    // นับจำนวนสิ่งของในแต่ละหมวด
    const categoryCount = {} as Record<Category, number>;
    CATEGORIES.forEach(cat => {
      categoryCount[cat.value] = items.filter(item => item.category === cat.value).length;
    });

    // 1. หมวดที่ว่างเปล่าหรือมีน้อย (Priority: Medium)
    const categoryMap = [
      { value: 'vegetables' as const, label: '🥬 ผัก', items: ['หอม', 'กระเทียม', 'แครอท', 'มะเขือเทศ', 'พริก', 'ผักกวนแตง'] },
      { value: 'fruits' as const, label: '🍎 ผลไม้', items: ['แอปเปิ้ล', 'ส้ม', 'กล้วย', 'องุ่น', 'มะนาว'] },
      { value: 'dairy' as const, label: '🧈 นม & เนย', items: ['นม', 'เนยแข็ง', 'ไข่'] },
      { value: 'meat' as const, label: '🥩 เนื้อสัตว์', items: ['เนื้อ', 'ไก่', 'ปลา', 'กุ้ง'] },
      { value: 'condiments' as const, label: '🍯 ซอส/เครื่องปรุง', items: ['น้ำปลา', 'ซอยซ๊อส', 'น้ำมัน', 'เกลือ'] },
    ];

    for (const cat of categoryMap) {
      const count = categoryCount[cat.value];
      
      // หมวดที่ไม่มีเลย
      if (count === 0) {
        recs.push({
          reason: `ไม่มี${cat.label} ในตู้เย็น`,
          category: cat.value,
          suggestions: cat.items.slice(0, 4),
          icon: cat.label.substring(0, 2),
          priority: 'high',
        });
      }
      // หมวดที่มีน้อย (1-2 ชิ้น)
      else if (count <= 2) {
        recs.push({
          reason: `มี${cat.label}น้อยใน (เพียง ${count} รายการ)`,
          category: cat.value,
          suggestions: cat.items.slice(0, 3),
          icon: cat.label.substring(0, 2),
          priority: 'medium',
        });
      }
    }

    // 2. สิ่งของที่หมดอายุใกล้ (Priority: High) - ให้ซื้ออันอื่นมาแทน
    const expiringItems = items.filter(item => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const expiry = new Date(item.expiryDate);
      expiry.setHours(0, 0, 0, 0);
      const daysUntil = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      return daysUntil >= 0 && daysUntil <= 2;
    });

    if (expiringItems.length > 0) {
      recs.push({
        reason: `${expiringItems.length} รายการกำลังหมดอายุ - ซื้ออันใหม่`,
        category: expiringItems[0].category,
        suggestions: expiringItems.slice(0, 3).map(item => `${item.name} (${item.expiryDate})`),
        icon: '⏰',
        priority: 'high',
      });
    }

    // 3. แนะนำตามที่เซ (Optional)
    const today = new Date();
    const month = today.getMonth() + 1;
    
    let seasonalRec: Recommendation | null = null;
    
    if ([12, 1, 2].includes(month)) {
      // หนาว: ซุป, ต้มยำ, อาหารอุ่น
      seasonalRec = {
        reason: '🌡️ ฤดูหนาว - ซื้ออาหารต้มสำหรับเมนูอบอุ่น',
        category: 'vegetables',
        suggestions: ['หอม', 'กระเทียม', 'ข่า', 'ตะไคร้'],
        icon: '🌡️',
        priority: 'low',
      };
    } else if ([6, 7, 8, 9].includes(month)) {
      // ฝน: ผักกรอบ, ของเทพ
      seasonalRec = {
        reason: '🌧️ ฤดูฝน - ซื้อผักให้สด เก็บไว้ในตู้',
        category: 'vegetables',
        suggestions: ['กะหล่ำปลี', 'แครอท', 'ผักกวนแตง', 'มะนาว'],
        icon: '🌧️',
        priority: 'low',
      };
    } else {
      // ร้อน: ผลไม้สด, เครื่องดื่ม
      seasonalRec = {
        reason: '☀️ ฤดูร้อน - ซื้อผลไม้สด หรือเครื่องดื่มเย็น',
        category: 'fruits',
        suggestions: ['มะนาว', 'ส้ม', 'แอปเปิ้ล', 'องุ่น'],
        icon: '☀️',
        priority: 'low',
      };
    }

    if (seasonalRec && items.length > 0) {
      recs.push(seasonalRec);
    }

    // จัดเรียงตาม priority
    return recs.sort((a, b) => {
      const priorityMap = { high: 3, medium: 2, low: 1 };
      return priorityMap[b.priority] - priorityMap[a.priority];
    });
  }, [items]);

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div className="shopping-recommendation">
      <div className="shopping-header">
        <h2>🛒 รายการแนะนำที่ควรซื้อ</h2>
        <p className="shopping-subtitle">สำหรับตู้เย็นของคุณ</p>
      </div>

      <div className="shopping-list">
        {recommendations.map((rec, idx) => (
          <div
            key={idx}
            className={`shopping-card shopping-card--${rec.priority}`}
          >
            <div className="shopping-card__header">
              <div className="shopping-icon">{rec.icon}</div>
              <div className="shopping-title">
                <h3>{rec.reason}</h3>
              </div>
            </div>

            <div className="shopping-suggestions">
              {rec.suggestions.map((suggestion, sidx) => (
                <button
                  key={sidx}
                  className="suggestion-chip"
                  type="button"
                  title={`เพิ่ม ${suggestion} ลงในรายการซื้อ`}
                >
                  ✓ {suggestion}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="shopping-footer">
        <p className="shopping-note">
          💡 ปลายนี้แนะนำจากจำนวนสิ่งของในตู้และสถานะวันหมดอายุ
        </p>
      </div>
    </div>
  );
};
