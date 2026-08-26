import React, { useState } from 'react';
import { Portion } from '../types/item';
import { commonUnits } from '../data/quickItems';
import { dateUtils } from '../utils/date';
import './PortionManager.css';

interface PortionManagerProps {
  portions: Portion[];
  totalUnit: string;
  onAddPortion: (portion: Portion) => void;
  onUsePortion: (portionId: string, usedDate: string) => void;
  onDeletePortion: (portionId: string) => void;
}

export const PortionManager: React.FC<PortionManagerProps> = ({
  portions,
  totalUnit,
  onAddPortion,
  onUsePortion,
  onDeletePortion,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ quantity: '', unit: totalUnit });

  const handleAddPortion = () => {
    if (!formData.quantity.trim()) return;

    const newPortion: Portion = {
      id: Date.now().toString(),
      quantity: parseFloat(formData.quantity),
      unit: formData.unit,
    };

    onAddPortion(newPortion);
    setFormData({ quantity: '', unit: totalUnit });
    setShowForm(false);
  };

  const usedPortions = portions.filter((p) => p.usedDate);
  const availablePortions = portions.filter((p) => !p.usedDate);

  return (
    <div className="portion-manager">
      <div className="portion-header">
        <h3>🛍️ แบ่งถุงเก็บ</h3>
        <div className="portion-stats">
          <span className="stat available">
            พร้อมใช้: {availablePortions.length} ถุง
          </span>
          {usedPortions.length > 0 && (
            <span className="stat used">ใช้แล้ว: {usedPortions.length} ถุง</span>
          )}
        </div>
      </div>

      {/* Available Portions */}
      {availablePortions.length > 0 && (
        <div className="portions-section">
          <h4>📦 พร้อมใช้</h4>
          <div className="portions-grid">
            {availablePortions.map((portion) => (
              <div key={portion.id} className="portion-card">
                <div className="portion-content">
                  <div className="portion-qty">
                    {portion.quantity} {portion.unit}
                  </div>
                  <button
                    className="btn-small btn-success"
                    onClick={() =>
                      onUsePortion(portion.id, dateUtils.today())
                    }
                  >
                    ✓ ใช้แล้ว
                  </button>
                </div>
                <button
                  className="btn-icon btn-danger"
                  onClick={() => onDeletePortion(portion.id)}
                  title="ลบถุง"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Used Portions */}
      {usedPortions.length > 0 && (
        <div className="portions-section used">
          <h4>✓ ใช้แล้ว</h4>
          <div className="portions-grid">
            {usedPortions.map((portion) => (
              <div key={portion.id} className="portion-card used">
                <div className="portion-content">
                  <div className="portion-qty">
                    {portion.quantity} {portion.unit}
                  </div>
                  <div className="portion-date">
                    {portion.usedDate && dateUtils.format(portion.usedDate)}
                  </div>
                </div>
                <button
                  className="btn-icon btn-secondary"
                  onClick={() => onDeletePortion(portion.id)}
                  title="ลบ"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add Portion Form */}
      {!showForm && (
        <button className="btn-add-portion" onClick={() => setShowForm(true)}>
          ➕ เพิ่มถุงใหม่
        </button>
      )}

      {showForm && (
        <div className="portion-form">
          <div className="form-row">
            <input
              type="number"
              className="input-qty"
              placeholder="ปริมาณ"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
              step="0.1"
            />
            <select
              className="input-unit"
              value={formData.unit}
              onChange={(e) =>
                setFormData({ ...formData, unit: e.target.value })
              }
            >
              {commonUnits.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
          </div>
          <div className="form-actions">
            <button className="btn-small btn-primary" onClick={handleAddPortion}>
              เพิ่ม
            </button>
            <button
              className="btn-small btn-secondary"
              onClick={() => setShowForm(false)}
            >
              ยกเลิก
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
