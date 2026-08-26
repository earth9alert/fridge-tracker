import React from 'react';
import { FridgeItem } from '../types/item';
import { dateUtils } from '../utils/date';
import './ItemCard.css';

interface ItemCardProps {
  item: FridgeItem;
  onEdit: (item: FridgeItem) => void;
  onDelete: (id: string) => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item, onEdit, onDelete }) => {
  const expiryStatus = dateUtils.getExpiryStatus(item.expiryDate);
  const expiryMessage = dateUtils.getExpiryMessage(item.expiryDate);

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
