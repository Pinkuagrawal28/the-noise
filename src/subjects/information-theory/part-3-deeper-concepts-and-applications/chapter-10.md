---
title: Chapter 10 - The Noisy-Channel Coding Theorem
layout: subject-layout.njk
---

# Chapter 10 - The Noisy-Channel Coding Theorem

This chapter provides a conceptual understanding of the proof of Shannon's Noisy-Channel Coding Theorem, primarily using the concept of jointly typical sequences and the idea of random coding.

## Jointly Typical Sequences

The proof of the noisy-channel coding theorem relies heavily on the concept of jointly typical sequences:

-   A pair of sequences `(x^N, y^N)` (an input sequence of length `N` and a corresponding output sequence of length `N`) is said to be **jointly typical** if their empirical entropies (calculated from the observed frequencies in the sequences) are close to the true entropies `H(X)`, `H(Y)`, and `H(X,Y)` of the source and channel.
-   The Asymptotic Equipartition Principle (AEP) extends to jointly typical sequences, stating that for large `N`, the probability of observing a pair of sequences that are not jointly typical is very small.

## Proof Idea: Random Coding

Shannon's original proof is an existence proof, demonstrating that good codes exist without explicitly constructing them. The core idea is based on random coding:

1.  **Codebook Generation:** A codebook `C` is constructed by generating `2^(NR)` codewords, each of length `N`, at random. Each codeword is generated according to the optimal input distribution `P*(x)` that maximizes the channel capacity.
2.  **Encoding:** To send a message, the sender simply looks up the corresponding codeword in the codebook and transmits it over the noisy channel.
3.  **Decoding:** Upon receiving a sequence `y^N`, the decoder searches through the codebook for a unique codeword `x^N` that is **jointly typical** with `y^N`. If such a unique codeword is found, it is declared as the transmitted message.

## Probability of Error

An error occurs in decoding if:

-   **(a) The transmitted codeword `x^N` and the received sequence `y^N` are not jointly typical:** This happens with a probability that goes to zero as `N` increases, due to the AEP.
-   **(b) Another "wrong" codeword `x'^N` (different from the transmitted `x^N`) is also jointly typical with the received sequence `y^N`):** The probability of this happening also goes to zero as `N` increases, provided the rate `R` is less than the channel capacity `C`. This is because the number of possible codewords that could be jointly typical with `y^N` is approximately `2^(N H(X|Y))`, and if `R < C`, then `2^(NR)` is much smaller than `2^(N I(X;Y))`, making it unlikely for a wrong codeword to be jointly typical.

For large `N` and a transmission rate `R < C`, the probabilities of both types of errors go to zero, demonstrating that reliable communication is possible.

## Rate-Distortion Theory (Brief Mention)

While the noisy-channel coding theorem focuses on error-free communication, **Rate-Distortion Theory** addresses the problem of communicating at rates below capacity when some distortion or error is acceptable. It quantifies the minimum achievable distortion for a given transmission rate, or conversely, the minimum rate required to achieve a certain level of distortion. If a certain probability of bit error `p_b` is acceptable, communication is possible up to a higher rate `R(p_b) = C / (1 - H₂(p_b))`, where `H₂(p_b)` is the binary entropy function.
