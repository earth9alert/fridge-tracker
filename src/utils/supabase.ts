import { createClient } from '@supabase/supabase-js';
import { FridgeItem } from '../types/item';

// Supabase configuration
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Types
interface DbItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  expiry_date: string;
  added_date: string;
  notes?: string;
  portions?: any;
  user_id?: string;
  created_at?: string;
}

export interface OperationResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

/**
 * Get all items for current user
 */
export const getItems = async (): Promise<OperationResult<FridgeItem[]>> => {
  try {
    const { data, error } = await supabase
      .from('fridge_items')
      .select('*')
      .order('added_date', { ascending: false });

    if (error) {
      console.error('Supabase fetch error:', error);
      return {
        success: false,
        error: error.message || 'เกิดข้อผิดพลาดในการดึงข้อมูล',
      };
    }

    return {
      success: true,
      data: (data || []).map(dbItemToFridgeItem),
    };
  } catch (error) {
    console.error('Error fetching items:', error);
    return {
      success: false,
      error: 'เกิดข้อผิดพลาดที่ไม่คาดคิด',
    };
  }
};

/**
 * Add new item
 */
export const addItem = async (item: FridgeItem): Promise<OperationResult<FridgeItem>> => {
  try {
    const dbItem = fridgeItemToDbItem(item);
    const { data, error } = await supabase
      .from('fridge_items')
      .insert([dbItem])
      .select()
      .single();

    if (error) {
      console.error('Supabase insert error:', error);
      return {
        success: false,
        error: error.message || 'ไม่สามารถเพิ่มสิ่งของได้',
      };
    }

    return {
      success: true,
      data: dbItemToFridgeItem(data),
    };
  } catch (error) {
    console.error('Error adding item:', error);
    return {
      success: false,
      error: 'เกิดข้อผิดพลาดในการเพิ่มสิ่งของ',
    };
  }
};

/**
 * Update item
 */
export const updateItem = async (
  id: string,
  updates: Partial<FridgeItem>
): Promise<OperationResult<FridgeItem>> => {
  try {
    const dbUpdates = Object.entries(updates).reduce((acc, [key, value]) => {
      if (key === 'expiryDate') acc['expiry_date'] = value;
      else if (key === 'addedDate') acc['added_date'] = value;
      else acc[key] = value;
      return acc;
    }, {} as any);

    const { data, error } = await supabase
      .from('fridge_items')
      .update(dbUpdates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Supabase update error:', error);
      return {
        success: false,
        error: error.message || 'ไม่สามารถอัปเดตสิ่งของได้',
      };
    }

    return {
      success: true,
      data: dbItemToFridgeItem(data),
    };
  } catch (error) {
    console.error('Error updating item:', error);
    return {
      success: false,
      error: 'เกิดข้อผิดพลาดในการอัปเดตสิ่งของ',
    };
  }
};

/**
 * Delete item
 */
export const deleteItem = async (id: string): Promise<OperationResult<void>> => {
  try {
    const { error } = await supabase
      .from('fridge_items')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Supabase delete error:', error);
      return {
        success: false,
        error: error.message || 'ไม่สามารถลบสิ่งของได้',
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Error deleting item:', error);
    return {
      success: false,
      error: 'เกิดข้อผิดพลาดในการลบสิ่งของ',
    };
  }
};

/**
 * Convert DB item to FridgeItem
 */
function dbItemToFridgeItem(dbItem: DbItem): FridgeItem {
  return {
    id: dbItem.id,
    name: dbItem.name,
    category: dbItem.category as any,
    quantity: dbItem.quantity,
    unit: dbItem.unit,
    expiryDate: dbItem.expiry_date,
    addedDate: dbItem.added_date,
    notes: dbItem.notes,
    portions: dbItem.portions,
  };
}

/**
 * Convert FridgeItem to DB item
 */
function fridgeItemToDbItem(item: FridgeItem): DbItem {
  return {
    id: item.id,
    name: item.name,
    category: item.category,
    quantity: item.quantity,
    unit: item.unit,
    expiry_date: item.expiryDate,
    added_date: item.addedDate,
    notes: item.notes,
    portions: item.portions,
  };
}
