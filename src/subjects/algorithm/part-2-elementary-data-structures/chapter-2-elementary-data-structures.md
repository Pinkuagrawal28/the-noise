---
title: Chapter 2 - Elementary Data Structures
layout: subject-layout.njk
---

# Chapter 2: Elementary Data Structures

Data structures help organize and store data efficiently so algorithms can access and modify it easily.

---

## 2.1 Types of Data Structures
| Category | Examples |
|----------|-----------|
| Primitive | int, float, char, boolean |
| Non-Primitive | Arrays, Lists, Trees, Graphs |
| Linear | Arrays, Linked Lists, Stacks, Queues |
| Non-Linear | Trees, Graphs |
| Static | Arrays |
| Dynamic | Linked Lists |

---

## 2.2 Arrays
An array is a collection of elements stored in **contiguous memory locations**.

### Operations
| Operation | Time Complexity |
|-----------|------------------|
| Access | O(1) |
| Insertion | O(n) |
| Deletion | O(n) |

### Example
```c
int A[5] = {2, 4, 6, 8, 10};
```

---

## 2.3 Linked Lists

A linked list is a collection of nodes where each node contains data and a pointer to the next node.

### Types
- Singly Linked List
- Doubly Linked List
- Circular Linked List

### Node Structure
```c
struct Node {
    int data;
    struct Node* next;
};
```

---

## 2.4 Stacks (LIFO)

A stack follows Last In First Out (LIFO).

### Operations
- push(x)
- pop()
- peek()
- isEmpty()

### Example (Array implementation)
```python
stack = []
stack.append(5)
stack.append(3)
stack.pop() # Removes 3
```

---

## 2.5 Queues (FIFO)

A queue follows First In First Out (FIFO).

### Types
- Simple Queue
- Circular Queue
- Priority Queue
- Deque

### Example:
```python
from collections import deque
q = deque([1, 2, 3])
q.append(4)
q.popleft()
```

---

## 2.6 Hash Tables

Maps keys to values using a hash function.

### Example:
```python
hashmap = {}
hashmap["age"] = 25
```

---

## 2.7 Strings

Strings are arrays of characters ending with \0.

---

## 2.8 Summary

This chapter covered:

- Types of data structures
- Arrays, Linked Lists
- Stacks, Queues
- Hash tables and basic operations