---
title: Chapter 1 - Introduction to Information Theory
layout: subject-layout.njk
---

# Chapter 1 - Introduction to Information Theory
This chapter introduces the fundamental problem of achieving perfect communication over an imperfect, noisy channel.

## Key Concepts:
-   **Noisy Channels:** Examples include telephone lines, deep space communication links, cellular DNA replication, and disk drives. A communication channel doesn't just mean sending information from one place to another; writing to and reading from a disk drive is also a form of communication over time.
-   **Two Solutions for Reliability:**
    1.  **The Physical Solution:** Improving the physical hardware to reduce the error probability (e.g., using better components, higher power signals). This approach typically has increasing costs for incremental improvements.
    2.  **The "System" Solution:** Accepting the noisy channel as it is and adding an encoder before the channel and a decoder after it. The encoder adds systematic redundancy, and the decoder uses this redundancy to infer the original message and correct errors. Information theory is concerned with the theoretical limits of such systems.

## Error-Correcting Codes:
-   **Repetition Code (R3):** A simple code where each bit is repeated three times (e.g., 0 becomes 000, 1 becomes 111).
    -   **Decoding:** The optimal algorithm is a majority vote on each block of three bits. For a binary symmetric channel with noise level f, this reduces the error probability to approximately 3f^2.
    -   **Trade-off:** While R3 reduces errors, it also reduces the communication rate by a factor of three. Achieving very low error rates (e.g., 10<sup>-15</sup>) with repetition codes requires a large number of repetitions (around 60 for f=0.1), making the rate very low.
-   **(7, 4) Hamming Code:** A linear block code that encodes K=4 source bits into N=7 transmitted bits.
    -   **Encoding:** The extra 3 bits are parity-check bits, which are linear functions of the 4 source bits. Each parity bit ensures that the sum of bits within one of three intersecting circles is even. Any pair of the 16 possible codewords differ in at least three bits.
    -   **Decoding:** Syndrome decoding is an efficient method. The "syndrome" is the pattern of violated parity checks. For any single-bit error, the syndrome is unique and points to the flipped bit, allowing for perfect correction of single errors. If two bits are flipped, the decoder will incorrectly flip a third bit, resulting in three errors.
    -   **Performance:** The rate is R = 4/7. The probability of block error scales as O(f<sup>2</sup>), similar to R3, but at a much higher rate.
-   **Shannon's Noisy-Channel Coding Theorem:** Shannon proved the remarkable result that for any channel, there is a maximum rate, called the channel capacity (C), at which it is possible to communicate with an arbitrarily small probability of error. For a binary symmetric channel with flip probability f, the capacity is C = 1 - H2(f). This means reliable communication is possible at non-zero rates, challenging the old belief that achieving zero error required a zero rate.
