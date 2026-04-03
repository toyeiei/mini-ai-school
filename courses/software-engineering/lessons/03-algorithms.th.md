# Algorithms

Algorithm คือขั้นตอนทีละขั้นตอนในการแก้ปัญหา การเข้าใจ algorithms ช่วยให้คุณเขียนโค้ดที่มีประสิทธิภาพและเลือกแนวทางที่เหมาะสม

## การวัดประสิทธิภาพของ Algorithm

เราวัดประสิทธิภาพด้วย **Big O notation**:

- **O(1)** - เวลาคงที่ ไม่ขยายตามข้อมูล
- **O(log n)** - เวลาเชิงลอการิทึม เช่น binary search
- **O(n)** - เวลาเชิงเส้น ประมวลผลแต่ละ element ครั้งเดียว
- **O(n log n)** - เชิงเส้นคูณลอการิทึม เช่น merge sort
- **O(n²)** - เชิงกำลังสอง มี loop ซ้อนกัน
- **O(2^n)** - เชิงเอกซ์โพเนนเชียล ควรหลีกเลี่ยงถ้าเป็นไปได้

## Algorithms ที่ใช้บ่อย

### Linear Search

หา element ใน array โดยตรวจสอบทีละตัว:

```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
// Time: O(n), Space: O(1)
```

### Binary Search

หาใน array ที่**เรียงลำดับแล้ว** โดยแบ่งครึ่งพื้นที่ค้นหาทีละครั้ง:

```javascript
function binarySearch(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (sortedArr[mid] === target) return mid;
        if (sortedArr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
// Time: O(log n), Space: O(1)
```

### Bubble Sort

เปรียบเทียบ element ที่อยู่ติดกันแล้วสลับตำแหน่งถ้าจำเป็น:

```javascript
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
// Time: O(n²), Space: O(1)
```

### Merge Sort

แบ่ง เรียงลำดับ แล้วรวม:

```javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
        result.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    return [...result, ...left, ...right];
}
// Time: O(n log n), Space: O(n)
```

## เลือกใช้ Algorithm อย่างไร

- **ข้อมูลที่ยังไม่เรียงลำดับ** - Linear search
- **ข้อมูลที่เรียงลำดับแล้ว** - Binary search
- **ข้อมูลขนาดเล็ก** - Bubble sort (ง่าย)
- **ข้อมูลขนาดใหญ่** - Merge sort หรือ quicksort
- **ต้องการความเร็วเฉลี่ยสูงสุด** - Quicksort
- **ต้องการเสถียรและรับประกัน O(n log n)** - Merge sort

## เลือกตามบริบท

ไม่มี algorithm "ดีที่สุด" อันเดียว การเลือกที่ถูกต้องขึ้นอยู่กับ:
- จำนวนข้อมูลที่ต้องประมวลผล
- ข้อมูลเรียงลำดับแล้วหรือยัง
- ข้อจำกัดด้านหน่วยความจำ
- ต้องการความเสถียรหรือไม่
