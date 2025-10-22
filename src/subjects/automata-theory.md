---
title: Automata Theory
layout: subject-layout.njk
tags: subject
permalink: /subjects/automata-theory/
---

# Automata Theory

Automata theory is the study of abstract machines and automata, as well as the computational problems that can be solved using them. It is a theory in theoretical computer science, under the discrete mathematics branch (a section of mathematics and also of computer science).

## Table of Contents

*   [Introduction](#automata-theory)
*   [Finite Automata](#finite-automata)
*   [Pushdown Automata](#pushdown-automata)
*   [Turing Machines](#turing-machines)

## Finite Automata

A finite automaton (FA) or finite-state machine (FSM) is a mathematical model of computation. It is an abstract machine that can be in exactly one of a finite number of states at any given time. The FA can change from one state to another in response to some external inputs; the change from one state to another is called a transition. An FA is defined by a list of its states, its initial state, and the conditions for each transition.

### Deterministic Finite Automata (DFA)

A deterministic finite automaton (DFA) is a finite automaton where for each pair of state and input symbol there is one and only one transition to a next state.

### Nondeterministic Finite Automata (NFA)

A nondeterministic finite automaton (NFA) is a finite automaton where for each pair of state and input symbol there may be several possible next states.

## Pushdown Automata

A pushdown automaton is a type of automaton that employs a stack. The term "pushdown" refers to the fact that the stack can be pushed down, like a stack of plates in a cafeteria, to store information. A pushdown automaton is more powerful than a finite automaton but less powerful than a Turing machine.

## Turing Machines

A Turing machine is a mathematical model of computation that defines an abstract machine which manipulates symbols on a strip of tape according to a table of rules. Despite the model's simplicity, given any computer algorithm, a Turing machine capable of simulating that algorithm's logic can be constructed.