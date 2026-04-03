# Machine Learning Introduction

Machine learning สอนคอมพิวเตอร์ให้เรียนรู้จากข้อมูลโดยไม่ต้องเขียนโปรแกรมบอกทีละขั้นตอน

## Machine Learning คืออะไร?

Programming แบบดั้งเดิม:
```python
Rules + Data → Answers
```

Machine learning:
```python
Data + Answers → Rules
```

```
# Traditional: You write the rules
def classify_email(email):
    if 'viagra' in email:
        return 'spam'
    if 'meeting' in email:
        return 'work'
    return 'personal'

# ML: Computer learns rules from data
# You provide: emails labeled as spam/not spam
# ML learns: what patterns indicate spam
```

## ประเภทของ Machine Learning

### Supervised Learning
เรียนรู้จาก labeled data (inputs ที่มี outputs ที่รู้แล้ว)

```
# Examples:
# - Email spam detection (labels: spam/ham)
# - House price prediction (labels: actual prices)
# - Image classification (labels: cat/dog/bird)

# Data structure
X = [[size], [size], [size], ...]  # Features (input)
y = [price, price, price, ...]       # Labels (output)
```

### Unsupervised Learning
หา pattern ในข้อมูลที่ไม่มี label

```
# Examples:
# - Customer segmentation (group similar customers)
# - Anomaly detection (find unusual transactions)
# - Topic modeling (group documents by theme)

# Data structure
X = [[feature1], [feature2], [feature3], ...]  # No labels!
```

### Reinforcement Learning
เรียนรู้ผ่านการลองผิดลองถูกพร้อมรางวัล

```
# Examples:
# - Game playing (win = reward)
# - Robot navigation
# - Trading algorithms

# Agent takes actions, receives rewards, learns policy
```

## Classification vs Regression

| ด้าน | Classification | Regression |
|--------|---------------|------------|
| Output | หมวดหมู่/label | ตัวเลข continuous |
| ตัวอย่าง | Spam/ไม่ spam, สุนัข/แมว | ราคา, อุณหภูมิ |
| การประเมิน | Accuracy, precision | R², RMSE |

## ตัวอย่าง Classification

```python
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Data: emails with features
# Features: word counts, links, etc.
X = [
    [5, 2, 0],    # email 1: 5 bad words, 2 links, 0 images
    [0, 1, 3],
    [10, 5, 1],
    [1, 0, 2],
    [8, 4, 0]
]
y = ['ham', 'ham', 'spam', 'ham', 'spam']  # Labels

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = DecisionTreeClassifier()
model.fit(X_train, y_train)

# Predict
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy: {accuracy:.2%}")
```

## ตัวอย่าง Clustering (Unsupervised)

```python
from sklearn.cluster import KMeans
import numpy as np

# Customer data: [annual_spend, visits_per_month]
customers = np.array([
    [1000, 2],
    [1500, 3],
    [800, 1],
    [3000, 8],
    [3200, 7],
    [1200, 2]
])

# Find 2 customer segments
kmeans = KMeans(n_clusters=2, random_state=42)
segments = kmeans.fit_predict(customers)

print(segments)  # [0, 0, 0, 1, 1, 0]
# Group 0: Low-value customers
# Group 1: High-value customers
```

## Workflow ของ ML

```
# 1. Load and explore data
import pandas as pd
df = pd.read_csv('data.csv')
print(df.describe())

# 2. Preprocess data
X = df[['feature1', 'feature2']]
y = df['target']
# Handle missing values, encode categories, scale features

# 3. Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2
)

# 4. Choose model
from sklearn.linear_model import LogisticRegression
model = LogisticRegression()

# 5. Train
model.fit(X_train, y_train)

# 6. Evaluate
from sklearn.metrics import accuracy_score
predictions = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, predictions):.2%}")

# 7. Use model to predict
new_data = [[value1, value2]]
prediction = model.predict(new_data)
```

## Algorithm ที่ใช้กันทั่วไป

| Algorithm | ประเภท | เหมาะกับ |
|-----------|------|----------|
| Linear Regression | Supervised (Regression) | ทำนายค่า continuous |
| Logistic Regression | Supervised (Classification) | การตัดสินใจแบบไบนารี |
| Decision Tree | ทั้งสองแบบ | โมเดลที่อ่านง่าย |
| Random Forest | ทั้งสองแบบ | การทำนายที่แข็งแกร่ง |
| K-Means | Unsupervised | แบ่งกลุ่มลูกค้า |
| Neural Networks | ทั้งสองแบบ | Pattern ที่ซับซ้อน |

## Overfitting vs Underfitting

### Overfitting
โมเดลจำข้อมูล training ได้หมด แต่ทำงานกับข้อมูลใหม่ได้แย่

```
# Too complex (high variance)
model = DecisionTreeClassifier(max_depth=None)  # Grows fully
# Training accuracy: 100%
# Test accuracy: 60%  <- Bad!
```

### Underfitting
โมเดลง่ายเกินไป ไม่สามารถจับ pattern ได้

```
# Too simple (high bias)
model = LinearRegression()
# Training accuracy: 50%
# Test accuracy: 48%  <- Also bad!
```

### Good Fit
โมเดล generalize ได้ดี

```
# Just right
model = DecisionTreeClassifier(max_depth=5)
# Training accuracy: 85%
# Test accuracy: 82%  <- Good!
```

## สรุปสิ่งสำคัญ

1. ML เรียนรู้ pattern จากข้อมูล ไม่ใช่กฎที่เขียนไว้
2. Supervised = ข้อมูลมี label, Unsupervised = ไม่มี label
3. อย่าลืม split ข้อมูลเพื่อประเมิน
4. ระวัง overfitting และ underfitting
5. ข้อมูลมากขึ้นมักช่วยได้มากกว่า algorithm ที่ดีขึ้น

Machine learning เป็นเครื่องมือที่ทรงพลัง ใช้อย่างมีสติ
