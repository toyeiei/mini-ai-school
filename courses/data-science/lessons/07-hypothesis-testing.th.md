# Hypothesis Testing

Hypothesis testing ช่วยให้คุณตัดสินได้ว่าผลที่เกิดขึ้นเป็นจริงหรือเกิดจากความบังเอิญ

## วิธีการทางวิทยาศาสตร์

1. **คำถาม** - ยาตัวใหม่ทำงานไหม?
2. **สมมติฐาน** - ทำนายผล
3. **ทดลอง** - เก็บข้อมูล
4. **วิเคราะห์** - ทดสอบสมมติฐาน
5. **สรุป** - ยอมรับหรือปฏิเสธสมมติฐาน

## การกำหนดสมมติฐาน

### Null Hypothesis (H0)
ข้อสันนิษฐานเริ่มต้น ไม่มีผล ไม่มีความแตกต่าง

```python
# Examples of null hypothesis
H0 = "New drug has no effect"  # Same as placebo
H0 = "Both websites convert equally"
H0 = "Mean height is 170cm"
```

### Alternative Hypothesis (H1)
สิ่งที่คุณพยายามพิสูจน์

```python
# Examples of alternative hypothesis
H1 = "New drug has an effect"  # Drug is different from placebo
H1 = "Website A converts better"
H1 = "Mean height is not 170cm"
```

## ประเภทของการทดสอบ

### Two-tailed Test
ตรวจสอบว่ามีความแตกต่างหรือไม่ (ทั้งสองทิศทาง)

```python
# H0: Mean = 170
# H1: Mean != 170 (could be > 170 or < 170)
```

### One-tailed Test
ตรวจสอบว่ามีความแตกต่างในทิศทางที่กำหนดหรือไม่

```python
# H0: Mean <= 170
# H1: Mean > 170 (only interested in increase)
```

## Significance Level (Alpha)

คุณต้องมั่นใจแค่ไหน?

| Alpha | ความหมาย |
|-------|---------|
| 0.05 | โอกาส false positive 5% (ใช้กันมากที่สุด) |
| 0.01 | โอกาส 1% (เข้มงวดกว่า) |
| 0.10 | โอกาส 10% (ไม่เข้มงวดเท่า) |

```python
alpha = 0.05  # 95% confidence required
```

## P-Value

Probability ที่จะเห็นผลลัพธ์ของคุณ ถ้า null hypothesis เป็นจริง

```python
# If p-value = 0.03
# There's a 3% chance of observing this data if H0 is true
```

### การตีความ P-Value

```
p-value = 0.03
           |
           v
    ------------------
    |                  |
    0.01             0.05
    |                  |
    Reject H0        Fail to reject H0
    (หลักฐานแข็งแกร่ง) (หลักฐานไม่เพียงพอ)
```

## ขั้นตอนการทดสอบ

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

## ข้อผิดพลาดในการตัดสินใจ

### Type I Error (False Positive)
ปฏิเสธ H0 ขณะที่ H0 จริงอยู่

```python
# You conclude the drug works, but it doesn't
# Probability = alpha (e.g., 5%)
```

### Type II Error (False Negative)
ไม่สามารถปฏิเสธ H0 ขณะที่ H0 เป็นเท็จ

```python
# You conclude the drug doesn't work, but it does
# Probability = beta
# Power = 1 - beta (probability of detecting real effect)
```

## Confidence Intervals

ช่วงที่เราคาดว่าค่าจริงจะอยู่

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

## การทดสอบที่ใช้กันทั่วไป

| Test | ใช้เมื่อ | Data Type |
|------|----------|-----------|
| Z-test | เปรียบเทียบ mean (ตัวอย่างขนาดใหญ่) | Numeric |
| T-test | เปรียบเทียบ mean (ตัวอย่างขนาดเล็ก) | Numeric |
| Chi-square | เปรียบเทียบสัดส่วน | Categorical |
| ANOVA | เปรียบเทียบ mean 3 กลุ่มขึ้นไป | Numeric |

## ขั้นตอน Hypothesis Testing

1. กำหนด null และ alternative hypothesis
2. เลือก significance level (alpha)
3. เก็บข้อมูล
4. คำนวณ test statistic
5. หา p-value
6. เปรียบเทียบ p-value กับ alpha
7. สรุปผล

จำไว้: เราไม่เคย "พิสูจน์" - เราแค่ปฏิเสธหรือไม่สามารถปฏิเสธ H0
