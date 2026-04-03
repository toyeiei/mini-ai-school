# Spread and Variation

สองชุดข้อมูลอาจมีค่า mean เท่ากันแต่การกระจายตัวแตกต่างกันมาก Spread วัดว่าข้อมูลกระจายตัวมากแค่ไหน

## Range

ค่าต่างระหว่างค่ามากที่สุดและค่าน้อยที่สุด

```
# Range
prices = [15, 18, 22, 25, 28, 45]
minimum = min(prices)  # 15
maximum = max(prices)  # 45
range_price = maximum - minimum  # 30
```

Range ง่ายแต่ไวต่อ outlier

## Variance

ค่าเฉลี่ยของผลต่างกำลังสองจากค่า mean

```
# Calculate variance
data = [2, 4, 4, 4, 5, 5, 7, 9]
mean = sum(data) / len(data)  # 5

# Squared differences from mean
differences = [(x - mean) ** 2 for x in data]
# [9, 1, 1, 1, 0, 0, 4, 16]

# Average of squared differences
variance = sum(differences) / len(differences)
print(f"Variance: {variance}")  # 4
```

### ทำไมต้องยกกำลังสอง?

1. ทำให้ผลต่างทั้งหมดเป็นบวก
2. ลงโทษค่าที่เบี่ยงไปมากมากขึ้น

### Population vs Sample Variance

```
# Population variance (divide by N)
population_variance = sum(differences) / len(data)

# Sample variance (divide by N-1)
sample_variance = sum(differences) / (len(data) - 1)
```

ใช้ sample variance เมื่อข้อมูลของคุณเป็นตัวอย่างจาก population ที่ใหญ่กว่า

## Standard Deviation

รากที่สองของ variance คืนค่ากลับไปเป็นหน่วยเดิม

```python
import math
variance = 4
std_dev = math.sqrt(variance)  # 2
```

```
# Data with low spread
low = [48, 49, 50, 51, 52]
low_mean = 50
low_std = 1.58

# Data with high spread
high = [30, 40, 50, 60, 70]
high_mean = 50
high_std = 14.14
```

Mean เท่ากัน (50) แต่ spread ต่างกันมาก!

## Percentiles และ Quartiles

### Percentile
ค่าที่มีเปอร์เซ็นต์ของข้อมูลอยู่ต่ำกว่า

```
# 25th percentile means 25% of data is below this value
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
p25 = 3.25    # 25% below
p50 = 5.5     # 50% below (median)
p75 = 7.75    # 75% below
```

### Quartiles

แบ่งข้อมูลออกเป็น 4 ส่วนเท่า ๆ:

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Q1 = 3.25   # 25th percentile (first quartile)
Q2 = 5.5    # 50th percentile (second quartile, median)
Q3 = 7.75   # 75th percentile (third quartile)
IQR = Q3 - Q1  # Interquartile range = 4.5
```

### Box Plot Visualization

```python
    |-----------[  box  ]-----------|
min              Q2            max
   |             |              |
   |---[-------o-|-------]------[+
   |   whisker   |  median  whisker
   Q1            |          Q3
                IQR
```

## Interquartile Range (IQR)

ช่วงของข้อมูล 50% ตรงกลาง

```python
IQR = Q3 - Q1
```

IQR ทนต่อ outlier ใช้ตรวจจับ outlier:

```
# Outlier detection
def find_outliers(data):
    sorted_data = sorted(data)
    Q1 = sorted_data[len(data) // 4]
    Q3 = sorted_data[3 * len(data) // 4]
    IQR = Q3 - Q1
    lower_bound = Q1 - 1.5 * IQR
    upper_bound = Q3 + 1.5 * IQR
    return [x for x in data if x < lower_bound or x > upper_bound]
```

## Standard Deviation vs Variance

```
# Variance (squared units)
height_variance = 25  # inches squared

# Standard deviation (original units)
height_std = 5  # inches
```

ใช้ standard deviation เพื่อตีความ "ความสูงแตกต่างกันประมาณ 5 นิ้วโดยเฉลี่ย"

## Coefficient of Variation

เปรียบเทียบ spread ของชุดข้อมูลต่าง ๆ:

```python
CV = (standard_deviation / mean) * 100
```

```
# Compare variability
prices = [10, 12, 14, 16, 18]  # CV = 24%
weights = [100, 102, 104, 106, 108]  # CV = 2.4%
# Prices vary more relative to their size
```

## สรุป

| Measure | บอกอะไร | ไวต่อ Outlier? |
|---------|----------|----------------|
| Range | ค่ามากลบค่าน้อย | ใช่ |
| Variance | ค่าเฉลี่ยของผลต่างกำลังสอง | ใช่ |
| Std Dev | ระยะห่างจาก mean โดยทั่วไป | ใช่ |
| IQR | Spread ของข้อมูล 50% ตรงกลาง | ไม่ใช่ |

อย่าลืมรายงานทั้ง center และ spread Mean 50 พร้อม std dev 5 มีความหมายต่างจาก mean 50 พร้อม std dev 20
