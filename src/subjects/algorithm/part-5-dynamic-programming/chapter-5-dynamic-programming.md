---
title: Chapter 5 - Dynamic Programming
layout: subject-layout.njk
---

# Chapter 5: Dynamic Programming

Dynamic Programming (DP) is a method for solving complex problems by breaking them down into overlapping subproblems and storing the results of these subproblems to avoid redundant computations.

---

## 5.1 When to Use Dynamic Programming

Use DP when the problem has:
| Property | Description |
|----------|-------------|
| Optimal Substructure | Optimal solution can be built from optimal solutions of subproblems |
| Overlapping Subproblems | Same subproblems are solved multiple times |

---

## 5.2 DP vs Divide & Conquer

| Feature | Dynamic Programming | Divide and Conquer |
|---------|---------------------|---------------------|
| Subproblems | Overlapping | Independent |
| Storage | Uses memoization/table | No storage |
| Efficiency | Faster | Slower for overlapping problems |
| | | |

---

## 5.3 Approaches

| Approach | Description |
|----------|-------------|
| **Top-Down** | Recursion + Memoization |
| **Bottom-Up** | Iterative + Tabulation |

---

## 5.4 Example Problems

### Fibonacci Series

#### (1) Recursive – Inefficient
```python
def fib(n):
    if n <= 1: return n
    return fib(n-1) + fib(n-2)
```

#### (2) DP with Memoization
```python
def fib(n, memo={}):
    if n in memo: return memo[n]
    if n <= 1: return n
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]
```

#### (3) Bottom-Up Tabulation
```python
def fib(n):
    dp = [0, 1]
    for i in range(2, n+1):
        dp.append(dp[i-1] + dp[i-2])
    return dp[n]
```

### Longest Common Subsequence (LCS)
```python
def lcs(x, y):
    m, n = len(x), len(y)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, n+1):
            if x[i-1] == y[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]
```

### 0/1 Knapsack Problem
```python
def knapsack(weights, values, capacity):
    n = len(values)
    dp = [[0]*(capacity+1) for _ in range(n+1)]
    for i in range(1, n+1):
        for w in range(capacity+1):
            if weights[i-1] <= w:
                dp[i][w] = max(values[i-1] + dp[i-1][w-weights[i-1]], dp[i-1][w])
            else:
                dp[i][w] = dp[i-1][w]
    return dp[n][capacity]
```

---

## 5.5 DP Table Example
| i/j | 0 | 1 | 2 | 3 | 4 | 5 |
|-----|---|---|---|---|---|---|
| 0   | 0 | 0 | 0 | 0 | 0 | 0 |
| 1   | 0 | 2 | 2 | 2 | 2 | 2 |
| 2   | 0 | 2 | 3 | 5 | 5 | 5 |

---

## 5.6 Common DP Problems
| Problem | Category |
|---------|----------|
| Fibonacci | Basic DP |
| LCS | String DP |
| Matrix Chain Multiplication | Optimization DP |
| 0/1 Knapsack | Optimization DP |
| Coin Change | Counting DP |

---

## Summary

- DP is used to solve optimization and counting problems efficiently
- Stores solutions to overlapping subproblems
- Uses memoization or tabulation