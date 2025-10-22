---
title: Randomized Algorithms
layout: subject-layout.njk
tags: subject
permalink: /subjects/randomized-algorithms/
---

# Randomized Algorithms

A randomized algorithm is an algorithm that employs a degree of randomness as part of its logic. The algorithm typically uses uniformly random bits as an auxiliary input to guide its behavior, in the hope of achieving good performance in the "average case" over all possible choices of random bits. Formally, the algorithm's performance will be a random variable determined by the random bits; thus either the running time, or the output (or both) are random variables.

## Table of Contents

*   [Introduction](#randomized-algorithms)
*   [Monte Carlo Algorithms](#monte-carlo-algorithms)
*   [Las Vegas Algorithms](#las-vegas-algorithms)

## Monte Carlo Algorithms

A Monte Carlo algorithm is a randomized algorithm whose running time is deterministic, but whose output may be incorrect with a certain (typically small) probability. Monte Carlo algorithms are often used in situations where it is difficult or impossible to find an exact solution, but where it is possible to find an approximate solution that is likely to be correct.

## Las Vegas Algorithms

A Las Vegas algorithm is a randomized algorithm that always produces the correct result, but whose running time is a random variable. Las Vegas algorithms are often used in situations where it is important to find the correct solution, but where it is acceptable for the algorithm to take a long time to run.