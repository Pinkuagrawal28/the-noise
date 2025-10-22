---
title: Chapter 1- Introduction to Algorithms
layout: subject-layout.njk
---

# Chapter 1: Introduction to Algorithms

## 1.1 What is an Algorithm?
An algorithm is a finite sequence of well-defined instructions used to solve a specific problem. It takes input, processes it through defined steps, and produces output.

### Example
- **Problem:** Sort numbers
- **Algorithm Example:** Bubble Sort, Merge Sort, Quick Sort

---

## 1.2 Characteristics of a Good Algorithm
| Property | Description |
|----------|-------------|
| Input | Accepts zero or more inputs |
| Output | Produces at least one output |
| Definiteness | Each step must be clear |
| Finiteness | Must terminate after finite steps |
| Effectiveness | Steps should be executable |

---

## 1.3 Algorithm vs Program
- An **algorithm** is a logic or method.
- A **program** implements that logic in a specific programming language.

---

## 1.4 Algorithm Analysis
Algorithms are compared using:
- **Time Complexity** – how fast?
- **Space Complexity** – how much memory used?

---

## 1.5 Asymptotic Notations
| Notation | Meaning |
|----------|---------|
| **O(f(n))** | Upper bound (worst case) |
| **Ω(f(n))** | Lower bound (best case) |
| **Θ(f(n))** | Tight bound (average case) |

Example:



O(n), O(n log n), O(n²), O(2ⁿ)


---

## 1.6 Algorithm Design Paradigms
- Divide and Conquer
- Greedy Algorithms
- Dynamic Programming
- Backtracking
- Branch and Bound

---

## 1.7 Pseudocode Example



Algorithm FindMax(A, n):
max ← A[0]
for i from 1 to n-1:
if A[i] > max:
max ← A[i]
return max


---

## 1.8 Summary
This chapter introduced:
- Meaning and purpose of algorithms
- Complexity analysis
- Algorithm properties
- Pseudocode basics

---