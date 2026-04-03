# Regression Basics

Regression predicts a numeric outcome. Given input features, predict a continuous value.

## Simple Linear Regression

Find the line that best fits the relationship between X and Y.

```python
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

## The Regression Equation

```
Y = b0 + b1*X + error
   |    |      |
   |    |      X (input variable)
   |    Slope (how much Y changes per unit X)
   Intercept (Y when X = 0)
```

## Finding the Best Line

Minimize the sum of squared residuals (differences between predicted and actual):

```python
# Residuals
predictions = model.predict(X)
residuals = y - predictions

# Sum of squared residuals (SSE)
sse = np.sum(residuals ** 2)
print(f"SSE: {sse:.2f}")
```

## R-squared (R²)

Measures how well the model fits the data. 0 to 1 scale.

```python
from sklearn.metrics import r2_score

r2 = r2_score(y, predictions)
print(f"R-squared: {r2:.3f}")
```

| R² Value | Interpretation |
|----------|---------------|
| 0.0 | Model explains nothing |
| 0.5 | Model explains 50% of variance |
| 0.7 | Model explains 70% of variance |
| 0.9+ | Very good fit (check for overfitting) |

## Multiple Linear Regression

Use multiple features to predict.

```python
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

## Regression Assumptions

1. **Linear relationship** - X and Y should be roughly linear
2. **Independence** - Residuals shouldn't be correlated
3. **Homoscedasticity** - Variance of residuals should be constant
4. **Normality** - Residuals should be normally distributed

## Checking Assumptions

```python
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

## Making Predictions

```python
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

Evaluate model on unseen data.

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

| Aspect | Correlation | Regression |
|--------|------------|-----------|
| Purpose | Measure relationship strength | Predict one variable from others |
| Direction | Symmetric | Y predicted from X |
| Output | r value (-1 to 1) | Equation with coefficients |

## When to Use Regression

- Predict house prices
- Forecast sales
- Estimate costs
- Predict demand

Regression is one of the most common and useful data science tools.
