---
layout: project
title: "Malaria in Vietnam"
date: 2024-10-01 -- 2025-03-01
description: "Mapping malaria in near-elimination settings"
technologies: [Malaria, Networks, Geospatial modelling, Real-world data,Simulation, Python, R]
# external_link: "https://example-dashboard.herokuapp.com"
---

## Project Overview

Vietnam, along with the other Greater Mekong Subregion countries, is aiming to eliminate all human malaria by 2030. They have made remarkable progress, with annual cases decreasing from over one million thirty years ago to around one thousand now. Near elimination settings are very different from high-burden locations: interventions must be more targeted to be cost efficacious and less case data presents challenges for data analytics.

Both of these issues were of concern in this project. Our aim was to provide stragegically useful information to the National Institute of Malaria Prevention and Elimination in Vietnam. This meant developing a modelling framework that could output metrics from the limited available data that were appropriate for the relevant interventions. To do this we used a range of statistical models&mdash;including network models, point-process models, and environment-driven geospatial models&mdash;to extract as much information as possible from the available data, and produce high-resolution maps. The key metrics we mapped were case-importation rate, malaria receptivity (quantified by the effective reproduction number), and malariogenic potential (a measure of the expected number of malaria cases at a location).

As a consequence of this quite sophisticated modelling pipeline, we were able to compute a range of additional quantities: probabalistic transmission chains, expected outbreak size, and oversampling rate. This last quantity, the oversampling rate, was an understated innovation in this work in which we used the various outputs along the modelling pipeline to adjust for data bias. This data bias, which is the result of heterogeneous importation rates and receptivities, is mainly of concern in near elimination settings; however, the underlying cause is present across all endemic regimes (not just for malaria).

## Further Reading
- A paper we published on this work can be found [HERE](https://www.thelancet.com/journals/lanwpc/article/PIIS2666-6065(25)00082-3/fulltext)

## Technical Details

- **TensorFlow** for fitting network parameters
- **Python** for network analysis
- **R** for geospatial modelling and mapping


<img src="/assets/images/profile/Profile_image.jpg" style="max-width: 300px; height: auto;">

**Fig.1** *A schematic of the network model that uses case data, augmented to include spatiotemporal seperation between cases, to infer a case-based reproduction number; thus, assigning additional information to each case. This model forms the foundation of subsequent spatial analysis and data-bias correction.*

<img src="/assets/images/profile/Profile_image.jpg" style="max-width: 300px; height: auto;">

**Fig.2** *Three strategically useful metrics quantifying different dimensions of risk: receptivity, which describes the risk of local transmission; vulnerability, which describes the risk due to importation; and malariogenic potential, which describes the confluence of both quantities.*

<img src="/assets/images/profile/Profile_image.jpg" style="max-width: 300px; height: auto;">

**Fig.3** *We were able to identify localised pockets where expected receptivity seasonally exceeds one; posing risks of outbreaks and progress reversal.*
