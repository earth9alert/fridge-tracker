import { useState, useMemo, useEffect } from 'react';
import { useFridgeItems } from './hooks/useFridgeItems';
import { ItemForm } from './components/ItemForm';
import { ItemCard } from './components/ItemCard';
import { CategoryFilter } from './components/CategoryFilter';
import { SearchBar } from './components/SearchBar';
import { BackupRestore } from './components/BackupRestore';
import { RecipeRecommendation } from './components/RecipeRecommendation';
import { Toast, useToast } from './components/Toast';
import { ThemeToggle } from './components/ThemeToggle';
import { FridgeItem, Category, CATEGORIES } from './types/item';
import './App.css';

function App() {
  const { items, isLoading, isSaving, error, addItem, updateItem, deleteItem, getExpiringItems, getExpiredItems } = useFridgeItems();
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<FridgeItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const toast = useToast();

  // Show error toast when error occurs
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error, toast]);

  const expiredItems = useMemo(() => getExpiredItems(), [getExpiredItems]);
  const expiringItems = useMemo(() => getExpiringItems(3), [getExpiringItems]);

  const itemCounts = useMemo(() => {
    const counts = {} as Record<Category, number>;
    CATEGORIES.forEach(cat => {
      counts[cat.value] = items.filter(item => item.category === cat.value).length;
    });
    return counts;
  }, [items]);

  // Filter items
  const filteredItems = useMemo(() => {
    let result = items;

    if (selectedCategory) {
      result = result.filter(item => item.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.notes?.toLowerCase().includes(query)
      );
    }

    return result;
  }, [items, selectedCategory, searchQuery]);

  const handleSubmit = (item: FridgeItem) => {
    if (editingItem) {
      updateItem(editingItem.id, item);
      toast.success('อัปเดตสิ่งของสำเร็จ');
    } else {
      addItem(item);
      toast.success('เพิ่มสิ่งของสำเร็จ');
    }
    setShowForm(false);
    setEditingItem(null);
  };

  const handleEdit = (item: FridgeItem) => {
    setEditingItem(item);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('ต้องการลบสิ่งของนี้หรือไม่?')) {
      deleteItem(id);
      toast.success('ลบสิ่งของสำเร็จ');
    }
  };

  if (isLoading) {
    return <div className="app loading">กำลังโหลด...</div>;
  }

  return (
    <div className="app">
      <ThemeToggle />
      <header className="app-header">
        <div className="header-content">
          <h1>🧊 ตู้เย็น - ตัวจัดการสิ่งของ</h1>
          <p className="header-subtitle">ติดตามสิ่งของในตู้เย็นของคุณ</p>
        </div>
      </header>

      <main className="app-main">
        {/* Loading state indicator */}
        {isSaving && (
          <div className="alert alert--info">
            <p>💾 กำลังบันทึก...</p>
          </div>
        )}

        {expiredItems.length > 0 && (
          <div className="alert alert--danger">
            <h3>⚠️ สิ่งของที่หมดอายุแล้ว ({expiredItems.length})</h3>
            <p>กรุณาตรวจสอบและลบสิ่งของที่หมดอายุ</p>
          </div>
        )}

        {expiringItems.length > 0 && (
          <div className="alert alert--warning">
            <h3>⏰ สิ่งของที่กำลังหมดอายุ ({expiringItems.length})</h3>
            <p>ใช้หรือลบสิ่งของเหล่านี้โดยเร็ว</p>
          </div>
        )}

        {/* Empty State */}
        {items.length === 0 && (
          <div className="empty-state">
            <div className="empty-state__icon">🧊</div>
            <h2>ตู้เย็นว่างเปล่า</h2>
            <p>เริ่มต้นโดยเพิ่มสิ่งของแรกของคุณ</p>
          </div>
        )}

        {/* Main Content */}
        {items.length > 0 && (
          <>
            {/* Search and Filter Controls */}
            <div className="controls">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
              <CategoryFilter
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
                itemCounts={itemCounts}
              />
              <BackupRestore />
            </div>

            {/* Recipe Recommendations */}
            <RecipeRecommendation items={items} />

            {/* Items Grid */}
            {filteredItems.length === 0 ? (
              <div className="no-results">
                <p>ไม่พบสิ่งของที่ตรงกับการค้นหา</p>
              </div>
            ) : (
              <div className="items-grid">
                {filteredItems.map(item => (
                  <ItemCard
                    key={item.id}
                    item={item}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onUpdateItem={updateItem}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      {/* Floating Action Button */}
      <button
        className="fab fab-add"
        onClick={() => {
          setEditingItem(null);
          setShowForm(true);
        }}
        title="เพิ่มสิ่งของใหม่"
      >
        ➕
      </button>

      {/* Form Modal */}
      {showForm && (
        <ItemForm
          onSubmit={handleSubmit}
          onCancel={() => {
            setShowForm(false);
            setEditingItem(null);
          }}
          initialItem={editingItem || undefined}
          isSaving={isSaving}
        />
      )}

      {/* Toast Notifications */}
      <Toast messages={toast.messages} onDismiss={toast.dismiss} />
    </div>
  );
}

export default App;
