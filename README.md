# 🧊 Fridge Inventory Tracker

ตัวจัดการสิ่งของในตู้เย็น - ติดตามสิ่งของและวันหมดอายุอย่างง่ายดาย

## ✨ Features

- ➕ **เพิ่ม/แก้ไข/ลบ** สิ่งของในตู้เย็น
- 📂 **จัดหมวดหมู่** ผัก ผลไม้ เนื้อสัตว์ นม ซอส และอื่นๆ
- ⏰ **ติดตามวันหมดอายุ** และเตือนเตือนเมื่อใกล้หมดอายุ
- 🔍 **ค้นหา** สิ่งของอย่างรวดเร็ว
- 💾 **ส่งออก/นำเข้า** ข้อมูลในรูป JSON
- 📱 **Responsive Design** ใช้งานได้บนมือถือและเดสก์ทอป
- 🌐 **Local Storage** เก็บข้อมูลในเครื่องของคุณ

## 🚀 Quick Start

### ติดตั้ง Dependencies

```bash
npm install
```

### รันในโหมด Development

```bash
npm run dev
```

แอปจะเปิดที่ http://localhost:5173

### Build สำหรับ Production

```bash
npm run build
```

ไฟล์ที่ build เสร็จจะอยู่ในโฟลเดอร์ `dist`

## 📋 โครงสร้างโปรเจกต์

```
src/
├── components/
│   ├── ItemForm.tsx          - ฟอร์มเพิ่ม/แก้ไขสิ่งของ
│   ├── ItemCard.tsx          - การ์ดแสดงสิ่งของ
│   ├── CategoryFilter.tsx    - กรองตามหมวดหมู่
│   ├── SearchBar.tsx         - ค้นหาสิ่งของ
│   └── BackupRestore.tsx     - ส่งออก/นำเข้าข้อมูล
├── hooks/
│   └── useFridgeItems.ts     - Hook จัดการ State
├── types/
│   └── item.ts               - TypeScript types
├── utils/
│   ├── storage.ts            - LocalStorage helper
│   └── date.ts               - Date utility functions
├── App.tsx                   - หน้าหลัก
└── main.tsx                  - Entry point
```

## 🛠️ เทคโนโลยีที่ใช้

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **LocalStorage API** - Data Persistence
- **CSS3** - Styling

## 📊 การใช้งาน

### เพิ่มสิ่งของใหม่

1. คลิก "➕ เพิ่มสิ่งของ"
2. กรอกข้อมูล: ชื่อ, หมวดหมู่, จำนวน, วันหมดอายุ
3. คลิก "เพิ่มสิ่งของ"

### แก้ไขสิ่งของ

1. คลิก "แก้ไข" บนการ์ดสิ่งของ
2. แก้ไขข้อมูล
3. คลิก "บันทึกการเปลี่ยนแปลง"

### ลบสิ่งของ

1. คลิก "ลบ" บนการ์ดสิ่งของ
2. ยืนยันการลบ

### ค้นหาและกรอง

- ใช้ Search Box เพื่อค้นหาชื่อสิ่งของ
- คลิกปุ่มหมวดหมู่เพื่อกรองตามหมวดหมู่
- คลิก "ทั้งหมด" เพื่อดูสิ่งของทั้งหมด

### ส่งออก/นำเข้า

- **📥 ส่งออก**: ดาวน์โหลด JSON ของข้อมูลทั้งหมด
- **📤 นำเข้า**: อัปโหลด JSON เพื่อกู้คืนข้อมูล

## ⚠️ เตือนเตือน

- **เตือนหมดอายุ**: หากสิ่งของจะหมดอายุใน 3 วัน
- **สิ่งของหมดอายุแล้ว**: สิ่งของที่อายุหมดแล้ว

## 🌐 Deploy ไป Vercel

### Step 1: Push ไป GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fridge-tracker.git
git push -u origin main
```

### Step 2: Connect ไป Vercel

1. ไปที่ [vercel.com](https://vercel.com)
2. คลิก "New Project"
3. เลือก GitHub repo
4. Vercel จะ auto-detect Vite project
5. คลิก "Deploy"

### Step 3: Auto-Deploy

แต่ละครั้งที่ push ไป GitHub, Vercel จะ auto-deploy

## 📝 หมายเหตุ

- ข้อมูลเก็บใน Browser LocalStorage
- ลบ Browser cache จะลบข้อมูลทั้งหมด
- แนะนำให้ส่งออกข้อมูลเป็นระยะ

## 📄 License

MIT

## 👨‍💻 Author

สร้างด้วย ❤️

---

**ติดตามสิ่งของของคุณให้เป็นระเบียบและลดอาหารเสียเปล่า!** 🎉
