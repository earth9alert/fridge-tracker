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
