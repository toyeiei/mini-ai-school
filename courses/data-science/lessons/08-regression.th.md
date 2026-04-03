# Regression Basics

Regression ทำนายค่าผลลัพธ์ที่เป็นตัวเลข จาก input features ทำนายค่า continuous

## Simple Linear Regression

หาเส้นตรงที่ fit กับความสัมพันธ์ระหว่าง X และ Y ได้ดีที่สุด

```
# Example: Predict house price from size
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Data: house sizes (sq ft) and prices ($1000s)
X = np.array([[1400], [1600], [1800], [2000], [2200], [2400]])
y = np.array([245, 312, 328, 385, 402, 450])

# Fit model
model = LinearRegression()
model.fit(X, y)

# Results
print(f"Intercept: {model.intercept_:.2f}")  # Base price
print(f"Slope: {model.coef_[0]:.2f}")  # Price per sq ft

# Predict
new_size = 2000
predicted_price = model.predict([[new_size]])
print(f"Predicted price for {new_size} sq ft: ${predicted_price[0]:.2f}k")
```

## สมการ Regression

```python
Y = b0 + b1*X + error
   |    |      |
   |    |      X (input variable)
   |    Slope (Y เปลี่ยนแปลงเท่าไหร่ต่อ 1 หน่วย X)
   Intercept (ค่า Y เมื่อ X = 0)
```

## การหาเส้นตรงที่ดีที่สุด

ลดผลรวมของ residual กำลังสองให้น้อยที่สุด (ผลต่างระหว่างค่าทำนายและค่าจริง):

```
# Residuals
predictions = model.predict(X)
residuals = y - predictions

# Sum of squared residuals (SSE)
sse = np.sum(residuals ** 2)
print(f"SSE: {sse:.2f}")
```

## R-squared (R²)

วัดว่าโมเดล fit กับข้อมูลได้ดีแค่ไหน มีค่าตั้งแต่ 0 ถึง 1

```python
from sklearn.metrics import r2_score

r2 = r2_score(y, predictions)
print(f"R-squared: {r2:.3f}")
```

| ค่า R² | การตีความ |
|----------|---------------|
| 0.0 | โมเดลไม่อธิบายอะไรเลย |
| 0.5 | โมเดลอธิบายความแปรปรวนได้ 50% |
| 0.7 | โมเดลอธิบายความแปรปรวนได้ 70% |
| 0.9+ | Fit ดีมาก (ตรวจสอบ overfitting) |

## Multiple Linear Regression

ใช้หลาย features ในการทำนาย

```
# Features: size, bedrooms, age
X = np.array([
    [1400, 3, 10],   # House 1
    [1600, 3, 5],
    [1800, 4, 15],
    [2000, 4, 8],
    [2200, 5, 3],
    [2400, 5, 2]
])
y = [245, 312, 328, 385, 402, 450]

model = LinearRegression()
model.fit(X, y)

print(f"Intercept: {model.intercept_:.2f}")
print(f"Coefficients: {model.coef_}")
# [size_coef, bedrooms_coef, age_coef]
```

## ข้อสันนิษฐานของ Regression

1. **Linear relationship** - X และ Y ควรมีความสัมพันธ์เชิงเส้นโดยประมาณ
2. **Independence** - Residuals ไม่ควรมี correlation กัน
3. **Homoscedasticity** - ความแปรปรวนของ residuals ควรคงที่
4. **Normality** - Residuals ควรกระจายตัวแบบปกติ

## การตรวจสอบข้อสันนิษฐาน

```
# Plot residuals
predictions = model.predict(X)
residuals = y - predictions

# Plot predictions vs actual
plt.scatter(y, predictions)
plt.xlabel('Actual')
plt.ylabel('Predicted')
plt.plot([min(y), max(y)], [min(y), max(y)], 'r--')
plt.show()

# Residuals should be scattered randomly around 0
```

## การทำนาย

```
# Predict multiple houses
new_houses = np.array([
    [1700, 3, 12],
    [2100, 4, 5],
    [2500, 5, 1]
])

predicted_prices = model.predict(new_houses)
for i, price in enumerate(predicted_prices):
    print(f"House {i+1}: ${price:.2f}k")
```

## Train-Test Split

ประเมินโมเดลด้วยข้อมูลที่ไม่เคยเห็น

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = LinearRegression()
model.fit(X_train, y_train)

# Evaluate on test set
test_predictions = model.predict(X_test)
test_r2 = r2_score(y_test, test_predictions)
print(f"Test R²: {test_r2:.3f}")
```

## Correlation vs Regression

| ด้าน | Correlation | Regression |
|--------|------------|-----------|
| วัตถุประสงค์ | วัดความแรงของความสัมพันธ์ | ทำนายตัวแปรหนึ่งจากอีกตัวแปร |
| ทิศทาง | สมมาตร | Y ถูกทำนายจาก X |
| ผลลัพธ์ | ค่า r (-1 ถึง 1) | สมการพร้อม coefficients |

## เมื่อไหร่ควรใช้ Regression

- ทำนายราคาบ้าน
- ทำนายยอดขาย
- ประเมินต้นทุน
- ทำนายอุปสงค์

Regression เป็นเครื่องมือ data science ที่ใช้กันทั่วไปและมีประโยชน์มาก
