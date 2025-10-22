---
title: Chapter 11 - Error-Correcting Codes & Real Channels
layout: subject-layout.njk
---

# Chapter 11 - Error-Correcting Codes & Real Channels

This chapter extends the theoretical framework of noisy-channel coding to practical error-correcting codes and real-world channels, including those with continuous inputs and outputs.

## Gaussian Channel

Many real-world communication channels, especially in wireless and analog systems, are well-modeled as Gaussian channels.

-   **Model:** `y = x + n`, where `x` is the transmitted signal, `y` is the received signal, and `n` is Additive White Gaussian Noise (AWGN) with variance `σ²`.
-   **Capacity:** Subject to an average power constraint `v = <x²>` (the average power of the transmitted signal), the capacity of the Gaussian channel is given by Shannon-Hartley theorem:
    `C = 1/2 log₂(1 + v/σ²) ` bits per channel use.
-   **Insight:** This formula highlights the fundamental trade-off between signal power (`v`), noise power (`σ²`), and achievable data rate. Increasing the signal-to-noise ratio (`v/σ²`) or the bandwidth (implicitly in the `1/2` factor for continuous time) increases capacity.

## Practical Codes

While Shannon's theorem proves the existence of good codes, practical error-correcting codes are designed to be implementable and efficient.

-   **Linear Codes:** Most practical codes are linear codes, meaning that the set of valid codewords forms a vector subspace over a finite field. This property simplifies encoding and decoding.
    -   **Block Codes:** Encode fixed-size blocks of `K` source bits into `N` codeword bits (e.g., Hamming codes, Reed-Solomon codes).
    -   **Convolutional Codes:** Encode data streams by convolving the input bits with a generator polynomial, introducing memory into the encoding process.
-   **Proof for Linear Codes:** It can be shown that the noisy-channel coding theorem holds for linear codes, meaning that randomly chosen linear codes can achieve capacity.

## Concatenation

To achieve very low error rates at high rates, complex and powerful codes are often constructed by combining simpler codes through a technique called concatenation.

-   **Inner and Outer Codes:** A common approach is to use an "outer code" (e.g., a Reed-Solomon code) to correct burst errors and a "inner code" (e.g., a convolutional code) to handle random errors.
-   **Interleaving:** Often, an interleaver is placed between the inner and outer codes. The interleaver shuffles the bits from the outer code before they are fed to the inner code. This spreads out any burst errors that might occur in the channel, making them appear as random errors to the outer code, which is better at correcting random errors.
-   **Turbo Codes and LDPC Codes:** Modern coding schemes like Turbo Codes and Low-Density Parity-Check (LDPC) codes are examples of powerful concatenated or iteratively decodable codes that operate very close to the Shannon limit.
