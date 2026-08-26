import React, { useState } from 'react';
import { FridgeItem, Portion } from '../types/item';
import { PortionManager } from './PortionManager';
import { dateUtils } from '../utils/date';
import './ItemCard.css';

interface ItemCardProps {
  item: FridgeItem;
  onEdit: (item: FridgeItem) => void;
  onDelete: (id: string) => void;
  onUpdateItem?: (id: string, item: FridgeItem) => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item, onEdit, onDelete, onUpdateItem }) => {
  const [showPortions, setShowPortions] = useState(false);
  const expiryStatus = dateUtils.getExpiryStatus(item.expiryDate);
  const expiryMessage = dateUtils.getExpiryMessage(item.expiryDate);

  const handleAddPortion = (portion: Portion) => {
    const updated = {
      ...item,
      portions: [...(item.portions || []), portion],
    };
    onUpdateItem?.(item.id, updated);
  };

  const handleUsePortion = (portionId: string, usedDate: string) => {
    const updated = {
      ...item,
      portions: (item.portions || []).map((p) =>
        p.id === portionId ? { ...p, usedDate } : p
      ),
    };
    onUpdateItem?.(item.id, updated);
  };

  const handleDeletePortion = (portionId: string) => {
    const updated = {
      ...item,
      portions: (item.portions || []).filter((p) => p.id !== portionId),
    };
    onUpdateItem?.(item.id, updated);
  };

  return (
    <div className={`item-card item-card--${expiryStatus}`}>
      <div className="item-card__header">
        <h3 className="item-card__name">{item.name}</h3>
        {expiryStatus !== 'good' && (
          <span className={`item-card__status item-card__status--${expiryStatus}`}>
            {expiryStatus === 'expired' ? '⚠️ หมดอายุ' : '⏰ กำลังหมดอายุ'}
          </span>
        )}
      </div>

      <div className="item-card__details">
        <div className="item-detail">
          <span className="item-detail__label">จำนวน:</span>
          <span className="item-detail__value">{item.quantity} {item.unit}</span>
        </div>

        <div className="item-detail">
          <span className="item-detail__label">วันหมดอายุ:</span>
          <span className="item-detail__value">{dateUtils.format(item.expiryDate)}</span>
        </div>

        <div className={`item-detail item-detail--${expiryStatus}`}>
          <span className="item-detail__label">สถานะ:</span>
          <span className="item-detail__value">{expiryMessage}</span>
        </div>

        {item.notes && (
          <div className="item-detail">
            <span className="item-detail__label">หมายเหตุ:</span>
            <span className="item-detail__value">{item.notes}</span>
          </div>
        )}
      </div>

      {/* Portion Manager Toggle */}
      {item.category === 'meat' || item.category === 'frozen' ? (
        <div className="item-card__portions-toggle">
          <button
            className="btn-toggle-portions"
            onClick={() => setShowPortions(!showPortions)}
          >
            {showPortions ? '▼ ซ่อนการแบ่ง' : '▶ แสดงการแบ่ง'}
            {item.portions && item.portions.length > 0 && (
              <span className="portion-badge">{item.portions.length}</span>
            )}
          </button>
        </div>
      ) : null}

      {/* Portion Manager */}
      {showPortions && (item.category === 'meat' || item.category === 'frozen') && (
        <PortionManager
          portions={item.portions || []}
          totalUnit={item.unit}
          onAddPortion={handleAddPortion}
          onUsePortion={handleUsePortion}
          onDeletePortion={handleDeletePortion}
        />
      )}

      <div className="item-card__actions">
        <button className="btn-small btn-edit" onClick={() => onEdit(item)}>
          แก้ไข
        </button>
        <button className="btn-small btn-delete" onClick={() => onDelete(item.id)}>
          ลบ
        </button>
      </div>
    </div>
  );
};
