# การจัดการข้อผิดพลาด

APIs อาจล้มเหลวได้ จัดการข้อผิดพลาดอย่างเหมาะสม

## ข้อผิดพลาดที่พบบ่อย

| ข้อผิดพลาด | สาเหตุ | วิธีแก้ไข |
|-----------|--------|----------|
| 400 | คำขอไม่ถูกต้อง | แก้ไขข้อมูลคำขอ |
| 401 | ไม่ได้รับอนุญาต | เพิ่มการยืนยันตัวตน |
| 403 | ห้ามเข้าถึง | ตรวจสอบสิทธิ์ |
| 404 | ไม่พบ | ตรวจสอบ URL |
| 500 | Server ผิดพลาด | ลองใหม่ภายหลัง |

## ตรวจสอบ Response Status

```javascript
async function getUser(id) {
    const response = await fetch(`/api/users/${id}`);

    if (response.status === 404) {
        return { error: 'User not found' };
    }

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}
```

## รูปแบบ Error Response ที่เป็นระเบียบ

APIs ที่ดีควรส่งข้อผิดพลาดในรูปแบบที่สม่ำเสมอ:

```json
{
    "error": {
        "code": "USER_NOT_FOUND",
        "message": "User with ID 123 does not exist"
    }
}
```

## การจัดการข้อผิดพลาดอย่างสวยงาม

```javascript
async function fetchData() {
    try {
        const response = await fetch('/api/data');

        if (!response.ok) {
            const error = await response.json();
            showError(error.message);
            return null;
        }

        return await response.json();
    } catch (networkError) {
        showError('Network error. Check your connection.');
        return null;
    }
}

function showError(message) {
    document.getElementById('error').textContent = message;
}
```

## ข้อความที่เข้าใจง่ายสำหรับผู้ใช้

```javascript
const errorMessages = {
    400: 'Please check your input and try again.',
    401: 'Please log in to continue.',
    403: 'You do not have permission.',
    404: 'The requested resource was not found.',
    500: 'Something went wrong. Please try later.'
};

function getMessage(status) {
    return errorMessages[status] || 'An unexpected error occurred.';
}
```

## สรุป

- ตรวจสอบ `response.ok` เสมอ
- ส่งข้อความข้อผิดพลาดที่เข้าใจง่ายสำหรับผู้ใช้
- จัดการ network errors แยกต่างหาก
- บันทึกข้อผิดพลาดเพื่อการแก้ไข
