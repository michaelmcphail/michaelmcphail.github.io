---
layout: project
title: "Mathematical Modelling of Cereal Extrusion"
date: 2016-10-01 -- 2019-10-01
description: "My PhD project working with Nestl&eacute; to model Multi-phase mixtures"
technologies: [Industrial Modelling, Fluid Mechanics, Asymptotic Methods, Simulation, MATLAB, Python]
# external_link: "https://example-dashboard.herokuapp.com"
---
## Supervisors
[Prof. James Oliver](https://www.maths.ox.ac.uk/people/james.oliver), [Prof. Ian Griffiths](https://www.maths.ox.ac.uk/people/ian.griffiths), & Dr Ritchie Parker (Nestl&eacute;)

## Project Overview

For my DPhil thesis, we partnered with Nestl&eacute; to better understand a manufacturing process known as <b>extrusion</b>. This process involves forcing a mixture containing a volatile component through a small die. This results in a significant pressure drop in the mixture, and subsequent vapourisation of the volatile component. The resulting flow contains two phases, and expands rapidly upon meeting the atmosphere outside the die. This exsolution and expansion stage of extrusion is known as <b> the flash</b>, and, due to the plethora of interesting modelling and mathematical challenges it presents, is the part of extrusion we are particularly interested in.

The equations governing the behaviour of the mixture being extruded are complicated. We are also faced with tricky boundary conditions including: a free boundary, and a change from no-slip conditions to those of a free-boundary. We tackle these challenges by refining the questions we ask of the system. In doing so, we instead look for particular features of the solutions, and we are able to reduce the complexity of the system. For example, we are interested in how the <b>shape</b> of the product evolves after meeting the atmosphere, and how the <b>texture</b> of the product depends on the extruder setup. 

If we are only interested in understanding the <b>shape</b> the product takes, we can make a number of sensible assumptions, and consider a reduced set of equations that capture this evolution. This reduced system couples a two-dimensional (2D) model for cross-sectional change (see fig. 1) to a one-dimensional (1D) model for axial-variation. The result is a three-dimensional (3D) surface illustrating the evolution of the product's shape (see fig. 2).

We can better understand the <b>texture</b> of the product, for which the final volume-fraction of gas is used as a proxy, by considering special (simple) die geometries. For example, for an axisymmetric system we can apply a coordinate transformation that maps our free-boundary problem to a fixed, rectangular domain. Eliminating the free-boundary component of the problem, in exchange for increasing the complexity of the governing equations, eliminates many of the computational challenges associated with this problem. As a result we are able to predict variations in gas volume-fraction throughout the product (see fig. 3).

## Further reading
- My DPhil thesis, titled *Mathematical modelling of cereal extrusion*, can be found [HERE](https://ora.ox.ac.uk/objects/uuid:1e95234a-b739-4d2b-8a5e-5bc77d981554).
- A paper on Chapter 4 can be found [HERE](https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/extensional-flow-of-a-compressible-viscous-fluid/EC3A0F98CF5B13FC3014AE739D2E0F7A).


## Technical Details

- **MATLAB** for simulation (1D model)
- **Python** for simulation using finite-element method
- **Asymptotic methods** for analytic analysis

<img src="/assets/images/profile/Profile_image.jpg" style="max-width: 300px; height: auto;">

**Fig.1** *The evolution of a cross-section of an extruded product with respect to a reduced-time variable &tau;. This 2D model is coupled to a 1D model of axial evolution. Through this coupling, the map from &tau; to axial distance is determined.*

<img src="/assets/images/profile/Profile_image.jpg" style="max-width: 300px; height: auto;">

**Fig.2** *A 3D illustration of the evolution of an extruded mixture. The transition from red to blue colouring indicates the drop in temperature as the product expands.*

<img src="/assets/images/profile/Profile_image.jpg" style="max-width: 300px; height: auto;">

**Fig.3** *The predicted density field of an extruded mixture. Greener colours indicate higher density, and purple colours indicate lower density.*