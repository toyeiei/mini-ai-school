# Machine Learning Introduction

Machine learning teaches computers to learn from data without being explicitly programmed.

## What is Machine Learning?

Traditional programming:
```
Rules + Data → Answers
```

Machine learning:
```
Data + Answers → Rules
```

```python
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

## Types of Machine Learning

### Supervised Learning
Learn from labeled data (inputs with known outputs).

```python
# Examples:
# - Email spam detection (labels: spam/ham)
# - House price prediction (labels: actual prices)
# - Image classification (labels: cat/dog/bird)

# Data structure
X = [[size], [size], [size], ...]  # Features (input)
y = [price, price, price, ...]       # Labels (output)
```

### Unsupervised Learning
Find patterns in unlabeled data.

```python
# Examples:
# - Customer segmentation (group similar customers)
# - Anomaly detection (find unusual transactions)
# - Topic modeling (group documents by theme)

# Data structure
X = [[feature1], [feature2], [feature3], ...]  # No labels!
```

### Reinforcement Learning
Learn through trial and error with rewards.

```python
# Examples:
# - Game playing (win = reward)
# - Robot navigation
# - Trading algorithms

# Agent takes actions, receives rewards, learns policy
```

## Classification vs Regression

| Aspect | Classification | Regression |
|--------|---------------|------------|
| Output | Category/label | Continuous number |
| Examples | Spam/not spam, dog/cat | Price, temperature |
| Evaluation | Accuracy, precision | R², RMSE |

## Classification Example

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

## Clustering Example (Unsupervised)

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

## The ML Workflow

```python
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

## Common Algorithms

| Algorithm | Type | Best For |
|-----------|------|----------|
| Linear Regression | Supervised (Regression) | Predicting continuous values |
| Logistic Regression | Supervised (Classification) | Binary decisions |
| Decision Tree | Both | Interpretable models |
| Random Forest | Both | Robust predictions |
| K-Means | Unsupervised | Customer segmentation |
| Neural Networks | Both | Complex patterns |

## Overfitting vs Underfitting

### Overfitting
Model memorizes training data, fails on new data.

```python
# Too complex (high variance)
model = DecisionTreeClassifier(max_depth=None)  # Grows fully
# Training accuracy: 100%
# Test accuracy: 60%  <- Bad!
```

### Underfitting
Model is too simple, doesn't capture patterns.

```python
# Too simple (high bias)
model = LinearRegression()
# Training accuracy: 50%
# Test accuracy: 48%  <- Also bad!
```

### Good Fit
Model generalizes well.

```python
# Just right
model = DecisionTreeClassifier(max_depth=5)
# Training accuracy: 85%
# Test accuracy: 82%  <- Good!
```

## Key Takeaways

1. ML learns patterns from data, not explicit rules
2. Supervised = labeled data, Unsupervised = unlabeled
3. Always split data for evaluation
4. Watch for overfitting and underfitting
5. More data often helps more than better algorithms

Machine learning is a powerful tool. Use it thoughtfully.
