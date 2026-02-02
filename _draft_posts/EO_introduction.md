---
layout: post
title: "Earth Observation"
date: 2026-02-02
categories: [Earth Observation, Statistics, Physics]
excerpt: "An overview on my Earth Observation series."
---
## What is the Earth Observation (EO) series?
I want to write about the way we observe the earth using remote or automated technology, and the insights we gain by doing this. A broad range of methods fall under the category of EO; however, I'm primarily going to focus on satellite technology (leaving out airborne, *in situ*, and hybrid systems). In this series I will cover the different physics we exploit to observe the Earth, the key platforms that exist, and any use cases I find interesting. 

## Why write about EO?
I want to consolodate what I already know about EO. I currently use data gathered from remote sources, often modified by additional processing steps (*e.g.* infilling, resampling, transformation...) and intend to continue doing so. Given this, I want to fill in knowledge gaps that probably won't be filled organically. For example, the different types of observation and use cases I'm unaware of. Additionally, even a quick glimpse into the world of EO is enough to see that this is a very deep, multidisciplenary field---multi-physics, geometry, numerical analysis, mathematical modelling, scientific computing---which has more than piqued my interest. 


## Some background
In a general sense, I will categorise the methods of observation into the following three cateogies:
1. **Passive methods**: Detecting reflected solar radiation or emitted infared radiation, but not behaving as a source. 
2. **Active methods**: Emitting a signal and then observing the returning signal. Examples include RADAR, SAR, and LiDAR.
3. **Multi-component systems**: More sophisticated approaches using the relative position or speed of two devices to infer the action of some force, or to infer the dynamics in the interceding space. For example, the Grace satellites use the changes in the distance between a pair of satellites to infer gravitational accelleration; producing gravitational anomoly maps. 

