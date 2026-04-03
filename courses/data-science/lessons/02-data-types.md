# Data Types

Understanding data types helps you choose the right analysis methods. Different types require different treatments.

## Numeric Data

### Continuous
Values that can be any number within a range.

Examples:
- Height: 5.8 feet
- Temperature: 72.5 degrees
- Price: $19.99

```python
temperature = 72.5
price = 19.99
```

### Discrete
Whole numbers, often counts.

Examples:
- Number of children: 3
- Count of emails: 47
- Days until deadline: 14

```python
num_children = 3
email_count = 47
```

## Categorical Data

### Nominal
Categories with no inherent order.

Examples:
- Colors: red, blue, green
- Countries: USA, France, Japan
- Blood types: A, B, AB, O

```python
colors = ['red', 'blue', 'green']
blood_types = ['A', 'B', 'AB', 'O']
```

### Ordinal
Categories with a meaningful order.

Examples:
- T-shirt sizes: S, M, L, XL
- Education: High School, Bachelor's, Master's, PhD
- Satisfaction: Low, Medium, High

```python
sizes = ['S', 'M', 'L', 'XL']
satisfaction = ['Low', 'Medium', 'High']
```

## Time Series Data

Data collected over time intervals.

Examples:
- Daily stock prices
- Hourly temperature readings
- Monthly sales figures

```python
# Daily temperatures over a week
temperatures = [72, 75, 68, 70, 74, 78, 76]
dates = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
```

## Text Data

Unstructured text that requires processing.

Examples:
- Customer reviews
- Social media posts
- Email content

```python
review = "This product exceeded my expectations!"
```

## Why Types Matter

| Data Type | Analysis Methods |
|-----------|-----------------|
| Numeric | Calculate averages, correlations |
| Categorical | Count frequencies, mode |
| Ordinal | Median, percentiles |
| Time Series | Trends, seasonality |
| Text | Sentiment, word counts |

## Converting Types

Sometimes you need to change data types:

```python
# String to number
age = int("25")

# Number to string
age_str = str(25)

# Category to number (encoding)
size_map = {'S': 1, 'M': 2, 'L': 3}
encoded = size_map['M']  # Returns 2
```

## Missing Data

Real data often has missing values:

```python
# Representing missing data
height = None       # Python way
height = float('nan')  # Not a Number
height = -1         # Sentinel value
```

Handle missing data by:
- Removing rows with missing values
- Filling with average/median
- Using a placeholder like "Unknown"

## Data Type Summary

```
Data
├── Numeric
│   ├── Continuous (any decimal)
│   └── Discrete (whole numbers)
├── Categorical
│   ├── Nominal (no order)
│   └── Ordinal (has order)
├── Time Series (ordered by time)
└── Text (unstructured)
```

Understanding your data types is the first step to proper analysis.
