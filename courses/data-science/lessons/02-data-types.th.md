# Data Types

การเข้าใจ data types ช่วยให้คุณเลือกวิธีวิเคราะห์ที่เหมาะสม แต่ละประเภทต้องการการจัดการที่แตกต่างกัน

## ข้อมูลเชิงตัวเลข (Numeric Data)

### Continuous
ค่าที่เป็นตัวเลขใด ๆ ภายในช่วงหนึ่ง

ตัวอย่าง:
- ส่วนสูง: 5.8 ฟุต
- อุณหภูมิ: 72.5 องศา
- ราคา: $19.99

```python
temperature = 72.5
price = 19.99
```

### Discrete
จำนวนเต็ม มักเป็นการนับ

ตัวอย่าง:
- จำนวนบุตร: 3
- จำนวนอีเมล: 47
- จำนวนวันถึง deadline: 14

```python
num_children = 3
email_count = 47
```

## ข้อมูลหมวดหมู่ (Categorical Data)

### Nominal
หมวดหมู่ที่ไม่มีลำดับที่แน่นอน

ตัวอย่าง:
- สี: แดง, น้ำเงิน, เขียว
- ประเทศ: สหรัฐ, ฝรั่งเศส, ญี่ปุ่น
- หมู่เลือด: A, B, AB, O

```python
colors = ['red', 'blue', 'green']
blood_types = ['A', 'B', 'AB', 'O']
```

### Ordinal
หมวดหมู่ที่มีลำดับที่มีความหมาย

ตัวอย่าง:
- ขนาดเสื้อ: S, M, L, XL
- การศึกษา: มัธยม, ปริญญาตรี, ปริญญาโท, ปริญญาเอก
- ความพึงพอใจ: ต่ำ, ปานกลาง, สูง

```python
sizes = ['S', 'M', 'L', 'XL']
satisfaction = ['Low', 'Medium', 'High']
```

## Time Series Data

ข้อมูลที่เก็บรวบรวมตามช่วงเวลา

ตัวอย่าง:
- ราคาหุ้นรายวัน
- อุณหภูมิรายชั่วโมง
- ยอดขายรายเดือน

```
# Daily temperatures over a week
temperatures = [72, 75, 68, 70, 74, 78, 76]
dates = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
```

## ข้อมูลข้อความ (Text Data)

ข้อความที่ไม่มีโครงสร้างที่ต้องการการประมวลผล

ตัวอย่าง:
- รีวิวลูกค้า
- โพสต์โซเชียลมีเดีย
- เนื้อหาอีเมล

```python
review = "This product exceeded my expectations!"
```

## ทำไม Data Types ถึงสำคัญ

| Data Type | วิธีวิเคราะห์ |
|-----------|-----------------|
| Numeric | คำนวณค่าเฉลี่ย, correlation |
| Categorical | นับความถี่, mode |
| Ordinal | Median, percentiles |
| Time Series | แนวโน้ม, ฤดูกาล |
| Text | Sentiment, นับคำ |

## การแปลงประเภทข้อมูล

บางครั้งคุณอาจต้องเปลี่ยน data type:

```
# String to number
age = int("25")

# Number to string
age_str = str(25)

# Category to number (encoding)
size_map = {'S': 1, 'M': 2, 'L': 3}
encoded = size_map['M']  # Returns 2
```

## ข้อมูลที่หาย (Missing Data)

ข้อมูลจริงมักจะมีค่าที่หาย:

```
# Representing missing data
height = None       # Python way
height = float('nan')  # Not a Number
height = -1         # Sentinel value
```

จัดการ missing data โดย:
- ลบแถวที่มีค่าหาย
- เติมด้วยค่าเฉลี่ย/median
- ใช้ค่าแทน เช่น "Unknown"

## สรุป Data Types

```
Data
├── Numeric
│   ├── Continuous (ทศนิยมได้)
│   └── Discrete (จำนวนเต็ม)
├── Categorical
│   ├── Nominal (ไม่มีลำดับ)
│   └── Ordinal (มีลำดับ)
├── Time Series (เรียงตามเวลา)
└── Text (ไม่มีโครงสร้าง)
```

การเข้าใจ data types ของคุณเป็นขั้นตอนแรกสู่การวิเคราะห์ที่ถูกต้อง
