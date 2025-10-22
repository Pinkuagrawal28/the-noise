---
title: Chapter 13 - Marginalization and Inference
layout: subject-layout.njk
---

# Chapter 13 - Marginalization and Inference

This chapter focuses on the critical role of marginalization in probabilistic inference, particularly within information theory, and introduces both exact and approximate methods for performing it.

## Exact Marginalization (sequences, trellises, graphs)

Marginalization is the process of summing (or integrating) out nuisance variables to obtain the probability distribution of a variable of interest. In complex models, exact marginalization can be computationally intensive but is sometimes feasible.

-   **Sequences:** For sequences of dependent random variables (e.g., in Hidden Markov Models), algorithms like the forward-backward algorithm efficiently perform exact marginalization over hidden states.

-   **Trellises:** Trellis diagrams (state-transition diagrams) are visual tools used to represent sequences of states and transitions, often employed in decoding algorithms (e.g., Viterbi algorithm) where marginalization is implicitly performed to find the most likely path.

-   **Graphs (e.g., Bayesian Networks, Markov Random Fields):** For probabilistic graphical models, exact marginalization can be performed using algorithms like the sum-product algorithm (belief propagation) on trees or by converting general graphs into tree-like structures (junction trees).

## Approximate Methods: Variational Inference, Monte Carlo methods

When exact marginalization is intractable (which is often the case for complex, high-dimensional models), approximate methods become necessary.

-   **Variational Inference:**
    -   Transforms the inference problem into an optimization problem.
    -   It approximates a complex posterior distribution with a simpler, tractable distribution by minimizing the KL divergence between them.
    -   Offers a deterministic approach to approximation.

-   **Monte Carlo Methods:**
    -   A class of computational algorithms that rely on repeated random sampling to obtain numerical results.
    -   **Markov Chain Monte Carlo (MCMC):** A common technique where a Markov chain is constructed such that its stationary distribution is the target posterior distribution. Samples from this chain are then used to approximate expectations and marginals.
    -   Provides a stochastic approach to approximation, often with guarantees of convergence in the limit of infinite samples.
