---
title: Information Theory
layout: subject-layout.njk
tags: subject
permalink: /subjects/information-theory/
---

# The Noise – Information Theory Notes

## [Preface](./preface/)

### What is Information Theory?

- Historical context (Shannon, 1948).
- Applications across communication, data science, AI, physics.

## Introductory Chapters

- [Chapter 1: Introduction to Information Theory](./introductory-chapters/chapter-1/)
    - Information as uncertainty reduction
    - Signals, messages, alphabets
- [Chapter 2: Probability, Entropy, and Inference](./introductory-chapters/chapter-2/)
    - Probability basics
    - Entropy & information content
    - KL Divergence
- [Chapter 3: Extensions of Entropy & Inference](./introductory-chapters/chapter-3/)
    - Mutual Information
    - Relative Entropy
    - Conditional Entropy
    - Inference problems

## Part I – Fundamentals of Information

- [Chapter 4: The Source Coding Theorem (without deep code constructions)](./part-1-fundamentals-of-information/chapter-4/)
    - Intuition of compressibility
    - Shannon’s source coding theorem
- [Chapter 5: Entropy and Data Representation](./part-1-fundamentals-of-information/chapter-5/)
    - Relationship between entropy & compression limits
    - Symbolic vs stream representation of data
- [Chapter 6: Information in Random Variables](./part-1-fundamentals-of-information/chapter-6/)
    - Dependent random variables
    - Joint, marginal, conditional entropy

## Part II – Communication & Channels

- [Chapter 7: Communication over a Noisy Channel (high-level)](./part-2-communication-and-channels/chapter-7/)
    - Noisy channel models (BSC, BEC, AWGN)
    - Channel capacity definition
    - Intuition for Shannon’s noisy-channel theorem (no coding proof details)
- [Chapter 8: Noisy-Channel Theorem (conceptual)](./part-2-communication-and-channels/chapter-8/)
    - Error-free communication in principle
    - Trade-offs: rate, error probability, capacity

## Part III – Deeper Concepts & Applications

- [Chapter 9: Information Retrieval and Hashing (conceptual)](./part-3-deeper-concepts-and-applications/chapter-9/)
    - Hash codes as efficient information access
    - Role of redundancy
- [Chapter 10: Information and Constraints](./part-3-deeper-concepts-and-applications/chapter-10/)
    - Communication with constraints (noiseless channels with structure)
    - Crosswords, cryptography, and inference connections
- [Chapter 11: Information and Evolution](./part-3-deeper-concepts-and-applications/chapter-11/)
    - Biological perspective: information flow in DNA, sexual reproduction, and diversity

## Part IV – Probabilistic Inference in Information Theory

- [Chapter 12: Probability Distributions Useful in Information Theory](./part-4-probabilistic-inference/chapter-12/)
    - Gaussian, Bernoulli, Exponential families
    - Entropy properties
- [Chapter 13: Marginalization and Inference](./part-4-probabilistic-inference/chapter-13/)
    - Exact marginalization (sequences, trellises, graphs)
    - Approximate methods: variational inference, Monte Carlo methods
- [Chapter 14: Laplace’s Method & Model Comparison](./part-4-probabilistic-inference/chapter-14/)
    - Approximation in inference
    - Occam’s razor in model selection
- [Chapter 15: Bayesian Inference & Decision Theory](./part-4-probabilistic-inference/chapter-15/)
    - Bayesian viewpoint on information
    - Decision theory and expected information gain

## Part V – Connections to Learning

- [Chapter 16: Information and Learning](./part-5-connections-to-learning/chapter-16/)
    - Learning as inference
    - Neural networks as information processors (high-level intuition)
    - Independent Component Analysis & latent variable modeling
    - Gaussian processes and uncertainty

## Appendices (For Reference)

- [Appendix A: Notation](./appendices/appendix-a/)
- [Appendix B: Relevant Probability/Math Tools](./appendices/appendix-b/)
- [Appendix C: Physics-inspired views of information](./appendices/appendix-c/)

---

# Information Theory

Information theory is a scientific study of the quantification, storage, and communication of digital information. The field was fundamentally established by the works of Harry Nyquist and Ralph Hartley, in the 1920s, and Claude Shannon in the 1940s.

## Table of Contents

*   [Introduction](#information-theory)
*   [Entropy](#entropy)
*   [Channel Capacity](#channel-capacity)
*   [Mutual Information](#mutual-information)
*   [Kullback-Leibler Divergence](#kullback-leibler-divergence)

## Entropy

In information theory, entropy is the average amount of information contained in each message received. Here, message stands for an event, sample or character drawn from a distribution or data stream. Entropy is a measure of uncertainty.

### Shannon Entropy

Shannon entropy quantifies the expected value of the information contained in a message. For a discrete random variable $X$ with possible outcomes $x_1, x_2, \dots, x_n$ and probability mass function $P(X)$, the entropy $H(X)$ is defined as:

$H(X) = -\sum_{i=1}^{n} P(x_i) \log_b P(x_i)$

Where:
*   $P(x_i)$ is the probability of outcome $x_i$.
*   $\log_b$ is the logarithm with base $b$. Common bases are 2 (bits), $e$ (nats), or 10 (bans).

Entropy is maximized when all outcomes are equally likely, representing maximum uncertainty.

## Channel Capacity

The channel capacity is the tight upper bound on the rate at which information can be reliably transmitted over a communication channel. By the noisy-channel coding theorem, the channel capacity of a given channel is the limiting information rate that can be achieved with arbitrarily small error probability.

### Shannon-Hartley Theorem

The Shannon-Hartley theorem states the maximum rate at which information can be transmitted over a communications channel of a specified bandwidth in the presence of noise. It is given by:

$C = B \log_2\left(1 + \frac{S}{N}\right)$

Where:
*   $C$ is the channel capacity in bits per second.
*   $B$ is the bandwidth of the channel in hertz.
*   $S$ is the average received signal power over the bandwidth.
*   $N$ is the average noise power or interference over the bandwidth.

## Mutual Information

Mutual information (MI) is a measure of the mutual dependence between two random variables. It quantifies the amount of information obtained about one random variable by observing the other random variable. The mutual information of two discrete random variables $X$ and $Y$ is defined as:

$I(X;Y) = \sum_{y \in Y} \sum_{x \in X} P(x,y) \log_2\left(\frac{P(x,y)}{P(x)P(y)}\right)$

Where:
*   $P(x,y)$ is the joint probability distribution function of $X$ and $Y$.
*   $P(x)$ and $P(y)$ are the marginal probability distribution functions of $X$ and $Y$, respectively.

## Kullback-Leibler Divergence

The Kullback-Leibler (KL) divergence, also known as relative entropy, is a measure of how one probability distribution diverges from a second, expected probability distribution. It is not symmetric and does not satisfy the triangle inequality, so it is not a true metric.

For two probability distributions $P$ and $Q$ of a discrete random variable, the KL divergence from $Q$ to $P$ is defined as:

$D_{KL}(P \| Q) = \sum_{x \in X} P(x) \log_2\left(\frac{P(x)}{Q(x)}\right)$

Where:
*   $P(x)$ is the probability of $x$ in distribution $P$.
*   $Q(x)$ is the probability of $x$ in distribution $Q$.
