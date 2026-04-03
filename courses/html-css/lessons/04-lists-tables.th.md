# Lists & Tables

Lists จัดระเบียบข้อมูล Tables แสดงข้อมูลเป็นตาราง

## Unordered Lists

```html
<ul>
    <li>แอปเปิ้ล</li>
    <li>กล้วย</li>
    <li>ส้ม</li>
</ul>
```

## Ordered Lists

```html
<ol>
    <li>ผสมแป้งกับไข่</li>
    <li>เติมน้ำตาล</li>
    <li>อบ 30 นาที</li>
</ol>
```

## Tables

```html
<table>
    <thead>
        <tr>
            <th>ชื่อ</th>
            <th>อายุ</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>อลิซ</td>
            <td>25</td>
        </tr>
        <tr>
            <td>บ็อบ</td>
            <td>30</td>
        </tr>
    </tbody>
</table>
```

ส่วนประกอบ:
- `<table>` - คอนเทนเนอร์
- `<thead>` - แถวหัวตาราง
- `<tbody>` - แถวข้อมูล
- `<tr>` - แถว
- `<th>` - ช่องหัวตาราง
- `<td>` - ช่องข้อมูล

## เมื่อไหร่ใช้ Tables

ใช้ tables สำหรับ **ข้อมูลตาราง** (ตารางเวลา, ราคา, เปรียบเทียบ)

อย่าใช้ tables สำหรับจัด layout หน้า

## สรุป

- `<ul>` สำหรับ bullet lists, `<ol>` สำหรับลำดับ
- Tables มี headers, rows, และ cells
- ใช้ tables สำหรับข้อมูล, ไม่ใช่ layout
