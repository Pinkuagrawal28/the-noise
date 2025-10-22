---
title: Approximation Algorithms
layout: subject-layout.njk
tags: subject
permalink: /subjects/approximation-algorithms/
---

# Approximation Algorithms

An approximation algorithm is an algorithm that runs in polynomial time and finds an approximate solution to an NP-hard problem. These algorithms are used when finding an optimal solution is too computationally expensive.

## Table of Contents

*   [Introduction](#approximation-algorithms)
*   [Approximation Ratio](#approximation-ratio)
*   [Greedy Algorithms](#greedy-algorithms)
*   [Polynomial-Time Approximation Scheme (PTAS)](#polynomial-time-approximation-scheme-ptas)

## Approximation Ratio

The approximation ratio of an algorithm is a measure of its performance. For a minimization problem, it is the ratio between the cost of the solution found by the algorithm and the cost of the optimal solution. For a maximization problem, it is the ratio between the value of the optimal solution and the value of the solution found by the algorithm.

## Greedy Algorithms

A greedy algorithm is an algorithmic paradigm that follows the problem-solving heuristic of making the locally optimal choice at each stage with the hope of finding a global optimum. In many problems, a greedy strategy does not produce an optimal solution, but nonetheless, a greedy heuristic may yield locally optimal solutions that approximate a global optimal solution in a reasonable amount of time.

### Example: Set Cover

The set cover problem is a classic NP-hard problem. A simple greedy algorithm for set cover is to iteratively pick the set that covers the most uncovered elements. This algorithm has an approximation ratio of $O(\log n)$.

## Polynomial-Time Approximation Scheme (PTAS)

A polynomial-time approximation scheme (PTAS) is a type of approximation algorithm for optimization problems. A PTAS is an algorithm which takes an instance of an optimization problem and a parameter $\epsilon > 0$ and produces a solution that is within a factor $1 + \epsilon$ of being optimal. The running time of a PTAS must be polynomial in the size of the instance for a fixed $\epsilon$, but can be exponential in $1/\epsilon$.