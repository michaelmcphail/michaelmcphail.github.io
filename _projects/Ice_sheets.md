---
layout: project
title: "Ice-sheet modelling"
date: 2019-10-01 -- 2020-10-01
description: "Modelling meltwater--ice-sheet interactions"
technologies: [Mathematical Geoscience, Fluid Mechanics, Asymptotic Methods, Simulation, MATLAB, C++]
# external_link: "https://example-dashboard.herokuapp.com"
---
## Supervisor
[Prof. Ian Hewitt](http://people.maths.ox.ac.uk/hewitt/)

## Project Overview

As a Postdoctoral Research Associate working with Prof Ian Hewitt, we studied the interaction between meltwater and ice-sheet motion in Greenland. This interaction may become increasingly important over the coming decades as changing temperatures promote melting on the surface of ice sheets, particularly in regions that haven't been known experience significant melting. This meltwater can permeate the ice sheet, reaching the base of the sheet and changing the basal friction experienced by the ice sheet. We are interested in the structure of the drainage system that forms, and the impact of this subglacial hydrology on the evolution of the ice sheet.

Being a ``real-world'' problem, the necessary physics and problem domain are complex. We predominately used numerical methods to study this problem. One objective of our work was to integrate a subglacial flow model into an existing software package for simulating ice-sheet dynamics called BISICLES. Some sample results (an output from an example problem included in BISICLES) for the Pine Island glacier are shown in figures 1 and 2.

We complemented this work by considering simple cases where significantly reduced models, even one-dimensional (1D) models, can be used. Using a 1D model, say for a glacier confined to a channel, allowed us to study the complicated interactions between ice-sheet flow and the subglacial hydrology in a much simpler framework.


## Technical Details

- **MATLAB** for simulation (1D model)
- **C++** for BISICLEs simulation (2D model)
- **Mathematica** for image processing
- **Asymptotic methods** for analytic analysis

<img src="/assets/images/profile/Profile_image.jpg" style="max-width: 300px; height: auto;">

**Fig.1** *The height of the surface of the Pine Island glacier. This is the output of an example problem included as part of BISICLES. I produced the image using Mathematica.*

<img src="/assets/images/profile/Profile_image.jpg" style="max-width: 300px; height: auto;">

**Fig.2** *The surface velocity of the Pine Island glacier. This is the output of an example problem included as part of BISICLES. I produced the image using Mathematica.*
