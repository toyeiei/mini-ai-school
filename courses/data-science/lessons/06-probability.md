# Probability Basics

Probability measures how likely an event is to occur. It's the foundation of statistical inference.

## Basic Concepts

### Experiment
An action with uncertain outcome.

Examples:
- Flipping a coin
- Rolling a die
- Customer making a purchase

### Outcome
A single possible result.

```python
coin_flip = 'heads'  # one outcome
die_roll = 6         # one outcome
```

### Sample Space
All possible outcomes.

```python
coin_space = ['heads', 'tails']
die_space = [1, 2, 3, 4, 5, 6]
```

### Event
One or more outcomes.

```python
# Event: rolling an even number
even_event = [2, 4, 6]
```

## Probability Scale

Probability is between 0 and 1:

```
0 -------- 0.5 -------- 1
|           |           |
Impossible  Unlikely  Likely    Certain
            50/50
```

- **P = 0** - Impossible (sun will not rise tomorrow?)
- **P = 0.5** - Equally likely (coin flip)
- **P = 1** - Certain (sun will rise tomorrow)

## Calculating Probability

```python
# Probability = (favorable outcomes) / (total outcomes)

# Coin flip
P_heads = 1 / 2  # 0.5 or 50%

# Six-sided die
P_roll_6 = 1 / 6  # 16.67%
P_roll_even = 3 / 6  # 50%

# Drawing a heart from a deck
P_heart = 13 / 52  # 25%
```

## Complementary Events

If P(A) is probability of event, then P(not A) = 1 - P(A):

```python
P_rain = 0.3
P_no_rain = 1 - 0.3  # 0.7
```

## Combined Events

### AND (Intersection)

Both events must occur.

```python
# Flip two coins
# P(both heads) = P(first is heads) AND P(second is heads)
P_both_heads = 0.5 * 0.5  # 0.25 or 25%

# Roll two dice, both 6
P_both_sixes = (1/6) * (1/6)  # 1/36 or 2.78%
```

### OR (Union)

At least one event occurs.

```python
# P(A or B) = P(A) + P(B) - P(A and B)

# Roll die: get 1 OR 2
P_1_or_2 = (1/6) + (1/6)  # 2/6 or 33.33%

# Draw heart OR ace from deck
# P(heart) = 13/52, P(ace) = 4/52, P(heart AND ace) = 1/52
P_heart_or_ace = (13/52) + (4/52) - (1/52)  # 16/52 or 30.77%
```

## Independent vs Dependent Events

### Independent Events
One event doesn't affect the other.

```python
# Two coin flips are independent
P(HH) = P(H) * P(H) = 0.5 * 0.5 = 0.25
```

### Dependent Events
One event affects the other.

```python
# Draw two cards without replacement
# First card affects what remains for second

# P(both aces) = P(first ace) * P(second ace given first ace)
P(both_aces) = (4/52) * (3/51)  # 12/2652 or 0.45%
```

## Conditional Probability

P(B|A) = Probability of B given A has occurred.

```python
# P(person has disease | test positive)
# Written as P(disease | positive)

# If 1% of people have disease:
P(disease) = 0.01

# Test is 99% accurate:
P(positive | disease) = 0.99

# Calculate P(positive and disease)
P(positive AND disease) = P(disease) * P(positive|disease)
P(pos_and_disease) = 0.01 * 0.99  # 0.0099
```

## Expected Value

Average outcome if repeated many times.

```python
# Expected value = sum of (probability * value)

# Game: Flip coin, heads you win $2, tails you lose $1
# P(heads) = 0.5, P(tails) = 0.5
expected_value = (0.5 * 2) + (0.5 * -1)  # $0.50

# On average, you win 50 cents per game
```

## Bayes' Theorem

Update probability based on new evidence:

```python
# P(A|B) = P(B|A) * P(A) / P(B)

# Example: Spam detection
# P(spam) = 0.3  (prior)
# P(word|"free"|spam) = 0.8
# P(word|"free"|not_spam) = 0.1

# Calculate P(spam|"free")
# P(spam|"free") = P("free"|spam) * P(spam) / P("free")

P_free = (0.8 * 0.3) + (0.1 * 0.7)  # 0.31
P_spam_free = (0.8 * 0.3) / 0.31  # 0.77

# Given the word "free", probability of spam is 77%
```

## Key Formulas

| Concept | Formula |
|---------|---------|
| Probability | P(A) = favorable / total |
| Complement | P(not A) = 1 - P(A) |
| AND (independent) | P(A and B) = P(A) * P(B) |
| OR | P(A or B) = P(A) + P(B) - P(A and B) |
| Conditional | P(B|A) = P(A and B) / P(A) |

Probability helps you make decisions under uncertainty.
