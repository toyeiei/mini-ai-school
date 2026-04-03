# Spread and Variation

Two datasets can have the same mean but very different distributions. Spread measures how spread out data is.

## Range

Difference between max and min.

```python
# Range
prices = [15, 18, 22, 25, 28, 45]
minimum = min(prices)  # 15
maximum = max(prices)  # 45
range_price = maximum - minimum  # 30
```

Range is simple but sensitive to outliers.

## Variance

Average of squared differences from the mean.

```python
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

### Why Square Differences?

1. Makes all differences positive
2. Penalizes larger deviations more

### Population vs Sample Variance

```python
# Population variance (divide by N)
population_variance = sum(differences) / len(data)

# Sample variance (divide by N-1)
sample_variance = sum(differences) / (len(data) - 1)
```

Use sample variance when your data is a sample of a larger population.

## Standard Deviation

Square root of variance. Returns to original units.

```python
import math
variance = 4
std_dev = math.sqrt(variance)  # 2
```

```python
# Data with low spread
low = [48, 49, 50, 51, 52]
low_mean = 50
low_std = 1.58

# Data with high spread
high = [30, 40, 50, 60, 70]
high_mean = 50
high_std = 14.14
```

Same mean (50), but very different spread!

## Percentiles and Quartiles

### Percentile
Value below which a percentage of data falls.

```python
# 25th percentile means 25% of data is below this value
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
p25 = 3.25    # 25% below
p50 = 5.5     # 50% below (median)
p75 = 7.75    # 75% below
```

### Quartiles

Divide data into four equal parts:

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Q1 = 3.25   # 25th percentile (first quartile)
Q2 = 5.5    # 50th percentile (second quartile, median)
Q3 = 7.75   # 75th percentile (third quartile)
IQR = Q3 - Q1  # Interquartile range = 4.5
```

### Box Plot Visualization

```
    |-----------[  box  ]-----------|
min              Q2            max
   |             |              |
   |---[-------o-|-------]------[+
   |   whisker   |  median  whisker
   Q1            |          Q3
                IQR
```

## Interquartile Range (IQR)

Range of middle 50% of data.

```python
IQR = Q3 - Q1
```

IQR is robust to outliers. Used to detect outliers:

```python
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

```python
# Variance (squared units)
height_variance = 25  # inches squared

# Standard deviation (original units)
height_std = 5  # inches
```

Use standard deviation for interpretation. "Heights vary by about 5 inches on average."

## Coefficient of Variation

Compare spread of different datasets:

```python
CV = (standard_deviation / mean) * 100
```

```python
# Compare variability
prices = [10, 12, 14, 16, 18]  # CV = 24%
weights = [100, 102, 104, 106, 108]  # CV = 2.4%
# Prices vary more relative to their size
```

## Summary

| Measure | What it tells you | Outlier sensitive? |
|---------|-------------------|-------------------|
| Range | Max minus min | Yes |
| Variance | Average squared deviation | Yes |
| Std Dev | Typical distance from mean | Yes |
| IQR | Spread of middle 50% | No |

Always report both center and spread. Mean of 50 with std dev of 5 means something different than mean of 50 with std dev of 20.
