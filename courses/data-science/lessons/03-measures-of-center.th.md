# Measures of Center

เมื่อคุณมีชุดตัวเลข ค่า "ทั่วไป" คืออะไร? Measures of center สรุปข้อมูลด้วยตัวเลขเดียว

## Mean (ค่าเฉลี่ย)

บวกค่าทั้งหมดแล้วหารด้วยจำนวน

```python
# Calculate mean
sales = [120, 89, 156, 201, 178, 134, 167, 189, 145, 198]

mean_sales = sum(sales) / len(sales)
print(f"Mean: {mean_sales}")  # Output: 157.7
```

### สูตร Mean

```
Mean = (ผลรวมของค่าทั้งหมด) / (จำนวนค่า)
```

### Mean ไวต่อ Outlier

```python
# Normal salaries
salaries = [45000, 52000, 48000, 51000, 49000]
mean_salary = sum(salaries) / len(salaries)
print(f"Mean: ${mean_salary}")  # About $49,000

# With one outlier (CEO)
salaries_with_ceo = [45000, 52000, 48000, 51000, 49000, 500000]
mean_with_ceo = sum(salaries_with_ceo) / len(salaries_with_ceo)
print(f"Mean with CEO: ${mean_with_ceo}")  # About $124,000
```

Outlier ทำให้ค่า mean เบี่ยงไปมาก

## Median (ค่ากลาง)

ค่าตรงกลางเมื่อเรียงข้อมูลจากน้อยไปมาก ถ้าจำนวนค่าเป็นคู่ ให้เฉลี่ยค่าตรงกลางสองค่า

```python
# Odd number of values
ages = [22, 25, 28, 31, 35]
median_age = sorted(ages)[len(ages) // 2]
print(f"Median: {median_age}")  # 28

# Even number of values
ages2 = [22, 25, 28, 31]
sorted_ages = sorted(ages2)
median_age2 = (sorted_ages[1] + sorted_ages[2]) / 2
print(f"Median: {median_age2}")  # 26.5
```

### Median ทนต่อ Outlier

```python
salaries_with_ceo = [45000, 52000, 48000, 51000, 49000, 500000]
sorted_salaries = sorted(salaries_with_ceo)
# [45000, 48000, 49000, 51000, 52000, 500000]
#           middle1      middle2
median = (49000 + 51000) / 2
print(f"Median: ${median}")  # $50,000
```

Median (50,000) แสดงเงินเดือนทั่วไปได้ดีกว่า mean (124,000)

## Mode (ค่าที่พบมากที่สุด)

ค่าที่ปรากฏบ่อยที่สุด

```python
from collections import Counter

colors = ['red', 'blue', 'red', 'green', 'blue', 'blue', 'red']
counter = Counter(colors)
mode = counter.most_common(1)[0][0]
print(f"Mode: {mode}")  # blue
```

### การใช้ Mode

- หาสินค้ายอดนิยม
- ระบุปัญหาที่พบบ่อยที่สุด
- วิเคราะห์ข้อมูลหมวดหมู่

### Mode หลายค่า

```python
# Two values appear equally
numbers = [1, 2, 2, 3, 3, 4]  # Both 2 and 3 appear twice
# This data has two modes: 2 and 3
```

## เลือกใช้แบบไหนเมื่อไหร่

| Measure | เหมาะกับ | ไวต่อ Outlier? |
|---------|----------|----------------------|
| Mean | ข้อมูลที่สมมาตร, continuous | ใช่ |
| Median | ข้อมูลเบี่ยงเบน, ordinal | ไม่ใช่ |
| Mode | ข้อมูลหมวดหมู่ | ไม่ใช่ |

## เปรียบเทียบ Mean vs Median

```python
# Income distribution (typically skewed right)
incomes = [30000, 35000, 40000, 45000, 50000, 60000, 75000, 200000]
mean = sum(incomes) / len(incomes)  # ~71,875
median = (45000 + 50000) / 2        # 47,500

print(f"Mean income: ${mean}")   # Skewed high
print(f"Median income: ${median}") # Better typical
```

ถ้า mean >> median ข้อมูลเบี่ยงไปทางขวา (มี outlier สูงไม่กี่ค่า)
ถ้า mean << median ข้อมูลเบี่ยงไปทางซ้าย (มี outlier ต่ำไม่กี่ค่า)

## สรุป

- **Mean**: บวกแล้วหาร เหมาะกับข้อมูลที่สมมาตร
- **Median**: ค่าตรงกลาง เหมาะกับข้อมูลที่เบี่ยงเบน
- **Mode**: ค่าที่พบมากที่สุด เหมาะกับข้อมูลหมวดหมู่

อย่าลืม visualize ข้อมูลก่อนเลือก measure of center
