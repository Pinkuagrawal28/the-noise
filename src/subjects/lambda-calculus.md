---
title: Lambda Calculus
layout: subject-layout.njk
tags: subject
permalink: /subjects/lambda-calculus/
---

# Lambda Calculus

Lambda calculus (also written as λ-calculus) is a formal system in mathematical logic for expressing computation based on function abstraction and application using variable binding and substitution. It is a universal model of computation that can be used to simulate any Turing machine. It was introduced by the mathematician Alonzo Church in the 1930s as part of his research into the foundations of mathematics.

## Table of Contents

*   [Introduction](#lambda-calculus)
*   [Lambda Abstraction](#lambda-abstraction)
*   [Beta Reduction](#beta-reduction)
*   [Church Numerals](#church-numerals)

## Lambda Abstraction

Lambda abstraction is a way of defining anonymous functions. A lambda abstraction consists of a lambda symbol (λ), a list of bound variables, a dot, and a body. For example, the function $f(x) = x + 1$ can be written as the lambda abstraction $\lambda x. x + 1$.

## Beta Reduction

Beta reduction is the process of applying a lambda abstraction to an argument. When a lambda abstraction is applied to an argument, the bound variables in the body of the abstraction are replaced with the argument. For example, applying the lambda abstraction $(\lambda x. x + 1)$ to the argument 2 results in the expression $2 + 1$, which evaluates to 3.

## Church Numerals

Church numerals are a way of representing natural numbers in lambda calculus. The Church numeral for a number n is a higher-order function that takes a function f and a value x, and applies f to x n times. For example, the Church numeral for 2 is $\lambda f. \lambda x. f (f x)$.