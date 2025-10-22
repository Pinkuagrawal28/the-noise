---
title: Chapter 3 - More about Inference
layout: subject-layout.njk
---

# Chapter 3 - More about Inference
This chapter expands on Bayesian inference with more examples, emphasizing model comparison and the principle of Occam's razor.

## Key Concepts:
-   **Inference as Inverse Probability:** An inference problem, like estimating a particle's decay constant λ from observed decay locations {x_n}, is solved by applying Bayes' theorem to find the posterior probability of the parameter, P(λ|{x_n}). This posterior distribution is the complete solution, eliminating the need for ad-hoc "estimators".
-   **The Role of Assumptions (Priors):** Inference is always conditional on assumptions, which are made explicit in the Bayesian framework (e.g., the prior P(λ)). This is a strength because assumptions can be criticized, modified, and their impact on conclusions can be quantified.
-   **Model Comparison:** When comparing different models (hypotheses), Bayes' theorem provides a principled way to rank them based on the data. The posterior probability ratio of two models, H1 and H0, is: P(H1|D) / P(H0|D) = [P(H1)/P(H0)] * [P(D|H1)/P(D|H0)].
    -   P(D|H) is the evidence for model H. It is the normalizing constant from the parameter inference step (i.e., ∫ P(D|θ,H)P(θ|H) dθ).
-   **Bayesian Occam's Razor:** Bayesian inference automatically embodies Occam's razor.
    -   A simple model makes specific predictions and concentrates its predictive probability P(D|H) over a small range of data D.
    -   A complex model with more parameters is more flexible and can predict a wider variety of data, so it must spread its predictive probability more thinly.
    -   If the data are compatible with both models, the simpler model will have a higher evidence P(D|H), and will be preferred. This penalty on complexity is automatic and does not require a subjective prior dislike for complex models.
    -   This is illustrated with an example of predicting the next number in a sequence (-1, 3, 7, 11), where an arithmetic progression model (Ha) is found to be millions of times more probable than a more complex cubic model (Hc) that also fits the data.
-   **Legal Evidence Example:** An example of inferring a suspect's presence at a crime scene based on blood type frequencies shows that "matching" data does not necessarily constitute evidence in favor of a hypothesis. The evidence depends on the likelihood ratio: P(Data|Suspect present) / P(Data|Suspect not present). In the example, the commonness of the suspect's blood type actually provides weak evidence against his presence.
