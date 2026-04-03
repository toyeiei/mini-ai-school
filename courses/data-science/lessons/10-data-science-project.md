# Your First Data Science Project

Put everything together in a complete data science workflow.

## The Dataset

We'll analyze a movie dataset:

```python
# movies.csv columns:
# title, genre, year, rating, runtime, box_office

movies = [
    {"title": "Action Hero", "genre": "Action", "year": 2020, "rating": 7.5, "runtime": 120, "box_office": 850},
    {"title": "Romance", "genre": "Romance", "year": 2019, "rating": 8.2, "runtime": 95, "box_office": 320},
    {"title": "Comedy Gold", "genre": "Comedy", "year": 2021, "rating": 7.8, "runtime": 105, "box_office": 520},
    {"title": "Sci-Fi Epic", "genre": "Sci-Fi", "year": 2020, "rating": 8.9, "runtime": 150, "box_office": 1200},
    {"title": "Drama", "genre": "Drama", "year": 2018, "rating": 7.2, "runtime": 130, "box_office": 180},
]
```

## Step 1: Ask Questions

Before analyzing, ask:
- Does higher rating lead to higher box office?
- Which genre has the best ratings?
- Are movies getting longer over time?

## Step 2: Explore the Data

```python
import pandas as pd
import numpy as np

# Create DataFrame
df = pd.DataFrame(movies)

# Basic statistics
print(df.describe())

# Data types
print(df.dtypes)

# Check for missing values
print(df.isnull().sum())

# First few rows
print(df.head())
```

## Step 3: Analyze

### Calculate Measures of Center

```python
# Average rating by genre
avg_ratings = df.groupby('genre')['rating'].mean()
print(avg_ratings)

# Average box office by genre
avg_box_office = df.groupby('genre')['box_office'].mean()
print(avg_box_office)
```

### Calculate Spread

```python
# Standard deviation of ratings
rating_std = df['rating'].std()
print(f"Rating variation: {rating_std:.2f}")

# Range of box office
box_office_range = df['box_office'].max() - df['box_office'].min()
print(f"Box office range: ${box_office_range}M")
```

### Find Correlations

```python
# Correlation between rating and box office
correlation = df['rating'].corr(df['box_office'])
print(f"Rating-Box Office correlation: {correlation:.3f}")
```

## Step 4: Visualize

```python
import matplotlib.pyplot as plt

# Bar chart: Average rating by genre
avg_ratings.plot(kind='bar', title='Average Rating by Genre')
plt.xlabel('Genre')
plt.ylabel('Average Rating')
plt.tight_layout()
plt.show()

# Scatter plot: Rating vs Box Office
plt.scatter(df['rating'], df['box_office'])
plt.xlabel('Rating')
plt.ylabel('Box Office ($M)')
plt.title('Rating vs Box Office')
plt.show()
```

## Step 5: Interpret Results

```python
# Summary
print("""
Analysis Results:
================

1. Average Rating by Genre:
""")
print(avg_ratings.sort_values(ascending=False))

print("""

2. Rating-Box Office Relationship:
""")
print(f"Correlation: {correlation:.3f}")
if correlation > 0.5:
    print("Strong positive relationship!")
elif correlation > 0:
    print("Weak positive relationship.")
else:
    print("No clear relationship.")

print("""

3. Highest Grossing Movie:
""")
top_movie = df.loc[df['box_office'].idxmax()]
print(f"{top_movie['title']} (${top_movie['box_office']}M)")
```

## Complete Python Script

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 1. Load data
movies = [
    {"title": "Action Hero", "genre": "Action", "year": 2020, "rating": 7.5, "runtime": 120, "box_office": 850},
    {"title": "Romance", "genre": "Romance", "year": 2019, "rating": 8.2, "runtime": 95, "box_office": 320},
    {"title": "Comedy Gold", "genre": "Comedy", "year": 2021, "rating": 7.8, "runtime": 105, "box_office": 520},
    {"title": "Sci-Fi Epic", "genre": "Sci-Fi", "year": 2020, "rating": 8.9, "runtime": 150, "box_office": 1200},
    {"title": "Drama", "genre": "Drama", "year": 2018, "rating": 7.2, "runtime": 130, "box_office": 180},
]

df = pd.DataFrame(movies)

# 2. Explore
print("Dataset Overview:")
print(df.describe())

# 3. Analyze
avg_by_genre = df.groupby('genre')[['rating', 'box_office']].mean()
correlation = df['rating'].corr(df['box_office'])

# 4. Visualize
fig, axes = plt.subplots(1, 2, figsize=(12, 4))

avg_by_genre['rating'].plot(kind='bar', ax=axes[0], title='Avg Rating by Genre')
axes[0].set_ylabel('Rating')

avg_by_genre['box_office'].plot(kind='bar', ax=axes[1], title='Avg Box Office by Genre')
axes[1].set_ylabel('Box Office ($M)')

plt.tight_layout()
plt.show()

# 5. Report findings
print("\n=== Key Findings ===")
print(f"Best rated genre: {avg_by_genre['rating'].idxmax()}")
print(f"Highest grossing genre: {avg_by_genre['box_office'].idxmax()}")
print(f"Rating-Box Office correlation: {correlation:.2f}")
```

## Your Turn: Next Steps

1. **Find a dataset** - Kaggle, UCI Repository, or create your own
2. **Ask questions** - What do you want to learn?
3. **Explore** - Calculate statistics, visualize
4. **Build a model** - Try linear regression or classification
5. **Share** - Write up your findings

## Tips for Success

- Start simple, add complexity later
- Clean data before analyzing
- Visualize often
- Question your assumptions
- Document your process

## Resources to Continue

- **pandas** - Data manipulation
- **scikit-learn** - Machine learning
- **matplotlib/seaborn** - Visualization
- **Kaggle** - Datasets and competitions

You've completed Data Science 101. The best way to learn is to do. Start your own project today.

Congratulations on finishing all 10 lessons!
