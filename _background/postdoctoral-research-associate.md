---
layout: background
title: "Postdoctoral Research Associate"
company: "The University of Oxford"
start_date: 2019-12-02
end_date: 2022-08-15 
location: "Oxford"
excerpt: "Combined analytic and numerical methods to analyse and simulate ice-sheet dynamics."
---

## Role Overview
For my Postdoc at the Mathematical Institute at the University of Oxford, I worked with Prof. Ian Hewitt on a mathematical geoscience project. The goal of the work was to better understand the interaction between an ice-sheet and the subglacial drainage system. The subglacial drainage system fluctuates seasonally, and in doing so imparts a rapidly fluctuating effective basal friction on the ice sheet. This two-way, nonlinear interaction between sheet and subglacial hydrology leads to interesting dynamic behaviour, but poses a challenging simulation problem. A particular challenge is the existence of vastly different time-scales (months vs millenia) and spatial scales (metres vs kilometers).

## Key projects
### Analytical simplifications
A key technique in a mathematical modellers toolbox is to **systematically** reduce the governing equations---in this case consisting of a system of nonlinear partial differential equations---into more a more tractable form. For the ice-sheet--subglacial-drainage system we considered a thin glacier confined in a channel, a realistic and important scenario as many ice-sheet outlets take such a form. Exploiting these assumptions allower for considerable simplifications to the governing equations. The resultant system was relatively straightforward to solve numerically in Matlab, providing an invaluable toy model by which we could study the properties of the governing equations and have a baseline to sanity check full numerical solutions.

### Numerical solutions
A key aspect of this work was to contribute the subglacial drainage model to the numerical ice-sheet model BISICLES. This is a C++/Fortran project that uses adaptive mesh reduction and the finite-difference method to efficiently simulate ice-sheet dynamics. After developing the appropriate model, integrating it into BISICLES, we were able to test the subsequent numerical predictions against those of the reduced, toy model under test conditions (i.e., for a glacier confined to a channel).