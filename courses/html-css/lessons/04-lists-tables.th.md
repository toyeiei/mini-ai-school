# Lists & Tables

Lists จัดระเบียบข้อมูล Tables แสดงข้อมูลเป็นตาราง

## Unordered Lists

```html
<ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Oranges</li>
</ul>
```

## Ordered Lists

```html
<ol>
    <li>Mix flour and eggs</li>
    <li>Add sugar</li>
    <li>Bake for 30 minutes</li>
</ol>
```

## Tables

```html
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alice</td>
            <td>25</td>
        </tr>
        <tr>
            <td>Bob</td>
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
