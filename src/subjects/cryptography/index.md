---
title: Cryptography
layout: subject-layout.njk
tags: subject
permalink: /subjects/cryptography/
---

# The Cipher – Cryptography Notes

## Preface

### What is Cryptography?
- From ancient ciphers to modern digital security.

- Core goals: Confidentiality, Integrity, Authentication, Non-repudiation.

- Applications in secure communication, e-commerce, digital currencies, and privacy.

## Introductory Chapters

- Chapter 1: Introduction to Cryptography

The language of cryptography: plaintext, ciphertext, ciphers, keys.

Kerckhoffs's Principle.

The adversarial model: threat models and security goals.

Chapter 2: Historical Ciphers & Cryptanalysis

Substitution ciphers (Caesar, Monoalphabetic).

Transposition ciphers.

The Enigma machine and its flaws.

Lessons from historical cryptanalysis.

Chapter 3: Foundations of Modern Cryptography

The role of computational complexity (P vs NP).

One-way functions and trapdoor one-way functions.

The principles of provable security.

Part I – Symmetric-Key Cryptography
Chapter 4: Stream Ciphers

Concept: combining a keystream with plaintext (e.g., XOR).

Linear Feedback Shift Registers (LFSRs) and their weaknesses.

Modern stream ciphers (e.g., ChaCha20).

Chapter 5: Block Ciphers & The Feistel Network

Concept of encrypting fixed-length blocks.

The Feistel network structure (confusion and diffusion).

The Data Encryption Standard (DES) as a case study.

Chapter 6: The Advanced Encryption Standard (AES)

AES structure: SubBytes, ShiftRows, MixColumns, AddRoundKey.

Security and implementation considerations.

Chapter 7: Block Cipher Modes of Operation

Electronic Codebook (ECB) and its weaknesses.

Cipher Block Chaining (CBC), Counter Mode (CTR), Galois/Counter Mode (GCM).

Choosing the right mode for confidentiality and authentication.

Part II – Public-Key Cryptography
Chapter 8: The Asymmetric Revolution

The key distribution problem.

The concept of public and private keys.

Diffie-Hellman Key Exchange.

Chapter 9: The RSA Cryptosystem

Mathematical foundation: difficulty of integer factorization.

Key generation, encryption, and decryption.

Practical considerations and padding (e.g., OAEP).

Chapter 10: Elliptic Curve Cryptography (ECC)

Concept: difficulty of the elliptic curve discrete logarithm problem.

Benefits: smaller key sizes for equivalent security compared to RSA.

ECDH and ECDSA.

Chapter 11: Digital Signatures

Concept: providing authenticity and non-repudiation.

RSA-PSS and ECDSA signature schemes.

How digital signatures differ from MACs.

Part III – Cryptographic Primitives & Protocols
Chapter 12: Cryptographic Hash Functions

Properties: pre-image resistance, second pre-image resistance, collision resistance.

Merkle-Damgård construction.

SHA-2 and SHA-3 families.

Chapter 13: Message Authentication Codes (MACs)

Concept: providing integrity and authentication with a shared secret.

HMAC construction.

Authenticated Encryption (AEAD) with modes like GCM.

Chapter 14: Key Exchange & Public Key Infrastructure (PKI)

From Diffie-Hellman to TLS handshake.

The role of Certificates and Certificate Authorities (CAs).

The "chain of trust".

Chapter 15: Random Number Generation

The importance of randomness in cryptography.

Pseudorandom Number Generators (PRNGs) vs. Cryptographically Secure PRNGs (CSPRNGs).

Entropy sources and pitfalls.

Part IV – Advanced Topics & Applications
Chapter 16: Post-Quantum Cryptography

The threat of quantum computers to RSA and ECC.

Lattice-based, code-based, and multivariate cryptography.

NIST standardization process.

Chapter 17: Zero-Knowledge Proofs

The concept: proving knowledge without revealing the knowledge itself.

Interactive and non-interactive proofs (ZK-SNARKs).

Applications in blockchain and authentication.

Chapter 18: Cryptography in Practice

Secure protocol design (lessons from SSL/TLS evolution).

Side-channel attacks (timing, power analysis).

The importance of libraries and audits.

Appendices (For Reference)
Appendix A: Notation & Glossary

Appendix B: Number Theory for Cryptography

Modular arithmetic, groups, rings, fields.

Prime numbers and primality testing.

Appendix C: Mathematical Hard Problems

Integer Factorization, Discrete Log, Elliptic Curve Discrete Log.

Cryptography
Cryptography is the practice and study of techniques for secure communication in the presence of adversarial behavior. More generally, it is about constructing and analyzing protocols that prevent third parties or the public from reading private messages. Various aspects of information security such as data confidentiality, data integrity, authentication, and non-repudiation are central to modern cryptography.

Table of Contents
Introduction

Symmetric-key Cryptography

Public-key Cryptography

Cryptographic Hash Functions

Core Principles

Symmetric-key Cryptography
Symmetric-key cryptography refers to encryption methods in which both the sender and receiver share the same key. This key is used for both encryption and decryption. The primary challenge is the secure distribution and management of the shared key.

Block Ciphers
A block cipher is an encryption method that applies a deterministic algorithm and a symmetric key to encrypt a fixed-length group of bits (a block). Prominent examples include:

AES (Advanced Encryption Standard): The modern standard, using a substitution-permutation network. It operates on 128-bit blocks with key sizes of 128, 192, or 256 bits.

DES (Data Encryption Standard): An older standard, now considered insecure due to its short 56-bit key length, which uses a Feistel network structure.

Stream Ciphers
A stream cipher encrypts the plaintext one bit (or one byte) at a time, by combining it with a pseudorandom keystream. This is typically done using an XOR operation.

$C_i = P_i \oplus K_i$

Where:

$P_i$ is the $i$-th bit of the plaintext.

$K_i$ is the $i$-th bit of the keystream.

$C_i$ is the $i$-th bit of the ciphertext.

Public-key Cryptography
Public-key cryptography, or asymmetric cryptography, uses pairs of keys: public keys, which may be disseminated widely, and private keys, which are known only to the owner. The generation of these keys depends on cryptographic algorithms based on mathematical one-way functions.

RSA (Rivest–Shamir–Adleman)
RSA is one of the first practicable public-key cryptosystems and is widely used for secure data transmission. Its security relies on the practical difficulty of factoring the product of two large prime numbers.

Key Generation:

Choose two distinct large prime numbers, $p$ and $q$.

Compute $n = p \times q$. ($n$ is used as the modulus for both public and private keys).

Compute Carmichael's totient function: $\lambda(n) = \text{lcm}(p-1, q-1)$.

Choose an integer $e$ such that $1 < e < \lambda(n)$ and $\gcd(e, \lambda(n)) = 1$; ($e$ is the public key exponent).

Determine $d$ as $d \equiv e^{-1} \pmod{\lambda(n)}$; ($d$ is the private key exponent).

The public key is $(n, e)$ and the private key is $(n, d)$.

Encryption: $c \equiv m^e \pmod{n}$
Decryption: $m \equiv c^d \pmod{n}$

Cryptographic Hash Functions
A cryptographic hash function is a mathematical algorithm that maps data of arbitrary size to a bit string of a fixed size (a hash or digest). It is designed to be a one-way function, meaning it is infeasible to invert.

Required Properties
Pre-image Resistance: Given a hash value $h$, it should be computationally infeasible to find any input $m$ such that $hash(m) = h$.

Second Pre-image Resistance: Given an input $m_1$, it should be computationally infeasible to find a different input $m_2$ such that $hash(m_1) = hash(m_2)$.

Collision Resistance: It should be computationally infeasible to find two different inputs $m_1$ and $m_2$ such that $hash(m_1) = hash(m_2)$.

Common Hash Functions
SHA-2 Family (e.g., SHA-256): A widely used standard.

SHA-3: The latest member of the Secure Hash Algorithm family.

MD5, SHA-1: Historically significant but now considered cryptographically broken and unsuitable for further use.

Core Principles
Kerckhoffs's Principle: A cryptosystem should be secure even if everything about the system, except the key, is public knowledge. Security should rely solely on the secrecy of the key.

Confidentiality: Ensuring that information is accessible only to those authorized to have access.

Data Integrity: Assuring that information is not altered in an unauthorized manner.

Authentication: The process of verifying the identity of a user, process, or device.

Non-repudiation: A service that provides proof of the origin and integrity of data, preventing an entity from denying having sent a message or performed an action.