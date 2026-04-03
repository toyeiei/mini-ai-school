# สร้างแอป

มาสร้างแอปง่ายๆ ที่ดึงและแสดงข้อมูล

## โปรเจกต์: ข้อเท็จจริงแมวแบบสุ่ม

```html
<!DOCTYPE html>
<html>
<head>
    <title>Cat Facts</title>
    <style>
        body { font-family: sans-serif; max-width: 600px; margin: 2rem auto; padding: 1rem; }
        .fact { background: #f0f0f0; padding: 1rem; margin: 1rem 0; border-radius: 8px; }
        button { padding: 0.75rem 1.5rem; background: #6c5ce7; color: white; border: none; border-radius: 4px; cursor: pointer; }
        button:hover { background: #5a4bd1; }
    </style>
</head>
<body>
    <h1>Random Cat Facts</h1>
    <div id="fact" class="fact">Click the button to see a cat fact!</div>
    <button onclick="getCatFact()">New Fact</button>

    <script>
        async function getCatFact() {
            const factDiv = document.getElementById('fact');
            factDiv.textContent = 'Loading...';

            try {
                const response = await fetch('https://catfact.ninja/fact');
                if (!response.ok) throw new Error('Failed to fetch');

                const data = await response.json();
                factDiv.textContent = data.fact;
            } catch (error) {
                factDiv.textContent = 'Error loading fact. Try again!';
            }
        }
    </script>
</body>
</html>
```

## มันทำงานอย่างไร

1. คลิกปุ่มเรียก `getCatFact()`
2. Fetch ขอข้อมูลจาก API
3. แปลง Response เป็น JSON
4. แสดงข้อเท็จจริงใน HTML

## ลองทำด้วยตัวเอง

1. บันทึก HTML ข้างบน
2. เปิดในเบราว์เซอร์
3. คลิกปุ่ม!

## เพิ่มการจัดการข้อผิดพลาด

```javascript
async function getCatFact() {
    const factDiv = document.getElementById('fact');
    factDiv.textContent = 'Loading...';

    try {
        const response = await fetch('https://catfact.ninja/fact');

        if (response.status === 429) {
            throw new Error('Too many requests. Wait a moment.');
        }

        if (!response.ok) {
            throw new Error('Something went wrong');
        }

        const data = await response.json();
        factDiv.textContent = data.fact;

    } catch (error) {
        factDiv.textContent = error.message;
    }
}
```

## สิ่งที่คุณได้เรียนรู้

- Fetch ข้อมูลจาก public APIs
- แสดง API response ใน HTML
- จัดการสถานะการโหลด
- จัดการข้อผิดพลาดอย่างเหมาะสม

ยินดีด้วย! คุณสร้างแอปที่ใช้ API จริงแล้ว!
