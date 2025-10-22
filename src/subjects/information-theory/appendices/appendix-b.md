---
title: Appendix B - Relevant Probability/Math Tools
layout: subject-layout.njk
---

# Appendix B - Relevant Probability/Math Tools

This appendix summarizes key probability and mathematical concepts that are frequently used in information theory. A solid understanding of these tools is essential for grasping the theoretical underpinnings.

## Probability Theory Fundamentals

-   **Basic Probability Rules:**
    -   Addition Rule: `P(A ∪ B) = P(A) + P(B) - P(A ∩ B)`
    -   Multiplication Rule: `P(A ∩ B) = P(A | B) P(B)`
-   **Conditional Probability:** `P(A | B) = P(A ∩ B) / P(B)`
-   **Bayes' Theorem:** `P(H | E) = (P(E | H) P(H)) / P(E)` (where H is hypothesis, E is evidence)
-   **Random Variables:** Discrete and Continuous.
-   **Probability Mass Functions (PMF):** For discrete random variables.
-   **Probability Density Functions (PDF):** For continuous random variables.
-   **Expectation:** `E[X] = Σ x p(x)` (discrete) or `∫ x p(x) dx` (continuous).
-   **Variance:** `Var(X) = E[(X - E[X])²]`

## Logarithms

-   **Base 2 Logarithm (log₂):** Crucial for information theory, as it naturally leads to units of bits.
-   **Properties of Logarithms:**
    -   `log(ab) = log(a) + log(b)`
    -   `log(a/b) = log(a) - log(b)`
    -   `log(a^k) = k log(a)`
    -   Change of base: `log_b(x) = log_k(x) / log_k(b)`

## Calculus Basics

-   **Derivatives:** For optimization (e.g., finding maximum entropy distributions).
-   **Integrals:** For continuous probability distributions and expectations.

## Linear Algebra (Basic)

-   **Vectors and Matrices:** For representing probability distributions and transformations in multi-variate contexts.
-   **Eigenvalues and Eigenvectors:** Can appear in advanced topics like principal component analysis (PCA) which has connections to information theory.

This appendix serves as a refresher; for a deeper dive into any of these topics, consult standard textbooks on probability and mathematics.