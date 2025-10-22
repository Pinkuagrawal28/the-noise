---
title: Graph Theory
layout: subject-layout.njk
tags: subject
permalink: /subjects/graph-theory/
---

# Graph Theory

In mathematics, graph theory is the study of graphs, which are mathematical structures used to model pairwise relations between objects. A graph in this context is made up of vertices (also called nodes or points) which are connected by edges (also called links or lines). A distinction is made between undirected graphs, where edges link two vertices symmetrically, and directed graphs, where edges link two vertices asymmetrically.

## Table of Contents

*   [Introduction](#graph-theory)
*   [Types of Graphs](#types-of-graphs)
*   [Graph Traversal](#graph-traversal)
*   [Spanning Trees](#spanning-trees)

## Types of Graphs

### Undirected Graphs

An undirected graph is a graph in which edges have no orientation. The edge (u, v) is identical to the edge (v, u).

### Directed Graphs

A directed graph or digraph is a graph in which edges have orientations. For example, an edge from u to v is not the same as an edge from v to u.

### Weighted Graphs

A weighted graph is a graph in which each edge has a numerical weight. The weight of an edge can represent distance, cost, or capacity.

## Graph Traversal

Graph traversal is the process of visiting each vertex in a graph. Traversal algorithms can be used to find paths, cycles, and connected components in a graph.

### Breadth-First Search (BFS)

Breadth-first search is a graph traversal algorithm that starts at the root node and explores all the neighboring nodes at the present depth prior to moving on to the nodes at the next depth level.

### Depth-First Search (DFS)

Depth-first search is a graph traversal algorithm that starts at the root node and explores as far as possible along each branch before backtracking.

## Spanning Trees

A spanning tree of a connected, undirected graph is a subgraph that is a tree and connects all the vertices together. A single graph can have many different spanning trees. A minimum spanning tree (MST) or minimum weight spanning tree for a weighted, connected, undirected graph is a spanning tree with a weight less than or equal to the weight of every other spanning tree.