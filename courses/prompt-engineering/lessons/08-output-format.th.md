# กำหนดรูปแบบผลลัพธ์

บอก AI ว่าคุณต้องการให้คำตอบมีโครงสร้างอย่างไร

## ทำไมรูปแบบถึงสำคัญ

รูปแบบที่ดี:
- ทำให้ผลลัพธ์อ่านง่าย
- ทำให้แน่ใจว่าได้ทุกส่วนที่ต้องการ
- ประหยัดเวลาแก้ไข

## รูปแบบทั่วไป

**จุด bullet:**
```
List the top 5 benefits of meditation. Use bullet points.
```

**รายการตัวเลข:**
```
Rank these 10 books by importance for beginners. Use numbered list 1-10.
```

**ตาราง:**
```
Compare these 3 laptops in a table with columns: Price, Battery Life, Weight.
```

**JSON/โค้ด:**
```
Return this data as valid JSON with fields: name, age, occupation.
```

## ตัวอย่าง: คำขอเดียวกัน รูปแบบต่างกัน

**คำขอ:** "อธิบายการสังเคราะห์แสง"

**รูปแบบ bullet:**
```
- Definition: Process where plants convert sunlight to energy
- Key ingredients: CO2, water, sunlight
- Output: Glucose and oxygen
```

**รูปแบบทีละขั้นตอน:**
```
1. Plants absorb water through roots
2. Leaves capture sunlight
3. CO2 enters through stomata
4. Photosynthesis occurs in chloroplasts
5. Glucose is produced and stored
```

## เคล็ดลับรูปแบบ

- กำหนดความยาว: "3 ประโยค" หรือ "200 คำ"
- กำหนดโครงสร้าง: "เป็นจุด bullet" หรือ "เป็นตาราง"
- กำหนดกลุ่มเป้าหมาย: "สำหรับเด็กประถม" หรือ "สำหรับผู้เชี่ยวชาญ"

## วลีมหัศจรรย์

```
Format the response as: [your format here]
```
