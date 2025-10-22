---
title: Chapter 4 - The Source Coding Theorem
layout: subject-layout.njk
---

# Chapter 4 - The Source Coding Theorem

This chapter formally introduces the fundamental concepts of information content and entropy, leading to Shannon's Source Coding Theorem, which defines the limits of lossless data compression.

## Shannon Information Content and Entropy

-   **Shannon Information Content `h(x)`:** For an outcome `x` with probability `p(x)`, its information content is defined as `h(x) = log₂(1/p(x))` bits. This quantifies the "surprise" of observing `x`; less probable events carry more information.
-   **Entropy `H(X)`:** The entropy of an ensemble `X` (a random variable with its possible outcomes and probabilities) is the average information content: `H(X) = Σ_x p(x) log₂(1/p(x))`. It measures the average uncertainty of `X` or the average number of bits needed to describe an outcome from `X`.

## Intuition Building: Weighing Problems and Guessing Games

-   **Weighing Problem:** Consider a classic problem of finding a single counterfeit coin among a set using a balance scale. Each weighing provides a certain amount of information, reducing the uncertainty about the location of the counterfeit coin. This illustrates how discrete choices reduce the space of possibilities.
-   **Guessing Games:** In a game where you guess a number, each yes/no question (binary choice) provides 1 bit of information, effectively halving the search space. This demonstrates the logarithmic nature of information.

## Typicality and the Asymptotic Equipartition Principle (AEP)

-   **Typical Sequences:** For a long sequence of `N` independent and identically distributed (i.i.d.) random variables, the observed sequence is almost certain to belong to a specific subset of all possible sequences, known as the "typical set."
-   **Asymptotic Equipartition Principle (AEP):** For a sufficiently long sequence of `N` i.i.d. random variables from a source with entropy `H(X)`, there are approximately `2^(NH(X))` such typical sequences. Each typical sequence has a probability close to `2^(-NH(X))`. The probability of observing a non-typical sequence becomes vanishingly small as `N` increases.

## Shannon's Source Coding Theorem

The AEP directly leads to Shannon's Source Coding Theorem:

-   **Statement:** For a source generating `N` i.i.d. random variables with entropy `H(X)`, it is possible to compress these `N` variables into approximately `NH(X)` bits with an arbitrarily small probability of information loss. Conversely, it is impossible to compress them into fewer than `NH(X)` bits without incurring a significant probability of error.
-   **Implication:** This theorem establishes the theoretical minimum average number of bits required for lossless compression of a data source, which is its entropy.
