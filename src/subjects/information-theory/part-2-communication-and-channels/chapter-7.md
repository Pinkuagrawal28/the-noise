---
title: Chapter 7 - Codes for Integers
layout: subject-layout.njk
---

# Chapter 7 - Codes for Integers

This chapter explores methods for encoding positive integers into binary sequences in a uniquely decodable manner. Such codes are fundamental building blocks for more complex universal coding schemes, especially when dealing with data where the range of values is unknown or very large.

## The Problem with Standard Binary Representation

The standard fixed-length binary representation of integers is not uniquely decodable without prior knowledge of the number of bits used. For example, the sequence `101` could represent the integer 5, or it could be the concatenation of 10 (binary for 2) followed by 1 (binary for 1). To ensure unique decodability, we need self-delimiting codes.

## Unary Code

The simplest self-delimiting code for positive integers is the unary code.

-   **Encoding:** An integer `n` is encoded by `n-1` zeros followed by a single one. For example, 1 is `1`, 2 is `01`, 3 is `001`, 4 is `0001`.
-   **Length:** The length of the unary code for `n` is `n` bits.
-   **Properties:** It is uniquely decodable (a `1` always marks the end of a number). However, it is very inefficient for large numbers.

## Self-Delimiting Codes

More efficient codes for integers often involve encoding the length of the integer first, followed by the integer itself. These are called self-delimiting codes.

-   **Code Cα (or Gamma Code):**
    -   Encodes an integer `n` by first sending the length of its binary representation (minus 1, i.e., `⌊log₂(n)⌋`) in unary, followed by the binary representation of `n` with its most significant bit removed (the "headless" binary representation).
    -   Example: For `n=5` (binary `101`), `⌊log₂(5)⌋ = 2`. Unary for 2 is `01`. Headless binary for 5 is `01`. So, `Cα(5) = 0101`.
-   **Iterated Self-Delimiting Codes (Cβ, Cγ, etc.):** The idea of `Cα` can be iterated. For `Cβ`, instead of encoding the length in unary, you encode the length of the length in unary, and so on. This allows for even more compact representation of very large integers.

## Elias's Universal Code

Elias's universal code (also known as Elias gamma code, delta code, etc., depending on the iteration) is an elegant family of self-delimiting codes that are asymptotically optimal for sources where the probabilities of integers decrease rapidly (e.g., `p(n) ~ 1/n`).

-   **Principle:** It works by sending a sequence of messages, where each message encodes the length of the next. For example, to encode `n`:
    1.  Encode `k = ⌊log₂(n)⌋` (the number of bits needed to represent `n` minus 1) using a unary code.
    2.  Encode `n` in binary, but without its leading `1` (since `k` tells us its length).
-   **Example (Elias Gamma Code):** For `n=5` (binary `101`), `k=2`. Unary for 2 is `01`. Headless binary for 5 is `01`. So, Elias Gamma Code for 5 is `0101`.

These codes are crucial in applications where data values can be large and their distribution is unknown, such as in data compression algorithms that build dictionaries or represent pointers.
