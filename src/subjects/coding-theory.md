---
title: Coding Theory
layout: subject-layout.njk
tags: subject
permalink: /subjects/coding-theory/
---

# Coding Theory

Coding theory is the study of the properties of codes and their respective fitness for specific applications. Codes are used for data compression, cryptography, error detection and correction, data transmission and data storage.

## Table of Contents

*   [Introduction](#coding-theory)
*   [Error-Correcting Codes](#error-correcting-codes)
*   [Hamming Codes](#hamming-codes)
*   [Shannon's Theorem](#shannons-theorem)

## Error-Correcting Codes

An error-correcting code is a process of adding redundant data, or parity data, to a message, which can be used to reconstruct the original message in case of errors. There are two main types of error-correcting codes: block codes and convolutional codes.

### Block Codes

Block codes are a type of error-correcting code where the message is divided into fixed-size blocks of bits, and a redundant set of bits is added to each block.

### Convolutional Codes

Convolutional codes are a type of error-correcting code where the message is a stream of bits, and the encoder generates a stream of output bits based on a sliding window of the input bits.

## Hamming Codes

Hamming codes are a family of linear error-correcting codes. Hamming codes can detect up to two-bit errors or correct one-bit errors without detection of uncorrected errors. By contrast, the simple parity code cannot correct errors, and can detect only an odd number of bits in error.

## Shannon's Theorem

In information theory, the noisy-channel coding theorem (sometimes Shannon's theorem), establishes that for any given degree of noise contamination of a communication channel, it is possible to communicate discrete data (digital information) nearly error-free up to a computable maximum rate through the channel.