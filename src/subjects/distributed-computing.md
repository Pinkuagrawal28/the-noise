---
title: Distributed Computing
layout: subject-layout.njk
tags: subject
permalink: /subjects/distributed-computing/
---

# Distributed Computing

A distributed system is a system whose components are located on different networked computers, which communicate and coordinate their actions by passing messages to one another. The components interact with one another in order to achieve a common goal. Three significant characteristics of distributed systems are: concurrency of components, lack of a global clock, and independent failure of components.

## Table of Contents

*   [Introduction](#distributed-computing)
*   [CAP Theorem](#cap-theorem)
*   [Paxos](#paxos)
*   [MapReduce](#mapreduce)

## CAP Theorem

The CAP theorem, also named Brewer's theorem after computer scientist Eric Brewer, states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees:

*   **Consistency:** Every read receives the most recent write or an error.
*   **Availability:** Every request receives a (non-error) response, without the guarantee that it contains the most recent write.
*   **Partition tolerance:** The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.

## Paxos

Paxos is a family of protocols for solving consensus in a network of unreliable processors. Consensus is the process of agreeing on one result among a group of participants. This problem becomes difficult when the participants or their communication medium may experience failures.

## MapReduce

MapReduce is a programming model and an associated implementation for processing and generating large data sets with a parallel, distributed algorithm on a cluster. A MapReduce program is composed of a Map() procedure that performs filtering and sorting, and a Reduce() procedure that performs a summary operation.