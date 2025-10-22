---
title: Chapter 5 - Symbol Codes
layout: subject-layout.njk
---

# Chapter 5 - Symbol Codes

This chapter delves into the design and properties of lossless, variable-length codes that encode individual source symbols, focusing on their efficiency and unique decodability.

## Lossless, Variable-Length Codes

Symbol codes map each source symbol to a unique binary codeword. To achieve compression, frequently occurring symbols are assigned shorter codewords, while less frequent ones get longer codewords. The goal is to minimize the average codeword length while ensuring that the original message can be perfectly reconstructed.

## Key Concepts:

-   **Prefix Codes:** A type of variable-length code where no codeword is a prefix of any other codeword. This property allows for instantaneous decoding, meaning that as soon as a complete codeword is received, it can be uniquely identified without needing to look ahead at subsequent bits.

-   **Kraft Inequality:** For any uniquely decodable binary code with codeword lengths `{l_i}` for `i = 1, ..., M` (where `M` is the size of the alphabet), the Kraft inequality states that `Σ_{i=1 to M} 2^(-l_i) ≤ 1`. Conversely, if a set of codeword lengths satisfies the Kraft inequality, then a prefix code with these lengths can be constructed.

-   **Optimal Codelengths:** The expected length of a code, `L = Σ p_i l_i`, is minimized when the codeword lengths `l_i` are chosen to be approximately `log₂(1/p_i)`. When `l_i = log₂(1/p_i)` for all `i`, the expected code length `L` is exactly equal to the source entropy `H(X)`. However, codelengths must be integers.

-   **Source Coding Theorem for Symbol Codes:** For any discrete memoryless source with entropy `H(X)`, there exists a prefix code with an expected codeword length `L` such that `H(X) ≤ L < H(X) + 1`. This theorem shows that symbol codes can achieve compression rates very close to the theoretical limit set by entropy.

-   **Huffman Coding:** A widely used algorithm for constructing optimal prefix codes. It works by iteratively merging the two least probable symbols into a new composite symbol, assigning them common prefixes, until only one symbol remains. The process is then reversed to assign binary codewords.
