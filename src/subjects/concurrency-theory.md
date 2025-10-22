---
title: Concurrency Theory
layout: subject-layout.njk
tags: subject
permalink: /subjects/concurrency-theory/
---

# Concurrency Theory

In computer science, concurrency is the ability of different parts or units of a program, algorithm, or problem to be executed out-of-order or in partial order, without affecting the final outcome. This allows for parallel execution of the concurrent units, which can significantly improve overall speed of the execution in multi-processor and multi-core systems.

## Table of Contents

*   [Introduction](#concurrency-theory)
*   [Process Calculus](#process-calculus)
*   [Petri Nets](#petri-nets)
*   [Actor Model](#actor-model)

## Process Calculus

A process calculus is a formal language for describing and analyzing concurrent systems. It provides a way to model the interactions between processes, and to reason about the properties of concurrent systems. Some examples of process calculi include the Calculus of Communicating Systems (CCS), Communicating Sequential Processes (CSP), and the pi-calculus.

## Petri Nets

A Petri net is a mathematical modeling language for the description of distributed systems. A Petri net is a directed bipartite graph, in which the nodes represent transitions (i.e. events that may occur, signified by bars) and places (i.e. conditions, signified by circles). The directed arcs describe which places are pre- and/or postconditions for which transitions.

## Actor Model

The actor model is a mathematical model of concurrent computation that treats "actors" as the universal primitives of concurrent computation. In response to a message that it receives, an actor can: make local decisions, create more actors, send more messages, and determine how to respond to the next message received. Actors may modify their own private state, but can only affect each other through messages (avoiding the need for any locks).