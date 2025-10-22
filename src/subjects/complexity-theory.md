---
title: Complexity Theory
layout: subject-layout.njk
tags: subject
permalink: /subjects/complexity-theory/
---

# Complexity Theory

Computational complexity theory is a branch of the theory of computation in theoretical computer science that focuses on classifying computational problems according to their resource usage, and relating these classes to each other. A computational problem is a task solved by a computer. A computation problem is solvable by mechanical application of mathematical steps, such as an algorithm.

## Table of Contents

*   [Introduction](#complexity-theory)
*   [Complexity Classes](#complexity-classes)
*   [P vs NP Problem](#p-vs-np-problem)

## Complexity Classes

A complexity class is a set of problems of related resource-based complexity. The two most commonly analyzed resources are time and memory.

### P

The complexity class P is the set of all decision problems that can be solved by a deterministic Turing machine in polynomial time.

### NP

The complexity class NP is the set of all decision problems for which the instances where the answer is "yes" have proofs verifiable in polynomial time by a deterministic Turing machine.

### NP-hard

A problem is NP-hard if an algorithm for solving it can be translated into one for solving any NP-problem (nondeterministic polynomial time) problem. NP-hard therefore means "at least as hard as any NP-problem," although it might, in fact, be harder.

### NP-complete

NP-complete is a class of problems that are in NP and are also NP-hard. The NP-complete problems are the hardest problems in NP.

## P vs NP Problem

The P versus NP problem is a major unsolved problem in computer science. It asks whether every problem whose solution can be quickly verified by a computer can also be quickly solved by a computer.