---
title: Chapter 9 - Communication over a Noisy Channel
layout: subject-layout.njk
---

# Chapter 9 - Communication over a Noisy Channel

This chapter formally defines discrete memoryless channels and introduces the pivotal concept of channel capacity, which quantifies the maximum reliable communication rate over such channels.

## Discrete Memoryless Channels (DMC)

A discrete memoryless channel is characterized by:

-   An **input alphabet** `X` (the set of symbols that can be transmitted).
-   An **output alphabet** `Y` (the set of symbols that can be received).
-   A set of **transition probabilities** `P(y|x)` for each input `x ∈ X` and output `y ∈ Y`. These probabilities describe the likelihood of receiving `y` given that `x` was transmitted. "Memoryless" implies that the current output depends only on the current input, not on past inputs or outputs.

## Example Channels:

-   **Binary Symmetric Channel (BSC):** Input `X = {0, 1}`, Output `Y = {0, 1}`. A transmitted bit is flipped with probability `f` (the crossover probability).
-   **Binary Erasure Channel (BEC):** Input `X = {0, 1}`, Output `Y = {0, 1, ?}`. A transmitted bit is either received correctly or "erased" (represented by `?`) with probability `ε`.
-   **Noisy Typewriter:** A channel where each input character might be received as itself or one of its neighbors on a keyboard, with certain probabilities.
-   **Z Channel:** A binary channel where a `0` is always received correctly, but a `1` might be received as a `0` with some probability.

## Inference in Noisy Channels

Given an observed output `y`, we often want to infer the most likely input `x`. This is an inverse probability problem solved using Bayes' theorem:

-   `P(x|y) = P(y|x)P(x) / P(y)`
-   Here, `P(y|x)` is the channel transition probability, `P(x)` is the prior probability of the input, and `P(x|y)` is the posterior probability of the input given the output.

## Channel Capacity `C`

**Channel Capacity `C`** is the maximum rate at which information can be transmitted reliably over a noisy channel. It is defined as the maximum mutual information between the input `X` and output `Y` over all possible input probability distributions `P(x)`:

-   `C = max_{P(x)} I(X;Y)`
-   `C = max_{P(x)} (H(Y) - H(Y|X))`
-   `C = max_{P(x)} (H(X) - H(X|Y))`

For a BSC with crossover probability `f`, the capacity is `C = 1 - H₂(f)`, where `H₂(f)` is the binary entropy function. For a BEC with erasure probability `ε`, the capacity is `C = 1 - ε`.

## Shannon's Noisy-Channel Coding Theorem (Statement)

This fundamental theorem states:

-   For any discrete memoryless channel, and for any rate `R` less than the channel capacity `C` (`R < C`), there exist encoding and decoding schemes such that information can be transmitted with an arbitrarily small probability of error.
-   Conversely, it is impossible to transmit information reliably at rates exceeding the channel capacity (`R > C`).

This theorem is a cornerstone of information theory, demonstrating that reliable communication is possible over noisy channels, provided the transmission rate is kept below the channel's capacity.
