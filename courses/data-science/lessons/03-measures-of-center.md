# Measures of Center

When you have a set of numbers, what's the "typical" value? Measures of center summarize data with a single number.

## Mean (Average)

Add all values, divide by count.

```python
# Calculate mean
sales = [120, 89, 156, 201, 178, 134, 167, 189, 145, 198]

mean_sales = sum(sales) / len(sales)
print(f"Mean: {mean_sales}")  # Output: 157.7
```

### Mean Formula

```
Mean = (Sum of all values) / (Count of values)
```

### Mean is Sensitive to Outliers

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

The outlier dramatically skews the mean.

## Median (Middle Value)

The middle value when data is sorted. If even count, average of two middle values.

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

### Median is Robust to Outliers

```python
salaries_with_ceo = [45000, 52000, 48000, 51000, 49000, 500000]
sorted_salaries = sorted(salaries_with_ceo)
# [45000, 48000, 49000, 51000, 52000, 500000]
#           middle1      middle2
median = (49000 + 51000) / 2
print(f"Median: ${median}")  # $50,000
```

The median (50,000) better represents typical salary than the mean (124,000).

## Mode (Most Frequent)

The value that appears most often.

```python
from collections import Counter

colors = ['red', 'blue', 'red', 'green', 'blue', 'blue', 'red']
counter = Counter(colors)
mode = counter.most_common(1)[0][0]
print(f"Mode: {mode}")  # blue
```

### Mode Use Cases

- Finding most popular product
- Identifying most common complaint
- Categorical data analysis

### Multiple Modes

```python
# Two values appear equally
numbers = [1, 2, 2, 3, 3, 4]  # Both 2 and 3 appear twice
# This data has two modes: 2 and 3
```

## When to Use Each

| Measure | Best For | Sensitive to Outliers? |
|---------|----------|----------------------|
| Mean | Symmetric, continuous data | Yes |
| Median | Skewed data, ordinal data | No |
| Mode | Categorical data | No |

## Comparing Mean vs Median

```python
# Income distribution (typically skewed right)
incomes = [30000, 35000, 40000, 45000, 50000, 60000, 75000, 200000]
mean = sum(incomes) / len(incomes)  # ~71,875
median = (45000 + 50000) / 2        # 47,500

print(f"Mean income: ${mean}")   # Skewed high
print(f"Median income: ${median}") # Better typical
```

If mean >> median, data is right-skewed (few high outliers).
If mean << median, data is left-skewed (few low outliers).

## Summary

- **Mean**: Add and divide. Good for symmetric data.
- **Median**: Middle value. Good for skewed data.
- **Mode**: Most frequent. Good for categories.

Always visualize your data before choosing a measure of center.
