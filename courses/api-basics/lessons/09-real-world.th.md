# Real World APIs

มาดู APIs จริงกัน

## Public APIs

มีหลาย APIs ที่สามารถลองใช้ได้ฟรี:

| API | การใช้งาน | URL |
|-----|----------|-----|
| JSONPlaceholder | ทดสอบ | jsonplaceholder.typicode.com |
| Dog API | สุนัขแบบสุ่ม | dog.ceo/api |
| Weather | ข้อมูลอากาศ | open-meteo.com |
| GitHub | ข้อมูล GitHub | api.github.com |

## ลองใช้ JSONPlaceholder

```javascript
// ดึงโพสต์ทั้งหมด
async function getPosts() {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
    );
    const posts = await response.json();
    console.log(posts);
}

// ดึงโพสต์พร้อมความคิดเห็น
async function getPostWithComments(postId) {
    const [post, comments] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    ]);

    return {
        post: await post.json(),
        comments: await comments.json()
    };
}
```

## ตัวอย่าง Weather API

```javascript
async function getWeather(city) {
    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.open-meteo.com/v1/forecast?city=${city}`;

    const response = await fetch(url);
    const data = await response.json();

    return {
        temp: data.current.temperature_2m,
        weather: data.current.weather_code
    };
}
```

## เอกสาร API จริง

เอกสารที่ดีควรมี:
- รายการ endpoints
- ตัวอย่าง request/response
- ข้อกำหนดการยืนยันตัวตน
- Rate limits
- รหัสข้อผิดพลาด

## Rate Limiting

APIs จำกัดจำนวนคำขอที่คุณสามารถทำได้:

```javascript
// ตรวจสอบ rate limit headers
console.log(response.headers.get('X-RateLimit-Remaining'));

// จัดการ rate limit
if (response.status === 429) {
    console.log('Slow down! Too many requests.');
}
```

## สรุป

- JSONPlaceholder เหมาะสำหรับการทดสอบ
- APIs จริงต้องการ keys และมีข้อจำกัด
- อ่านเอกสารเสมอ
- เคารพ rate limits
