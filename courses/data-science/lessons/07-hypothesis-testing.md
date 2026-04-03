# Hypothesis Testing

Hypothesis testing helps you determine if an effect is real or just random chance.

## The Scientific Method

1. **Question** - Does a new drug work?
2. **Hypothesis** - Make a prediction
3. **Experiment** - Collect data
4. **Analysis** - Test the hypothesis
5. **Conclusion** - Accept or reject hypothesis

## Setting Up Hypotheses

### Null Hypothesis (H0)
The default assumption. No effect, no difference.

```python
# Examples of null hypothesis
H0 = "New drug has no effect"  # Same as placebo
H0 = "Both websites convert equally"
H0 = "Mean height is 170cm"
```

### Alternative Hypothesis (H1)
What you're trying to prove.

```python
# Examples of alternative hypothesis
H1 = "New drug has an effect"  # Drug is different from placebo
H1 = "Website A converts better"
H1 = "Mean height is not 170cm"
```

## Types of Tests

### Two-tailed Test
Check if there's any difference (either direction).

```python
# H0: Mean = 170
# H1: Mean != 170 (could be > 170 or < 170)
```

### One-tailed Test
Check if there's a difference in a specific direction.

```python
# H0: Mean <= 170
# H1: Mean > 170 (only interested in increase)
```

## Significance Level (Alpha)

How confident do you need to be?

| Alpha | Meaning |
|-------|---------|
| 0.05 | 5% chance of false positive (most common) |
| 0.01 | 1% chance (more strict) |
| 0.10 | 10% chance (less strict) |

```python
alpha = 0.05  # 95% confidence required
```

## P-Value

The probability of seeing your results if the null hypothesis is true.

```python
# If p-value = 0.03
# There's a 3% chance of observing this data if H0 is true
```

### Interpreting P-Value

```
p-value = 0.03
           |
           v
    ------------------
    |                  |
    0.01             0.05
    |                  |
    Reject H0        Fail to reject H0
    (strong evidence) (not enough evidence)
```

## Test Procedure

```python
# Example: A/B test
# Website A: 1000 visitors, 50 conversions (5%)
# Website B: 1000 visitors, 65 conversions (6.5%)

# Is the difference real?

# 1. State hypotheses
H0 = "No difference between A and B"
H1 = "There is a difference"

# 2. Choose significance level
alpha = 0.05

# 3. Calculate test statistic (simplified)
import numpy as np
from scipy import stats

# Observed data
n1, p1 = 1000, 0.05  # Site A
n2, p2 = 1000, 0.065  # Site B

# Perform two-proportion z-test
pooled_p = (50 + 65) / (1000 + 1000)
se = np.sqrt(pooled_p * (1-pooled_p) * (1/n1 + 1/n2))
z = (p2 - p1) / se

# Calculate p-value (two-tailed)
p_value = 2 * (1 - stats.norm.cdf(abs(z)))

print(f"Z-score: {z:.2f}")
print(f"P-value: {p_value:.4f}")

# 4. Make decision
if p_value < alpha:
    print("Reject H0: Significant difference")
else:
    print("Fail to reject H0: No significant difference")
```

## Decision Errors

### Type I Error (False Positive)
Rejecting H0 when it's actually true.

```python
# You conclude the drug works, but it doesn't
# Probability = alpha (e.g., 5%)
```

### Type II Error (False Negative)
Failing to reject H0 when it's actually false.

```python
# You conclude the drug doesn't work, but it does
# Probability = beta
# Power = 1 - beta (probability of detecting real effect)
```

## Confidence Intervals

Range where we expect the true value to fall.

```python
# 95% CI for conversion rate difference
from scipy.stats import norm

observed_diff = p2 - p1  # 0.015
se_diff = np.sqrt((p1*(1-p1)/n1) + (p2*(1-p2)/n2))
ci_lower = observed_diff - 1.96 * se_diff
ci_upper = observed_diff + 1.96 * se_diff

print(f"95% CI: [{ci_lower:.4f}, {ci_upper:.4f}]")
# If CI doesn't include 0, difference is significant
```

## Common Tests

| Test | Use Case | Data Type |
|------|----------|-----------|
| Z-test | Compare means (large sample) | Numeric |
| T-test | Compare means (small sample) | Numeric |
| Chi-square | Compare proportions | Categorical |
| ANOVA | Compare 3+ group means | Numeric |

## Steps to Hypothesis Testing

1. Define null and alternative hypotheses
2. Choose significance level (alpha)
3. Collect data
4. Calculate test statistic
5. Find p-value
6. Compare p-value to alpha
7. Draw conclusion

Remember: We never "prove" - we either reject or fail to reject H0.
