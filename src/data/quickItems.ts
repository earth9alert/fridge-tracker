import { Category } from '../types/item';

export interface QuickItem {
  name: string;
  category: Category;
  unit: string;
}

export const commonUnits = [
  'ชิ้น',
  'ลูก',
  'หัว',
  'ตัว',
  'กระจุกเล็ก',
  'แพ็ค',
  'ถุง',
  'ขวด',
  'กระปุก',
  'กล่อง',
  'หวี',
  'กอ',
  'มัด',
  'กำ',
  'ก้าน',
  'แท่ง',
  'ลิตร',
  'มล.',
  'กิโลกรัม',
  'กก.',
  'กรัม',
  'ก.',
  'ออนซ์',
];

export const quickItems: QuickItem[] = [
  // ผัก
  { name: 'หอม', category: 'vegetables', unit: 'หัว' },
  { name: 'กระเทียม', category: 'vegetables', unit: 'กระจุกเล็ก' },
  { name: 'กะหล่ำปลี', category: 'vegetables', unit: 'ลูก' },
  { name: 'แครอท', category: 'vegetables', unit: 'ลูก' },
  { name: 'มะเขือเทศ', category: 'vegetables', unit: 'ลูก' },
  { name: 'พริก', category: 'vegetables', unit: 'ลูก' },
  { name: 'มะนาว', category: 'fruits', unit: 'ลูก' },
  { name: 'ผักกวนแตง', category: 'vegetables', unit: 'ลูก' },
  { name: 'ถั่วงอก', category: 'vegetables', unit: 'แพ็ค' },
  { name: 'หนุ่มสด', category: 'vegetables', unit: 'กำ' },
  { name: 'เซเลอรี่', category: 'vegetables', unit: 'กำ' },
  { name: 'มะละกอ', category: 'vegetables', unit: 'ลูก' },
  { name: 'ข่า', category: 'vegetables', unit: 'ชิ้น' },
  { name: 'ตะไคร้', category: 'vegetables', unit: 'ก้าน' },

  // ผลไม้
  { name: 'แอปเปิ้ล', category: 'fruits', unit: 'ลูก' },
  { name: 'ส้ม', category: 'fruits', unit: 'ลูก' },
  { name: 'กล้วย', category: 'fruits', unit: 'หวี' },
  { name: 'องุ่น', category: 'fruits', unit: 'หวี' },
  { name: 'สตรอเบอร์รี่', category: 'fruits', unit: 'แพ็ค' },
  { name: 'สับปะรด', category: 'fruits', unit: 'ลูก' },
  { name: 'มะม่วง', category: 'fruits', unit: 'ลูก' },
  { name: 'ชมพู่', category: 'fruits', unit: 'ลูก' },
  { name: 'ลิ้นจี่', category: 'fruits', unit: 'กอ' },

  // เนื้อสัตว์
  { name: 'ไก่', category: 'meat', unit: 'ตัว' },
  { name: 'หมู', category: 'meat', unit: 'ตัน' },
  { name: 'เนื้อ', category: 'meat', unit: 'กก.' },
  { name: 'กุ้ง', category: 'meat', unit: 'กก.' },
  { name: 'ปลา', category: 'meat', unit: 'ตัว' },
  { name: 'หมึก', category: 'meat', unit: 'ตัว' },
  { name: 'ไข่', category: 'dairy', unit: 'ฟอง' },
  { name: 'เบคอน', category: 'meat', unit: 'แพ็ค' },

  // นมและเนย
  { name: 'นม', category: 'dairy', unit: 'กล่อง' },
  { name: 'เนย', category: 'dairy', unit: 'แท่ง' },
  { name: 'เนยแข็ง', category: 'dairy', unit: 'ชิ้น' },
  { name: 'โยเกิร์ต', category: 'dairy', unit: 'แพ็ค' },
  { name: 'เนื้อสัตว์แช่แข็ง', category: 'meat', unit: 'ถุง' },
  { name: 'โตฟู', category: 'dairy', unit: 'แพ็ค' },

  // ซอส/เครื่องปรุง
  { name: 'น้ำปลา', category: 'condiments', unit: 'ขวด' },
  { name: 'ซี่อิ้ว', category: 'condiments', unit: 'ขวด' },
  { name: 'มิโซ', category: 'condiments', unit: 'กระปุก' },
  { name: 'น้ำมันพืช', category: 'condiments', unit: 'ขวด' },
  { name: 'ข้าวสวย', category: 'condiments', unit: 'ถุง' },
  { name: 'พาสต้า', category: 'condiments', unit: 'แพ็ค' },
  { name: 'ก้อยเส้นบาง', category: 'condiments', unit: 'แพ็ค' },
  { name: 'เกลือ', category: 'condiments', unit: 'โหล' },
  { name: 'พริกแห้ง', category: 'condiments', unit: 'ถุง' },
  { name: 'กระเพรา', category: 'vegetables', unit: 'มัด' },

  // แช่แข็ง
  { name: 'ของแช่แข็ง', category: 'frozen', unit: 'ถุง' },
  { name: 'ไอศครีม', category: 'frozen', unit: 'ถุง' },
];
