import React, { useState } from 'react';
import { FridgeItem, CATEGORIES } from '../types/item';
import { QuickItemSelector } from './QuickItemSelector';
import { commonUnits } from '../data/quickItems';
import { dateUtils } from '../utils/date';
import './ItemForm.css';

interface ItemFormProps {
  onSubmit: (item: FridgeItem) => void;
  onCancel: () => void;
  initialItem?: FridgeItem;
}

export const ItemForm: React.FC<ItemFormProps> = ({ onSubmit, onCancel, initialItem }) => {
  const [formData, setFormData] = useState({
    name: initialItem?.name || '',
    category: initialItem?.category || 'vegetables',
    quantity: initialItem?.quantity || 1,
    unit: initialItem?.unit || 'ชิ้น',
    expiryDate: initialItem?.expiryDate || dateUtils.today(),
    notes: initialItem?.notes || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert('กรุณากรอกชื่อสิ่งของ');
      return;
    }

    const item: FridgeItem = {
      id: initialItem?.id || Date.now().toString(),
      name: formData.name.trim(),
      category: formData.category as any,
      quantity: formData.quantity,
      unit: formData.unit,
      expiryDate: formData.expiryDate,
      addedDate: initialItem?.addedDate || dateUtils.today(),
      notes: formData.notes.trim() || undefined,
    };

    onSubmit(item);
  };

  const handleQuickSelect = (name: string, unit: string) => {
    setFormData({
      ...formData,
      name,
      unit,
    });
  };

  return (
    <div className="item-form-overlay">
      <div className="item-form">
        <h2>{initialItem ? 'แก้ไขสิ่งของ' : 'เพิ่มสิ่งของใหม่'}</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">ชื่อสิ่งของ *</label>
            <div className="name-input-group">
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="เช่น แอปเปิ้ล, ไก่, น้ำนม"
                autoFocus
              />
              <QuickItemSelector onSelectItem={handleQuickSelect} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category">หมวดหมู่</label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
              >
                {CATEGORIES.map(cat => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="quantity">จำนวน</label>
              <input
                id="quantity"
                type="number"
                min="0.1"
                step="0.1"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: parseFloat(e.target.value) || 0 })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="unit">หน่วย</label>
              <select
                id="unit"
                value={formData.unit}
                onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
              >
                {commonUnits.map(unit => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="expiryDate">วันหมดอายุ</label>
            <input
              id="expiryDate"
              type="date"
              value={formData.expiryDate}
              onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="notes">หมายเหตุ</label>
            <textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="เช่น ที่ชั้นบน, แช่แข็งแล้ว"
              rows={3}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              {initialItem ? 'บันทึกการเปลี่ยนแปลง' : 'เพิ่มสิ่งของ'}
            </button>
            <button type="button" className="btn-secondary" onClick={onCancel}>
              ยกเลิก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
