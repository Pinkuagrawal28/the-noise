---
title: Chapter 4 - Greedy Method
layout: subject-layout.njk
---

# Chapter 4: Greedy Method

The **Greedy Method** is a problem-solving strategy where decisions are made step-by-step, always choosing the **locally optimal choice** with the hope of reaching a **global optimum**.

---

## 4.1 Greedy Strategy
At each step:
1. Choose the best option available at the moment.
2. Irrevocably include it in the solution.
3. Repeat until the problem is solved.

---

## 4.2 Features of Greedy Algorithms
| Feature | Description |
|----------|-------------|
| Local Optimization | Makes the best immediate choice |
| Irreversible | Decisions cannot be changed later |
| Efficiency | Usually fast and simple |
| Requires Proof | Must prove global optimality |

---

## 4.3 Common Problems Solved Using Greedy
| Problem | Goal |
|---------|------|
| Activity Selection | Maximize number of non-overlapping tasks |
| Fractional Knapsack | Maximize profit |
| Huffman Coding | Minimize encoding cost |
| Minimum Spanning Tree | Minimize total edge weight |
| Dijkstra’s Algorithm | Shortest path in weighted graph |

---

## 4.4 Example 1: Activity Selection Problem

### Problem:
Select the **maximum number of non-overlapping activities** using a single resource.

### Greedy Choice:
Select the activity that **finishes earliest**.

```python
def activity_selection(start, finish):
    selected = [0]
    last = 0
    for i in range(1, len(start)):
        if start[i] >= finish[last]:
            selected.append(i)
            last = i
    return selected
```

---

## 4.5 Example 2: Fractional Knapsack Problem

### Problem:
Maximize total profit given weight constraints. Items can be broken into fractions.

### Greedy Choice:
Select item with maximum profit/weight ratio.

---

## 4.6 Example 3: Huffman Coding

Minimizes average encoding length by using a priority queue to build an optimal binary tree.

---

## 4.7 Greedy vs Dynamic Programming
| Greedy | Dynamic Programming |
|--------|---------------------|
| Local decisions | Global optimization |
| Faster | Slower |
| No re-evaluation | Stores subproblems |
| Doesn't always work | Always optimal |

---

## 4.8 When Does Greedy Work?

- Optimal substructure exists
- Greedy choice property holds

---

## Summary

- Greedy makes best local choices
- May not always guarantee global optimum
- Works well in MST, shortest paths, scheduling, compression