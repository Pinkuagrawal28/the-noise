---
title: Quantum Computing
layout: subject-layout.njk
tags: subject
permalink: /subjects/quantum-computing/
---

# Introduction to Classical and Quantum Computing

This textbook is designed for newcomers interested in quantum computing as a potential career. The only prerequisite is trigonometry; no advanced math or programming experience is expected. The book aims to equip readers with the necessary math and programming skills for more advanced topics, rather than being just a conceptual overview.

## Book Outline

The book is structured into eight chapters that transition from the fundamentals of classical computing to the core concepts and applications of quantum computing.

*   **Chapter 1:** Classical Information and Computation
*   **Chapter 2:** One Quantum Bit
*   **Chapter 3:** Linear Algebra
*   **Chapter 4:** Multiple Quantum Bits
*   **Chapter 5:** Quantum Programming
*   **Chapter 6:** Entanglement and Quantum Protocols
*   **Chapter 7:** Quantum Algorithms
*   **Chapter 8:** Next Steps

---

## Chapter Notes

### Chapter 1: Classical Information and Computation

This chapter covers the basics of classical computing, selecting topics that have quantum analogues discussed in later chapters. It serves as a foundation, making it easier to understand the design decisions and concepts in quantum computing.

*   **Bits**: The chapter begins by defining the **bit** as the fundamental unit of classical information, representing the two states of a physical system like a coin (heads/tails) or a switch (on/off). It covers information encoding using binary numbers and standards like ASCII.
*   **Logic Gates**: It introduces **logic gates** (e.g., NOT, AND, OR, XOR, NAND, NOR) as the tools for manipulating bits. The text explains how these gates are physically realized using electrical circuits with switches like transistors and how they can be combined to perform complex operations. The concept of a **universal gate set**, such as {NAND}, is also introduced.
*   **Adders and Verilog**: As a practical application, the chapter details the construction of circuits that add binary numbers, such as the **half adder**, **full adder**, and **ripple-carry adder**. It also introduces **Verilog**, a hardware description language used to code these digital logic circuits.
*   **Boolean Algebra and Reversible Gates**: The text explains **Boolean algebra** as the mathematical framework for simplifying complex logic circuits. It then distinguishes between irreversible gates, where information is lost, and **reversible gates**, where inputs can always be determined from the outputs. The **Toffoli gate** is presented as a universal, reversible AND gate.
*   **Error Correction and Complexity**: The chapter discusses how physical errors like bit flips can be managed using **error-correcting codes**, such as the repetition code. It introduces **computational complexity** to classify problems as "easy" (solvable in polynomial time, class **P**) or "hard".
*   **Turing Machines**: Finally, it describes the **Turing machine** as a mathematical model of computation and explains the **Church-Turing Thesis**, which posits that anything computable can be computed by a Turing machine. The potential for quantum computers to violate the **Strong Church-Turing Thesis** by solving some problems significantly faster than classical computers is highlighted.

### Chapter 2: One Quantum Bit

This chapter introduces the fundamental unit of quantum information, the qubit, by drawing parallels to the classical bit.

*   **Qubits and Superposition**: A **qubit** can be in the state |0⟩ or |1⟩, but unlike a classical bit, it can also exist in a linear combination of both, a state known as **superposition**. These states are visualized as points on a sphere of radius 1 called the **Bloch sphere**. The chapter also includes a review of complex numbers, which are essential for describing qubit states.
*   **Measurement**: When a qubit in superposition is measured, its state **collapses** to either |0⟩ or |1⟩. The probability of each outcome is determined by the **norm-square of the amplitude** (coefficient) of that state. Measurement can be performed in different bases, such as the Z-basis ({|0⟩, |1⟩}), X-basis ({|+⟩, |−⟩}), or Y-basis ({|i⟩, |−i⟩}).
*   **Quantum Gates**: **Quantum gates** are operations that act on qubits and are represented as linear maps that preserve the total probability of the state. Common one-qubit gates like the **Hadamard (H)**, **Pauli (X, Y, Z)**, **Phase (S)**, and **T** gates are introduced as rotations on the Bloch sphere.
*   **Physical Qubits and Circuits**: The text lists various physical systems used to realize qubits, including photons, trapped ions, and superconducting circuits. It also introduces quantum circuit diagrams and the web-based circuit simulator **Quirk**.

### Chapter 3: Linear Algebra

This chapter presents linear algebra as the essential mathematical language for quantum computing.

*   **Vectors and States**: Quantum states (qubits) are represented by column vectors called **kets** (e.g., |ψ⟩), and their conjugate transposes are row vectors called **bras** (e.g., ⟨ψ|).
*   **Inner and Outer Products**: The **inner product** (⟨ψ|φ⟩) of two states is a scalar that gives the projection of one state onto another, which is used to calculate measurement probabilities. The **outer product** (|ψ⟩⟨φ|) results in a matrix.
*   **Matrices and Gates**: Quantum gates are represented by **unitary matrices**, which are matrices that always preserve the total probability. A key property is that they are always **reversible**, and a gate's inverse is its conjugate transpose (U⁻¹ = U†).
*   **Orthonormality and Completeness**: A set of basis states is **orthonormal** if each state is normalized and orthogonal (inner product is zero) to every other state in the set. Such a basis satisfies the **completeness relation**, meaning any state can be expressed in terms of the basis vectors.

### Chapter 4: Multiple Quantum Bits

Building on the previous chapters, this section explores systems of multiple qubits, introducing key concepts like entanglement and multi-qubit gates.

*   **Multi-Qubit States**: The state of multiple qubits is described by the **tensor product** (or Kronecker product) of individual qubit states. An n-qubit system has 2ⁿ basis states, and a general state is a superposition of all of them.
*   **Entanglement**: The chapter distinguishes between **product states**, which can be factored into individual qubit states, and **entangled states**, which cannot. When qubits are entangled, a measurement on one qubit can instantaneously affect the others.
*   **Multi-Qubit Gates**: To create entanglement, gates that act on multiple qubits are necessary. The chapter covers essential multi-qubit gates, including the **CNOT** (controlled-NOT), **SWAP**, and **Toffoli** (controlled-controlled-NOT) gates. It also covers the **no-cloning theorem**, which states that an unknown quantum state cannot be perfectly copied.
*   **Quantum Adders and Universal Gates**: A quantum ripple-carry adder is constructed to demonstrate computation, showing how a classical circuit can be made reversible and quantum. The chapter defines a **universal quantum gate set** (e.g., {CNOT, H, T}) as a set of gates that can approximate any quantum operation.
*   **Quantum Error Correction**: The chapter explains that qubits are susceptible to errors like bit flips and phase flips through a process called **decoherence**. It presents the **Shor code**, which combines bit-flip and phase-flip correction codes to protect a logical qubit using nine physical qubits.

### Chapter 5: Quantum Programming

This chapter provides a practical guide to programming early-stage, "noisy intermediate-scale quantum" (NISQ) devices, focusing on the tools provided by IBM.

*   **IBM Quantum**: Introduces the **IBM Quantum** platform, which provides cloud access to quantum processors. Users can see the available systems and their qubit topology.
*   **Quantum Composer**: A drag-and-drop interface for building quantum circuits visually. Users can run these circuits on simulators or actual quantum hardware.

*   **OpenQASM**: A quantum assembly language for describing quantum circuits textually. The chapter shows how to define registers and apply gates using this language.
*   **Qiskit**: A Python-based software development kit (SDK) that offers the most powerful way to program IBM's quantum computers. The chapter explains how to use **Qiskit** within the **Quantum Lab** (Jupyter notebooks) to build circuits, run them, and visualize the results.
*   **Other Platforms**: Briefly mentions other quantum programming platforms like Amazon Braket, Google Cirq, and Microsoft Q#.

### Chapter 6: Entanglement and Quantum Protocols

This chapter delves deeper into entanglement and its applications in quantum communication protocols.

*   **EPR Paradox and Bell Inequalities**: Explores the **EPR paradox**, which questioned whether quantum mechanics was a complete theory by highlighting the "spooky action-at-a-distance" of entanglement. It then explains how **Bell's theorem** and the **CHSH inequality** provide an experimental way to test quantum mechanics against local hidden variable theories, with experiments confirming that nature violates these inequalities. This leads to the **no-signaling principle**, which states that entanglement cannot be used for faster-than-light communication.
*   **Monogamy of Entanglement**: This principle states that if two qubits are maximally entangled with each other, neither can be entangled with a third qubit.
*   **Quantum Protocols**:
    *   **Superdense Coding**: A protocol where Alice can send two classical bits of information to Bob by sending only one qubit, provided they share an entangled pair beforehand.
    *   **Quantum Teleportation**: A protocol allowing Alice to "teleport" the unknown state of a qubit to Bob using a shared entangled pair and sending two classical bits of information.
    *   **Quantum Key Distribution (BB84)**: A protocol that allows Alice and Bob to establish a shared secret key with security guaranteed by the laws of quantum mechanics. This is contrasted with classical public-key cryptography like **RSA**.

### Chapter 7: Quantum Algorithms

This chapter introduces quantum algorithms that are demonstrably faster than their best-known classical counterparts.

*   **Query vs. Circuit Complexity**: The chapter differentiates between **circuit complexity** (number of gates) and **query complexity** (number of calls to an "oracle" or black-box function).
*   **Oracular Algorithms**: Several algorithms show a quantum advantage in query complexity:
    *   **Deutsch-Jozsa Algorithm**: Determines if a function is constant or balanced in one query, an exponential speedup over the deterministic classical case.
    *   **Bernstein-Vazirani Algorithm**: Finds a secret n-bit string s from an oracle that computes s·x in a single query, compared to n queries classically.
    *   **Simon's Algorithm**: Finds a secret XOR mask s with O(n) queries, an exponential speedup over the O(2ⁿᐟ²) classical queries needed.
    *   **Grover's Algorithm**: Solves brute-force search problems in O(√N) queries, a quadratic speedup over the classical O(N) queries.
*   **Algorithms with Circuit Complexity Speedups**:
    *   **Quantum Fourier Transform (QFT)**: Provides an exponential speedup over the classical Fast Fourier Transform (FFT), running in O(log² N) time versus O(N log N).
    *   **Phase Estimation**: Uses the QFT to efficiently estimate the eigenvalues (phases) of unitary operators.
    *   **Shor's Algorithm**: Uses the period-finding algorithm (which is built on phase estimation) to **factor large numbers** efficiently. This is significant because the security of **RSA cryptography** relies on the classical difficulty of factoring.

### Chapter 8: Next Steps

The final chapter offers guidance for readers who have completed the book and are interested in pursuing quantum computing further.

*   **Careers**: It outlines career opportunities in the emerging quantum industry, including roles in large tech companies, startups, government labs, and academia. Jobs range from highly technical research roles to non-technical supporting positions.
*   **Further Study**: For continued technical learning, it recommends the advanced textbook *Quantum Computation and Quantum Information* by Nielsen and Chuang. It suggests key topics for further study, like **mixed states** and **density matrices**, and advises on academic majors such as physics, computer science, and engineering. It also encourages students to seek research opportunities.
