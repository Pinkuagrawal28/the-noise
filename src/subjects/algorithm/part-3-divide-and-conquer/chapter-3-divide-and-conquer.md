---
title: Chapter 3 - Divide and Conquer
layout: subject-layout.njk
---

# Chapter 3: Divide and Conquer

Divide and Conquer is a fundamental algorithm design technique based on breaking a problem into smaller subproblems.

---

## 3.1 Strategy

Divide and Conquer follows three steps:

| Step | Description |
|------|-------------|
| **Divide** | Split the problem into smaller subproblems |
| **Conquer** | Solve subproblems recursively |
| **Combine** | Merge their solutions to solve the original problem |

---

## 3.2 Recurrence Relation

Time complexity is often expressed using recurrence:

$$T(n) = aT(n/b) + f(n)$$

Where:
- `a` = number of subproblems
- `n/b` = size of each subproblem
- `f(n)` = time to divide/combine

---

## 3.3 Master Theorem

Used to solve recurrence relations:
| Case | Condition | Complexity |
|------|-----------|-------------|
| 1    | f(n) = O(n^c), c < log_b(a) | T(n) = Θ(n^log_b(a)) |
| 2    | f(n) = Θ(n^c), c = log_b(a) | T(n) = Θ(n^c log n) |
| 3    | f(n) = Ω(n^c), c > log_b(a) | T(n) = Θ(f(n)) |

---

## 3.4 Examples

### Binary Search

$$T(n) = T(n/2) + O(1) \rightarrow O(\log n)$$

```python
def binary_search(arr, x):
    low, high = 0, len(arr)-1
    while low <= high:
        mid = (low + high)//2
        if arr[mid] == x:
            return mid
        elif arr[mid] < x:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```

### Merge Sort
$$T(n) = 2T(n/2) + O(n) \rightarrow O(n \log n)$$

```python
def merge_sort(arr):
    if len(arr) <= 1: return arr
    mid = len(arr)//2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    return result + left[i:] + right[j:]
```

### Quick Sort
Average: O(n log n), Worst: O(n²)

---

## 3.5 Advantages

- Simple recursive structure
- Efficient for large input sizes
- Supports parallel computation

---

## 3.6 Disadvantages

- Overhead of recursive calls
- May require extra memory (e.g., merge sort)

---

## 3.7 Applications

- Sorting Algorithms
- Closest Pair of Points
- Matrix Multiplication
- Convolution Operations

---

## Summary

This chapter introduced:

- Divide and Conquer strategy
- Master Theorem for complexity
- Examples: Binary Search, Merge Sort, Quick Sort
