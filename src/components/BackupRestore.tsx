import React, { useRef } from 'react';
import { storage } from '../utils/storage';
import './BackupRestore.css';

interface BackupRestoreProps {
  onImport?: () => void;
}

export const BackupRestore: React.FC<BackupRestoreProps> = ({ onImport }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    const data = storage.exportData();
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
    element.setAttribute('download', `fridge-backup-${new Date().toISOString().split('T')[0]}.json`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const content = event.target?.result as string;
        if (storage.importData(content)) {
          alert('นำเข้าข้อมูลสำเร็จ');
          onImport?.();
          window.location.reload();
        } else {
          alert('ไฟล์ไม่ถูกต้อง');
        }
      } catch {
        alert('เกิดข้อผิดพลาดในการนำเข้า');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="backup-restore">
      <button className="btn-secondary" onClick={handleExport}>
        📥 ส่งออกข้อมูล
      </button>
      <button className="btn-secondary" onClick={() => fileInputRef.current?.click()}>
        📤 นำเข้าข้อมูล
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleImport}
        style={{ display: 'none' }}
      />
    </div>
  );
};
