---
title: Chapter 8 - Dependent Random Variables
layout: subject-layout.njk
---

# Chapter 8 - Dependent Random Variables

This chapter extends the foundational concepts of entropy and information to scenarios involving multiple, potentially dependent, random variables. Understanding these relationships is crucial for modeling complex systems and communication channels.

## Definitions: Joint, Conditional Entropy, and Mutual Information

-   **Joint Entropy `H(X,Y)`:** Measures the uncertainty associated with a pair of random variables `(X,Y)`. It quantifies the average information needed to specify the outcomes of both `X` and `Y`.
    -   `H(X,Y) = - Σ_x Σ_y P(x,y) log₂(P(x,y))`

-   **Conditional Entropy `H(X|Y)`:** Measures the average uncertainty remaining about random variable `X` when the value of random variable `Y` is known. It quantifies how much more information is needed to describe `X` given `Y`.
    -   `H(X|Y) = - Σ_y P(y) Σ_x P(x|y) log₂(P(x|y))`

-   **Mutual Information `I(X;Y)`:** Quantifies the amount of information that one random variable `X` contains about another random variable `Y`. It measures the reduction in uncertainty about `X` given `Y`, or vice versa. It is a measure of the dependence between the two variables.
    -   `I(X;Y) = H(X) - H(X|Y) = H(Y) - H(Y|X)`
    -   `I(X;Y) = Σ_x Σ_y P(x,y) log₂(P(x,y) / (P(x)P(y)))`
    -   Mutual information is always non-negative, `I(X;Y) ≥ 0`, with equality if and only if `X` and `Y` are independent.

## Key Relationships (Chain Rule)

These measures are interconnected through fundamental relationships:

-   **Chain Rule for Information Content:** For individual outcomes, `h(x, y) = h(x) + h(y|x)`. This means the information content of observing `x` and `y` is the information content of `x` plus the information content of `y` given `x`.
-   **Chain Rule for Entropy:** `H(X,Y) = H(X) + H(Y|X)`. The joint entropy of two variables is the entropy of one plus the conditional entropy of the other given the first.
-   **Symmetry of Mutual Information:** `I(X;Y) = I(Y;X)`. The information `X` provides about `Y` is the same as the information `Y` provides about `X`.

These relationships are often visualized using Venn-diagram-like figures, where `H(X)` and `H(Y)` are the sizes of two circles, their intersection is `I(X;Y)`, and the remaining parts are `H(X|Y)` and `H(Y|X)`.
