---
title: Chapter 6 - Stream Codes
layout: subject-layout.njk
---

# Chapter 6 - Stream Codes

This chapter moves beyond symbol-by-symbol encoding to explore stream codes, which offer greater compression efficiency by encoding sequences of symbols. It addresses the limitations of simple symbol codes and introduces more advanced techniques.

## Limitations of Huffman Codes

Huffman codes, while optimal for symbol-by-symbol encoding, have practical and theoretical limitations:

-   **Fixed Probabilities:** They require a fixed probability distribution of symbols, making them less effective for sources with changing statistics.
-   **Minimum 1 Bit per Symbol:** Even for highly probable symbols, Huffman codes assign at least one bit, which can be inefficient if the entropy is very low (e.g., much less than 1 bit per symbol).
-   **Overhead:** The codebook itself needs to be transmitted or known by both encoder and decoder.

## Arithmetic Coding

Arithmetic coding is a powerful stream coding technique that overcomes many limitations of Huffman codes by separating the probabilistic modeling from the encoding process.

-   **Principle:** It represents an entire sequence of symbols as a sub-interval within the unit interval `[0, 1)`. The size of this sub-interval is equal to the probability of the entire sequence. The encoder then transmits a single floating-point number within this interval.
-   **Near Optimality:** Arithmetic coding can achieve compression rates very close to the theoretical entropy limit, often with an overhead of at most 2 bits for the entire message, regardless of its length.
-   **Flexibility:** It is highly flexible and can be used with adaptive probabilistic models, where symbol probabilities change over time or depend on context (e.g., using Bayesian models like the Laplace model for counts: `P(a|counts) = (F_a+1) / (F_a+F_b+2)`).

## Lempel-Ziv (LZ) Coding

Lempel-Ziv (LZ) algorithms (e.g., LZ77, LZ78, LZW) are "universal" compression methods that do not require prior knowledge of the source's probability distribution.

-   **Principle:** LZ algorithms work by identifying and replacing repeating substrings (phrases) in the input data with pointers to earlier occurrences of those substrings, effectively building a dictionary of phrases on the fly.
-   **Adaptivity:** They are inherently adaptive, as the dictionary is constructed dynamically during encoding and decoding.
-   **Asymptotic Optimality:** LZ algorithms are theoretically proven to asymptotically compress any ergodic source to its entropy. However, in practice, achieving this optimality may require unfeasibly large amounts of data.
-   **Applications:** Widely used in common compression formats like GIF, PNG, and the `gzip` utility.
