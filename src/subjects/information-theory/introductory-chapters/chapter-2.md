---
title: Chapter 2 - Probability, Entropy, and Inference
layout: subject-layout.njk
---

# Chapter 2 - Probability, Entropy, and Inference
This chapter covers the foundational concepts of probability, entropy, and inference needed for the rest of the book.

## Key Concepts:
-   **Probability Theory:**
    -   An ensemble is a random variable x, its set of possible outcomes AX (the "alphabet"), and their probabilities PX.
    -   Standard rules are reviewed: joint probability P(x, y), marginal probability $P(x) = Σ_y P(x, y)$, and conditional probability $P(x|y) = P(x, y) / P(y)$.
    -   Bayes' theorem is central: P(y|x,H) = P(x|y,H)P(y|H) / P(x|H). This allows for inverse probability calculations—inferring unobserved variables from observed ones.
-   **Meaning of Probability:**
    -   **Frequentist View:** Probabilities describe frequencies of outcomes in random experiments.
    -   **Bayesian Viewpoint:** Probabilities can also describe degrees of belief in propositions that do not involve random variables (e.g., the probability a suspect is guilty). This approach is justified by the Cox axioms, which state that if beliefs follow simple consistency rules, they can be mapped to probabilities. This book often takes a Bayesian approach.
-   **Inference Terminology:** In an inverse probability problem $P(θ|D,H) = P(D|θ,H)P(θ|H) / P(D|H)$:
    -   P(θ|H) is the prior probability of the parameters θ.
    -   P(D|θ,H) is the likelihood of the parameters θ (it is a function of θ, not a probability distribution over D).
    -   P(θ|D,H) is the posterior probability.
    -   P(D|H) is the evidence or marginal likelihood.
    -   **The Likelihood Principle:** Inferences should depend only on the likelihood of the parameters given the data that actually happened, not on other possible outcomes.
-   **Entropy and Information:**
    -   The Shannon information content of an outcome x is $h(x) = log2(1/P(x))$ bits. Less probable outcomes have higher information content.
    -   The entropy of an ensemble X is the average information content: $H(X) = Σ_x P(x) log2(1/P(x))$. It is also known as the uncertainty of X.
    -   Entropy is non-negative and is maximized when the distribution is uniform $(H(X) <= log|AX|)$.
    -   Gibbs' inequality states that the relative entropy DKL(P||Q) >= 0, with equality only if P=Q. This can be proved using Jensen's inequality for convex functions.
