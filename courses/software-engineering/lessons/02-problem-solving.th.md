# Problem Solving

Problem solving คือทักษะหลักของ Software engineering ทุกการแก้ไข bug และการสร้างฟีเจอร์เริ่มต้นจากการเข้าใจปัญหา

## การแตกปัญหาออกเป็นส่วนย่อย

เมื่อเจอปัญหาที่ซับซ้อน:

1. **เข้าใจปัญหา** - Input คืออะไร? Output ที่ต้องการคืออะไร?
2. **ระบุข้อจำกัด** - มีข้อจำกัดอะไรบ้าง? Performance? Memory? Browser compatibility?
3. **หาปัญหาที่คล้ายกัน** - มีคนแก้ปัญหานี้มาแล้วหรือยัง?
4. **แตกเป็นปัญหาย่อย** - แบ่งแยกแล้วพิชิตทีละส่วน
5. **แก้ทีละส่วน** - สร้างขึ้นทีละน้อย
6. **รวมและตรวจสอบ** - โซลูชันทั้งหมดทำงานได้ไหม?

## ตัวอย่าง: สร้างเครื่องคิดเลข

**ปัญหา**: สร้างเครื่องคิดเลขที่บวกตัวเลขสองตัว

**Input**: ตัวเลขสองตัว (a, b)
**Output**: ผลรวมของทั้งสองตัว

```javascript
function add(a, b) {
    return a + b;
}
```

**ข้อจำกัด**: ถ้า input ไม่ใช่ตัวเลขล่ะ?

```javascript
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
}
```

## Rubber Duck Method

อธิบายปัญหาของคุณให้กับ rubber duck (หรือวัตถุใดๆ) เมื่อคุณอธิบายทีละขั้นตอน คุณมักจะพบวิธีแก้เอง การบอกเล่าปัญหาช่วยให้เห็นช่องว่างในความเข้าใจ

## Problem-Solving Patterns

### Pattern 1: Brute Force
ลองทุกโซลูชันที่เป็นไปได้จนกว่าจะเจอวิธีที่ใช้ได้

```javascript
function findPairSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
}
```

### Pattern 2: Two Pointers
ใช้ pointer สองตัวเคลื่อนที่เข้าหากัน

```javascript
function findPairSumSorted(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) return [left, right];
        if (sum < target) left++;
        else right--;
    }
    return null;
}
```

## แบบฝึกหัด

- พิมพ์สตริงจากหลังมาหน้า
- ตรวจสอบว่าตัวเลขเป็นจำนวนเฉพาะหรือไม่
- หาคำที่ยาวที่สุดในประโยค
- ลบค่าที่ซ้ำออกจาก array
- ตรวจสอบว่าสองสตริงเป็น anagram กันหรือไม่

กุญแจสำคัญของ problem solving คือการฝึกฝน ทุกปัญหาที่คุณแก้ได้จะสร้างอินทรีย์ให้คุณสำหรับปัญหาถัดไป
