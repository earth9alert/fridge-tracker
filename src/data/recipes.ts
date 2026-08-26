import { Category } from '../types/item';

export interface Recipe {
  id: string;
  name: string;
  ingredients: {
    name: string;
    category: Category;
  }[];
  instructions: string[];
  cookTime: string;
  difficulty: 'easy' | 'medium' | 'hard';
  servings: string;
}

export const recipes: Recipe[] = [
  // ข้าว
  {
    id: 'egg-fried-rice',
    name: 'ข้าวผัดไข่',
    ingredients: [
      { name: 'ข้าวสวย', category: 'condiments' },
      { name: 'ไข่', category: 'dairy' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'กระเทียม', category: 'vegetables' },
    ],
    instructions: [
      'ตั้งกระทะบนไฟแรง เทน้ำมันพืช',
      'ผ่าหอมและกระเทียม จากนั้นใส่ลงไป',
      'ตอกไข่ลงไปคลุกเคล้า',
      'ใส่ข้าวสวยลงไป ผัดให้ทั่ว',
      'ปรุงรสด้วยน้ำปลาและพริก จากนั้นตักเสิร์ฟ',
    ],
    cookTime: '10 นาที',
    difficulty: 'easy',
    servings: '2 คน',
  },
  {
    id: 'fried-rice-shrimp',
    name: 'ข้าวผัดกุ้ง',
    ingredients: [
      { name: 'ข้าวสวย', category: 'condiments' },
      { name: 'กุ้ง', category: 'meat' },
      { name: 'ไข่', category: 'dairy' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'ถั่วเหลือง', category: 'vegetables' },
    ],
    instructions: [
      'ตั้งกระทะ เทน้ำมันพืช',
      'ใส่กุ้ง ผัดจนสุก',
      'ตอกไข่ลงไป คลุกเคล้า',
      'ใส่ข้าวและถั่ว ผัดให้ทั่ว',
      'ปรุงรสและตักเสิร์ฟ',
    ],
    cookTime: '12 นาที',
    difficulty: 'easy',
    servings: '2 คน',
  },
  {
    id: 'fried-rice-chicken',
    name: 'ข้าวผัดไก่',
    ingredients: [
      { name: 'ข้าวสวย', category: 'condiments' },
      { name: 'ไก่', category: 'meat' },
      { name: 'ไข่', category: 'dairy' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'ข่าวกี่ไข่', category: 'vegetables' },
    ],
    instructions: [
      'เจียวไก่ให้สุก',
      'ตั้งกระทะ ผัดหอมและกระเทียม',
      'ใส่ไก่และไข่',
      'ใส่ข้าว ผัดให้ทั่ว',
      'ปรุงรสและตักเสิร์ฟ',
    ],
    cookTime: '15 นาที',
    difficulty: 'easy',
    servings: '2 คน',
  },
  {
    id: 'pad-thai',
    name: 'ผัดไทย',
    ingredients: [
      { name: 'ก้อยเส้นบาง', category: 'condiments' },
      { name: 'ไข่', category: 'dairy' },
      { name: 'กุ้ง', category: 'meat' },
      { name: 'ถั่วงอก', category: 'vegetables' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'มะนาว', category: 'fruits' },
    ],
    instructions: [
      'ต้มน้ำ ใส่ก้อยเส้นลงไป ต้มจนนุ่ม',
      'ตั้งกระทะ เทน้ำมันพืช',
      'ใส่ไข่ผัด จากนั้นใส่กุ้ง',
      'ใส่ก้อยเส้นที่ระบายน้ำแล้ว',
      'เพิ่มถั่วงอก หอม และมะนาว ผัดให้ทั่ว',
    ],
    cookTime: '15 นาที',
    difficulty: 'medium',
    servings: '2 คน',
  },

  // ต้มและซุป
  {
    id: 'tom-yam-goong',
    name: 'ต้มยำกุ้ง',
    ingredients: [
      { name: 'กุ้ง', category: 'meat' },
      { name: 'มะนาว', category: 'fruits' },
      { name: 'พริกแห้ง', category: 'condiments' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'กระเทียม', category: 'vegetables' },
      { name: 'น้ำปลา', category: 'condiments' },
    ],
    instructions: [
      'ต้มน้ำในหม้อ',
      'ใส่กระเทียมและพริกแห้ง',
      'ใส่กุ้งลงไปต้ม',
      'เพิ่มน้ำปลา มะนาว และหอม',
      'ปรุงรสตามชอบ และตักเสิร์ฟ',
    ],
    cookTime: '15 นาที',
    difficulty: 'medium',
    servings: '2 คน',
  },
  {
    id: 'tom-kha-gai',
    name: 'ต้มข่าไก่',
    ingredients: [
      { name: 'ไก่', category: 'meat' },
      { name: 'น้ำปลา', category: 'condiments' },
      { name: 'มะนาว', category: 'fruits' },
      { name: 'พริก', category: 'vegetables' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'กระเทียม', category: 'vegetables' },
    ],
    instructions: [
      'ต้มน้ำ',
      'ใส่ไก่ลงไปต้ม',
      'ตั้งไฟเบา ใส่ข่า',
      'เพิ่มน้ำปลา มะนาว และพริก',
      'ปรุงรสตามชอบ ตักเสิร์ฟ',
    ],
    cookTime: '20 นาที',
    difficulty: 'medium',
    servings: '2 คน',
  },
  {
    id: 'soup',
    name: 'ซุปเนื้อผัก',
    ingredients: [
      { name: 'เนื้อ', category: 'meat' },
      { name: 'แครอท', category: 'vegetables' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'เซเลอรี่', category: 'vegetables' },
      { name: 'เกลือ', category: 'condiments' },
    ],
    instructions: [
      'ต้มน้ำ ใส่เนื้อลงไป',
      'ต้มจนเนื้อเริ่มอ่อน',
      'ใส่แครอท หอม และเซเลอรี่',
      'ต้มจนผักสุก',
      'ปรุงรสด้วยเกลือ แล้วตักเสิร์ฟ',
    ],
    cookTime: '30 นาที',
    difficulty: 'medium',
    servings: '3 คน',
  },
  {
    id: 'miso-soup',
    name: 'มิโซซุป',
    ingredients: [
      { name: 'โตฟู', category: 'dairy' },
      { name: 'สาหร่าย', category: 'vegetables' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'มิโซ', category: 'condiments' },
      { name: 'น้ำปลา', category: 'condiments' },
    ],
    instructions: [
      'ต้มน้ำ',
      'ใส่โตฟู และสาหร่าย',
      'ใส่มิโซ (อย่าให้เดือด)',
      'ปรุงรสด้วยน้ำปลา',
      'เทลงชามและตักเสิร์ฟ',
    ],
    cookTime: '10 นาที',
    difficulty: 'easy',
    servings: '2 คน',
  },

  // ผัด
  {
    id: 'stir-fry-vegetable',
    name: 'ผักผัดทั่วไป',
    ingredients: [
      { name: 'กะหล่ำปลี', category: 'vegetables' },
      { name: 'แครอท', category: 'vegetables' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'กระเทียม', category: 'vegetables' },
      { name: 'น้ำมันพืช', category: 'condiments' },
    ],
    instructions: [
      'ตั้งกระทะบนไฟแรง เทน้ำมันพืช',
      'ผ่าหอมและกระเทียม จากนั้นใส่ลงไป',
      'ใส่กะหล่ำปลี และแครอท',
      'ผัดให้สุกพอดี ประมาณ 5-7 นาที',
      'ปรุงรสด้วยน้ำปลา แล้วตักเสิร์ฟ',
    ],
    cookTime: '10 นาที',
    difficulty: 'easy',
    servings: '2 คน',
  },
  {
    id: 'chicken-stir-fry',
    name: 'ไก่ผัดซี่อิ้ว',
    ingredients: [
      { name: 'ไก่', category: 'meat' },
      { name: 'ซี่อิ้ว', category: 'condiments' },
      { name: 'กระเทียม', category: 'vegetables' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'พริก', category: 'vegetables' },
    ],
    instructions: [
      'ตั้งกระทะบนไฟแรง เทน้ำมันพืช',
      'ผ่าหอมและกระเทียม จากนั้นใส่ลงไป',
      'ใส่เนื้อไก่ที่หั่นแล้ว',
      'เมื่อไก่สุก ใส่ซี่อิ้ว',
      'ผัดให้ทั่ว จากนั้นตักเสิร์ฟ',
    ],
    cookTime: '15 นาที',
    difficulty: 'easy',
    servings: '2 คน',
  },
  {
    id: 'beef-stir-fry',
    name: 'เนื้อผัดพริกเกลือ',
    ingredients: [
      { name: 'เนื้อ', category: 'meat' },
      { name: 'พริก', category: 'vegetables' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'กระเทียม', category: 'vegetables' },
      { name: 'เกลือ', category: 'condiments' },
    ],
    instructions: [
      'ตั้งกระทะ เทน้ำมันพืช',
      'ผัดเนื้อจนเริ่มสุก',
      'ใส่หอม กระเทียม และพริก',
      'ผัดให้ทั่ว ประมาณ 3-5 นาที',
      'ปรุงด้วยเกลือ ตักเสิร์ฟ',
    ],
    cookTime: '15 นาที',
    difficulty: 'medium',
    servings: '2 คน',
  },
  {
    id: 'pad-krapow-moo',
    name: 'ผัดกระเพราหมู',
    ingredients: [
      { name: 'หมู', category: 'meat' },
      { name: 'กระเพรา', category: 'vegetables' },
      { name: 'กระเทียม', category: 'vegetables' },
      { name: 'พริก', category: 'vegetables' },
      { name: 'น้ำปลา', category: 'condiments' },
    ],
    instructions: [
      'ตั้งกระทะ เทน้ำมันพืช',
      'ผัดกระเทียมให้หอม',
      'ใส่หมูสับ ผัดจนสุก',
      'เพิ่มกระเพรา พริก และน้ำปลา',
      'ผัดให้ทั่ว ตักเสิร์ฟ',
    ],
    cookTime: '10 นาที',
    difficulty: 'easy',
    servings: '2 คน',
  },
  {
    id: 'stir-fry-mixed-seafood',
    name: 'อาหารทะเลผัดรวม',
    ingredients: [
      { name: 'กุ้ง', category: 'meat' },
      { name: 'หมึก', category: 'meat' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'กระเทียม', category: 'vegetables' },
      { name: 'ซี่อิ้ว', category: 'condiments' },
    ],
    instructions: [
      'ตั้งกระทะ เทน้ำมันพืช',
      'ผัดกระเทียม จากนั้นใส่หอม',
      'ใส่กุ้งและหมึก ผัดจนสุก',
      'เพิ่มซี่อิ้ว',
      'ผัดให้ทั่ว ตักเสิร์ฟ',
    ],
    cookTime: '12 นาที',
    difficulty: 'medium',
    servings: '2 คน',
  },

  // ไข่
  {
    id: 'omelet',
    name: 'ไข่เจียว',
    ingredients: [
      { name: 'ไข่', category: 'dairy' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'พริก', category: 'vegetables' },
      { name: 'น้ำมันพืช', category: 'condiments' },
      { name: 'เกลือ', category: 'condiments' },
    ],
    instructions: [
      'ตั้งกระทะบนไฟปานกลาง',
      'เทน้ำมันพืช',
      'ตอกไข่ลงไปคลุกให้เข้ากัน',
      'ใส่หอมและพริก',
      'พับไข่ตรงกลาง จากนั้นตักเสิร์ฟ',
    ],
    cookTime: '8 นาที',
    difficulty: 'easy',
    servings: '1 คน',
  },
  {
    id: 'scrambled-eggs',
    name: 'ไข่คน',
    ingredients: [
      { name: 'ไข่', category: 'dairy' },
      { name: 'กระเทียม', category: 'vegetables' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'น้ำปลา', category: 'condiments' },
      { name: 'พริก', category: 'vegetables' },
    ],
    instructions: [
      'ตั้งกระทะ เทน้ำมันพืช',
      'ผัดกระเทียม จากนั้นใส่หอม',
      'ตอกไข่ลงไปคนให้เข้ากัน',
      'เพิ่มพริก ปรุงรสด้วยน้ำปลา',
      'ตักเสิร์ฟ',
    ],
    cookTime: '8 นาที',
    difficulty: 'easy',
    servings: '1 คน',
  },
  {
    id: 'egg-with-sauce',
    name: 'ไข่ลูกเขย',
    ingredients: [
      { name: 'ไข่', category: 'dairy' },
      { name: 'น้ำปลา', category: 'condiments' },
      { name: 'พริก', category: 'vegetables' },
      { name: 'กระเทียม', category: 'vegetables' },
      { name: 'น้ำมันพืช', category: 'condiments' },
    ],
    instructions: [
      'ตั้งน้ำเดือดในหม้อ',
      'ใส่ไข่ลงไป เมื่อสุกตักออก',
      'ทำน้ำปลาเจียว (ผัดกระเทียม พริก)',
      'เทน้ำปลาเจียวลงบนไข่',
      'ตักเสิร์ฟ',
    ],
    cookTime: '10 นาที',
    difficulty: 'easy',
    servings: '1 คน',
  },

  // สลัด
  {
    id: 'salad',
    name: 'สลัดสดชื่น',
    ingredients: [
      { name: 'ผักกวนแตง', category: 'vegetables' },
      { name: 'มะเขือเทศ', category: 'vegetables' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'มะนาว', category: 'fruits' },
      { name: 'น้ำปลา', category: 'condiments' },
    ],
    instructions: [
      'สะอาด และหั่นผักให้เป็นชิ้นเหมาะสม',
      'ใส่ผักลงในชาม',
      'ปรุงรสด้วยมะนาว น้ำปลา',
      'คลุกเคล้าให้ทั่ว',
      'เสิร์ฟตอนนี้ไปยังโต๊ะ',
    ],
    cookTime: '5 นาที',
    difficulty: 'easy',
    servings: '2 คน',
  },
  {
    id: 'som-tam',
    name: 'ส้มตำ',
    ingredients: [
      { name: 'มะละกอ', category: 'vegetables' },
      { name: 'มะเขือเทศ', category: 'vegetables' },
      { name: 'พริก', category: 'vegetables' },
      { name: 'มะนาว', category: 'fruits' },
      { name: 'น้ำปลา', category: 'condiments' },
    ],
    instructions: [
      'เตยมะละกอ',
      'ใส่ลงในตาก ตำให้อ่อน',
      'ใส่มะเขือเทศ พริก',
      'ปรุงรสด้วยมะนาว น้ำปลา',
      'ตำให้ทั่ว ตักเสิร์ฟ',
    ],
    cookTime: '10 นาที',
    difficulty: 'medium',
    servings: '2 คน',
  },
  {
    id: 'larb',
    name: 'ลาบหมู',
    ingredients: [
      { name: 'หมู', category: 'meat' },
      { name: 'มะนาว', category: 'fruits' },
      { name: 'พริกแห้ง', category: 'condiments' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'ผักสด', category: 'vegetables' },
    ],
    instructions: [
      'ผัดหมูสับจนสุก',
      'ปรุงรสด้วยมะนาว พริกแห้ง',
      'เพิ่มหอมและผักสด',
      'คลุกเคล้าให้ทั่ว',
      'ตักเสิร์ฟ',
    ],
    cookTime: '12 นาที',
    difficulty: 'medium',
    servings: '2 คน',
  },

  // เนื้อและไก่
  {
    id: 'grilled-fish',
    name: 'ปลาย่างเกลือ',
    ingredients: [
      { name: 'ปลา', category: 'meat' },
      { name: 'เกลือ', category: 'condiments' },
      { name: 'มะนาว', category: 'fruits' },
      { name: 'กระเทียม', category: 'vegetables' },
      { name: 'พริก', category: 'vegetables' },
    ],
    instructions: [
      'ทำความสะอาดปลา',
      'หยันปลาด้วยเกลือและกระเทียม',
      'ย่างปลาบนเตาถ่าน จนสุก',
      'เคลื่อนย้ายปลาไปยังจานเสิร์ฟ',
      'ราดมะนาวและพริกเพื่อให้รสชาติ',
    ],
    cookTime: '20 นาที',
    difficulty: 'medium',
    servings: '2 คน',
  },
  {
    id: 'grilled-chicken',
    name: 'ไก่ย่าง',
    ingredients: [
      { name: 'ไก่', category: 'meat' },
      { name: 'กระเทียม', category: 'vegetables' },
      { name: 'เกลือ', category: 'condiments' },
      { name: 'พริก', category: 'vegetables' },
      { name: 'มะนาว', category: 'fruits' },
    ],
    instructions: [
      'ล้างไก่ให้สะอาด',
      'หยันไก่ด้วยกระเทียม เกลือ พริก',
      'ย่างไก่บนเตาถ่าน จนสุก',
      'เคลื่อนย้ายไปยังจาน',
      'ราดมะนาวบนสุด ตักเสิร์ฟ',
    ],
    cookTime: '25 นาที',
    difficulty: 'medium',
    servings: '2 คน',
  },
  {
    id: 'steamed-fish',
    name: 'ปลาเค้าน้ำปลา',
    ingredients: [
      { name: 'ปลา', category: 'meat' },
      { name: 'น้ำปลา', category: 'condiments' },
      { name: 'กระเทียม', category: 'vegetables' },
      { name: 'พริก', category: 'vegetables' },
      { name: 'หอม', category: 'vegetables' },
    ],
    instructions: [
      'หั่นปลา ทำความสะอาด',
      'วางปลาบนจาน',
      'ทำน้ำปลาเจียว (ผัดกระเทียม พริก)',
      'เค้าปลาบนไฟ จนสุก',
      'เทน้ำปลาเจียวลงบน ตักเสิร์ฟ',
    ],
    cookTime: '15 นาที',
    difficulty: 'medium',
    servings: '2 คน',
  },
  {
    id: 'chicken-curry',
    name: 'แกงไก่',
    ingredients: [
      { name: 'ไก่', category: 'meat' },
      { name: 'น้ำปลา', category: 'condiments' },
      { name: 'พริก', category: 'vegetables' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'กระเทียม', category: 'vegetables' },
    ],
    instructions: [
      'ต้มน้ำ',
      'ใส่เพสต์แกง ปรุงรส',
      'ใส่ไก่ ต้มจนสุก',
      'เพิ่มผักตามชอบ',
      'ตักเสิร์ฟ',
    ],
    cookTime: '20 นาที',
    difficulty: 'medium',
    servings: '2 คน',
  },

  // พาสต้า
  {
    id: 'pasta-carbonara',
    name: 'พาสต้าคาร์โบนารา',
    ingredients: [
      { name: 'พาสต้า', category: 'condiments' },
      { name: 'ไข่', category: 'dairy' },
      { name: 'เบคอน', category: 'meat' },
      { name: 'เนยแข็ง', category: 'dairy' },
      { name: 'กระเทียม', category: 'vegetables' },
    ],
    instructions: [
      'ต้มน้ำเกลือ แล้วใส่พาสต้า ต้มเพื่อให้สุก',
      'ตั้งกระทะ เทเบคอนลงไปจนกรอบ',
      'ตอกไข่ลงในชาม คลุกให้เข้ากัน',
      'ระบายน้ำพาสต้า แล้วใส่ลงในไข่',
      'ตั้งไฟเบา ใส่เนยแข็ง จากนั้นตักเสิร์ฟ',
    ],
    cookTime: '15 นาที',
    difficulty: 'medium',
    servings: '2 คน',
  },
  {
    id: 'pasta-tomato',
    name: 'พาสต้าโทเมโท',
    ingredients: [
      { name: 'พาสต้า', category: 'condiments' },
      { name: 'มะเขือเทศ', category: 'vegetables' },
      { name: 'กระเทียม', category: 'vegetables' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'น้ำมันพืช', category: 'condiments' },
    ],
    instructions: [
      'ต้มน้ำเกลือ ใส่พาสต้า',
      'ตั้งกระทะ ผัดกระเทียม จากนั้นหอม',
      'ใส่มะเขือเทศ ต้มให้นุ่ม',
      'เพิ่มน้ำมันพืช ปรุงรส',
      'ใส่พาสต้า ผัดให้ทั่ว ตักเสิร์ฟ',
    ],
    cookTime: '12 นาที',
    difficulty: 'easy',
    servings: '2 คน',
  },
  {
    id: 'pasta-aglio-e-olio',
    name: 'พาสต้ากระเทียมและน้ำมัน',
    ingredients: [
      { name: 'พาสต้า', category: 'condiments' },
      { name: 'กระเทียม', category: 'vegetables' },
      { name: 'น้ำมันพืช', category: 'condiments' },
      { name: 'พริก', category: 'vegetables' },
      { name: 'เกลือ', category: 'condiments' },
    ],
    instructions: [
      'ต้มน้ำเกลือ ใส่พาสต้า',
      'ตั้งกระทะ เทน้ำมัน',
      'ผัดกระเทียมและพริกให้หอม',
      'ใส่พาสต้า ผัดให้ทั่ว',
      'ตักเสิร์ฟ',
    ],
    cookTime: '10 นาที',
    difficulty: 'easy',
    servings: '2 คน',
  },

  // อื่นๆ
  {
    id: 'spring-rolls',
    name: 'ปอเปี๊ยะทอด',
    ingredients: [
      { name: 'ปอเปี๊ยะผ่อง', category: 'condiments' },
      { name: 'หมู', category: 'meat' },
      { name: 'เงาะ', category: 'vegetables' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'น้ำมันพืช', category: 'condiments' },
    ],
    instructions: [
      'ผัดหมูสับพร้อมหอม เงาะ',
      'ใส่น้ำมันเล็กน้อย ปรุงรส',
      'พันไส้ลงในปอเปี๊ยะผ่อง',
      'ทอดจนทองเหลือบ',
      'ตักเสิร์ฟ',
    ],
    cookTime: '15 นาที',
    difficulty: 'medium',
    servings: '2 คน',
  },
  {
    id: 'fresh-spring-rolls',
    name: 'สปริงโรลสด',
    ingredients: [
      { name: 'แผ่นเจาะโรล', category: 'condiments' },
      { name: 'กุ้ง', category: 'meat' },
      { name: 'หนุ่มสด', category: 'vegetables' },
      { name: 'ผักสด', category: 'vegetables' },
      { name: 'น้ำปลา', category: 'condiments' },
    ],
    instructions: [
      'แช่แผ่นเจาะน้ำให้อ่อน',
      'วางแผ่นแล้วใส่กุ้ง หนุ่มสด ผัก',
      'ม้วนแน่นให้เป็นลูกกลิ้ง',
      'ตัดเป็นชิ้น',
      'เสิร์ฟพร้อมน้ำปลา',
    ],
    cookTime: '10 นาที',
    difficulty: 'easy',
    servings: '2 คน',
  },
  {
    id: 'satay',
    name: 'สะเต๊ะไก่',
    ingredients: [
      { name: 'ไก่', category: 'meat' },
      { name: 'ถั่วลิสง', category: 'condiments' },
      { name: 'กระเทียม', category: 'vegetables' },
      { name: 'เกลือ', category: 'condiments' },
      { name: 'น้ำมันพืช', category: 'condiments' },
    ],
    instructions: [
      'หั่นไก่เป็นยาว',
      'หยันไก่ด้วยสปไซ้',
      'ย่างไก่บนไม้เสียบ',
      'ทำน้ำจิ้มถั่วลิสง',
      'เสิร์ฟพร้อมน้ำจิ้ม',
    ],
    cookTime: '15 นาที',
    difficulty: 'medium',
    servings: '2 คน',
  },
  {
    id: 'dim-sum',
    name: 'ติ่มซำ',
    ingredients: [
      { name: 'แป้งติ่มซำ', category: 'condiments' },
      { name: 'หมู', category: 'meat' },
      { name: 'กุ้ง', category: 'meat' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'น้ำปลา', category: 'condiments' },
    ],
    instructions: [
      'ทำไส้หมูกุ้ง',
      'ห่อแป้ง ปั้นให้ดูดี',
      'นึ่งติ่มซำ',
      'เสิร์ฟพร้อมน้ำปลาชุม',
      '',
    ],
    cookTime: '20 นาที',
    difficulty: 'hard',
    servings: '3 คน',
  },
  {
    id: 'pizza-simple',
    name: 'พิซซ่าง่ายๆ',
    ingredients: [
      { name: 'แป้งพิซซ่า', category: 'condiments' },
      { name: 'มะเขือเทศ', category: 'vegetables' },
      { name: 'เนยแข็ง', category: 'dairy' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'น้ำมันพืช', category: 'condiments' },
    ],
    instructions: [
      'เกร็งแป้งพิซซ่า',
      'ทาซอสมะเขือเทศ',
      'วางหอมและเนยแข็ง',
      'อบในเตาอบ 200 องศา 12 นาที',
      'ตักเสิร์ฟ',
    ],
    cookTime: '15 นาที',
    difficulty: 'easy',
    servings: '2 คน',
  },
  {
    id: 'burger',
    name: 'เบอร์เกอร์',
    ingredients: [
      { name: 'เนื้อ', category: 'meat' },
      { name: 'ขนมปัง', category: 'condiments' },
      { name: 'หอม', category: 'vegetables' },
      { name: 'มะเขือเทศ', category: 'vegetables' },
      { name: 'เนยแข็ง', category: 'dairy' },
    ],
    instructions: [
      'ปั้นเนื้อเป็นบาร์เกอร์',
      'ย่างบาร์เกอร์จนสุก',
      'นึ่งหรือคบขนมปัง',
      'วางหอม มะเขือเทศ เนยแข็ง',
      'วางบาร์เกอร์บนขนมปัง ตักเสิร์ฟ',
    ],
    cookTime: '12 นาที',
    difficulty: 'easy',
    servings: '1 คน',
  },
];

export const findRecipesByItems = (itemNames: string[]): Recipe[] => {
  const itemNamesLower = itemNames.map(name => name.toLowerCase());

  return recipes.filter(recipe => {
    // หาจำนวนวัตถุดิบที่ตรงกัน
    const matchCount = recipe.ingredients.filter(ingredient =>
      itemNamesLower.some(itemName =>
        itemName.includes(ingredient.name.toLowerCase()) ||
        ingredient.name.toLowerCase().includes(itemName)
      )
    ).length;

    // คืนเฉพาะเมนูที่มีวัตถุดิบตรงกันอย่างน้อย 50% ขึ้นไป
    return matchCount >= Math.ceil(recipe.ingredients.length * 0.5);
  });
};

export const sortRecipesByMatch = (recipes: Recipe[], itemNames: string[]): Recipe[] => {
  const itemNamesLower = itemNames.map(name => name.toLowerCase());

  return [...recipes].sort((a, b) => {
    const matchCountA = a.ingredients.filter(ingredient =>
      itemNamesLower.some(itemName =>
        itemName.includes(ingredient.name.toLowerCase()) ||
        ingredient.name.toLowerCase().includes(itemName)
      )
    ).length;

    const matchCountB = b.ingredients.filter(ingredient =>
      itemNamesLower.some(itemName =>
        itemName.includes(ingredient.name.toLowerCase()) ||
        ingredient.name.toLowerCase().includes(itemName)
      )
    ).length;

    return matchCountB - matchCountA;
  });
};
