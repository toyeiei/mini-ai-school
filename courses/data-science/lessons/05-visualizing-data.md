# Visualizing Data

A picture is worth a thousand numbers. Good visualizations reveal patterns that raw numbers hide.

## Why Visualize?

1. **Find patterns** - Trends, clusters, outliers
2. **Communicate quickly** - Faster than tables
3. **Tell stories** - Make data memorable
4. **Spot errors** - Find data problems

## Types of Charts

### Bar Charts

Compare categories.

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

Use when: Comparing discrete categories.

### Histograms

Show distribution of continuous data.

```python
ages = [22, 25, 25, 28, 30, 30, 30, 32, 35, 38, 40, 45, 50, 52, 55]

plt.hist(ages, bins=5, edgecolor='black')
plt.title('Customer Ages')
plt.xlabel('Age')
plt.ylabel('Count')
plt.show()
```

Use when: Showing distribution of one variable.

### Scatter Plots

Show relationship between two variables.

```python
study_hours = [1, 2, 3, 4, 5, 6, 7, 8]
test_scores = [52, 60, 68, 75, 82, 88, 92, 96]

plt.scatter(study_hours, test_scores)
plt.title('Study Hours vs Test Scores')
plt.xlabel('Hours Studied')
plt.ylabel('Test Score')
plt.show()
```

Use when: Finding correlations.

### Line Charts

Show trends over time.

```python
months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
sales = [120, 135, 148, 162, 175, 190]

plt.plot(months, sales, marker='o')
plt.title('Monthly Sales')
plt.xlabel('Month')
plt.ylabel('Revenue ($)')
plt.show()
```

Use when: Data changes over time.

### Pie Charts

Show proportions of a whole.

```python
budget = [500, 300, 200, 150]
categories = ['Marketing', 'Development', 'Support', 'Operations']

plt.pie(budget, labels=categories, autopct='%1.1f%%')
plt.title('Budget Distribution')
plt.show()
```

Use sparingly. Bar charts are often clearer.

## Choosing the Right Chart

| Data | Best Chart |
|------|-----------|
| Compare categories | Bar |
| Show distribution | Histogram |
| Relationship between two variables | Scatter |
| Change over time | Line |
| Proportions | Bar (or pie if few) |

## Common Mistakes

### Starting at Zero (or Not)

```python
# Bad: Makes small differences look huge
plt.bar(['A', 'B', 'C'], [99, 99.5, 100])
plt.ylim(98, 101)

# Good: Appropriate scale
plt.bar(['A', 'B', 'C'], [99, 99.5, 100])
plt.ylim(98.5, 100.5)
```

### 3D Charts

Avoid 3D charts - they distort proportions and are hard to read.

### Too Many Colors

Use consistent, meaningful colors. Don't use a rainbow for no reason.

## Adding Context

```python
# Include reference lines
avg = sum(sales) / len(sales)
plt.axhline(y=avg, color='red', linestyle='--', label='Average')
plt.legend()

# Annotate important points
plt.annotate('Peak', xy=(5, 190), xytext=(6, 195),
            arrowprops=dict(arrowstyle='->', color='gray'))
```

## Saving Charts

```python
plt.savefig('chart.png', dpi=300, bbox_inches='tight')
plt.savefig('chart.pdf', bbox_inches='tight')
```

## Quick Matplotlib Reference

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

Visualization transforms numbers into insights. Always visualize before drawing conclusions.
