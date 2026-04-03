# Visualizing Data

รูปภาพหนึ่งภาพมีค่าเท่ากับตัวเลขพันตัว Visualization ที่ดีเปิดเผย pattern ที่ตัวเลขธรรมดาซ่อนอยู่

## ทำไมต้อง Visualize?

1. **หา pattern** - แนวโน้ม, กลุ่ม, outlier
2. **สื่อสารได้เร็ว** - เร็วกว่าตาราง
3. **เล่าเรื่อง** - ทำให้ข้อมูลจดจำได้
4. **หาข้อผิดพลาด** - ค้นหาปัญหาข้อมูล

## ประเภทของกราฟ

### Bar Charts

เปรียบเทียบหมวดหมู่

```python
import matplotlib.pyplot as plt

categories = ['Apple', 'Banana', 'Orange', 'Grape']
sales = [120, 85, 95, 60]

plt.bar(categories, sales, color=['red', 'yellow', 'orange', 'purple'])
plt.title('Fruit Sales')
plt.xlabel('Fruit')
plt.ylabel('Units Sold')
plt.show()
```

ใช้เมื่อ: เปรียบเทียบหมวดหมู่ที่แยกกัน

### Histograms

แสดงการกระจายตัวของข้อมูล continuous

```python
ages = [22, 25, 25, 28, 30, 30, 30, 32, 35, 38, 40, 45, 50, 52, 55]

plt.hist(ages, bins=5, edgecolor='black')
plt.title('Customer Ages')
plt.xlabel('Age')
plt.ylabel('Count')
plt.show()
```

ใช้เมื่อ: แสดงการกระจายตัวของตัวแปรหนึ่งตัว

### Scatter Plots

แสดงความสัมพันธ์ระหว่างสองตัวแปร

```python
study_hours = [1, 2, 3, 4, 5, 6, 7, 8]
test_scores = [52, 60, 68, 75, 82, 88, 92, 96]

plt.scatter(study_hours, test_scores)
plt.title('Study Hours vs Test Scores')
plt.xlabel('Hours Studied')
plt.ylabel('Test Score')
plt.show()
```

ใช้เมื่อ: หา correlation

### Line Charts

แสดงแนวโน้มตามเวลา

```python
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
sales = [120, 135, 148, 162, 175, 190]

plt.plot(months, sales, marker='o')
plt.title('Monthly Sales')
plt.xlabel('Month')
plt.ylabel('Revenue ($)')
plt.show()
```

ใช้เมื่อ: ข้อมูลเปลี่ยนแปลงตามเวลา

### Pie Charts

แสดงสัดส่วนของภาพรวม

```python
budget = [500, 300, 200, 150]
categories = ['Marketing', 'Development', 'Support', 'Operations']

plt.pie(budget, labels=categories, autopct='%1.1f%%')
plt.title('Budget Distribution')
plt.show()
```

ใช้อย่างระมัดระวัง Bar charts มักอ่านง่ายกว่า

## เลือกกราฟที่เหมาะสม

| ข้อมูล | กราฟที่เหมาะสม |
|------|-----------|
| เปรียบเทียบหมวดหมู่ | Bar |
| แสดงการกระจายตัว | Histogram |
| ความสัมพันธ์ระหว่างสองตัวแปร | Scatter |
| เปลี่ยนแปลงตามเวลา | Line |
| สัดส่วน | Bar (หรือ Pie ถ้ามีไม่กี่ตัว) |

## ข้อผิดพลาดที่พบบ่อย

### เริ่มจากศูนย์ (หรือไม่เริ่ม)

```python
# Bad: Makes small differences look huge
plt.bar(['A', 'B', 'C'], [99, 99.5, 100])
plt.ylim(98, 101)

# Good: Appropriate scale
plt.bar(['A', 'B', 'C'], [99, 99.5, 100])
plt.ylim(98.5, 100.5)
```

### กราฟ 3D

หลีกเลี่ยงกราฟ 3D - ทำให้สัดส่วนเพี้ยนและอ่านยาก

### สีเยอะเกินไป

ใช้สีที่สอดคล้องและมีความหมาย อย่าใช้สายรุ้งโดยไม่มีเหตุผล

## เพิ่มบริบท

```python
# Include reference lines
avg = sum(sales) / len(sales)
plt.axhline(y=avg, color='red', linestyle='--', label='Average')
plt.legend()

# Annotate important points
plt.annotate('Peak', xy=(5, 190), xytext=(6, 195),
            arrowprops=dict(arrowstyle='->', color='gray'))
```

## บันทึกกราฟ

```python
plt.savefig('chart.png', dpi=300, bbox_inches='tight')
plt.savefig('chart.pdf', bbox_inches='tight')
```

## Matplotlib Reference ด่วน

```python
import matplotlib.pyplot as plt

# Create
fig, ax = plt.subplots()

# Plot
ax.plot(x, y, label='Line', color='blue', linestyle='-', marker='o')
ax.bar(x, y, label='Bars', color='red')

# Style
ax.set_title('Title')
ax.set_xlabel('X axis')
ax.set_ylabel('Y axis')
ax.legend()
ax.grid(True)

# Show or save
plt.show()
plt.savefig('output.png')
```

Visualization แปลงตัวเลขให้เป็น insight อย่าลืม visualize ก่อนสรุปผล
