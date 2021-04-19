---
title: Overview
---

## FCX - Field Campaign Explorer

The NASA Global Hydrology Resource Center (GHRC) Distributed Active Archive Center (DAAC) is a joint effort between NASA and the University of Alabama in Huntsville (UAH). GHRC DACC carries the mission to archive NASA Earth Science observations and enable their free access to end-users with extensive auxiliary documentation for published datasets. GHRC DAAC continues to seek new ways and collaboration with other NASA DAACs to provide data services for the end users.


The Field Campaign eXplorer (FCX) is developed at the GHRC to address data exploration needs in portraying the interactive nature of multiple datasets that are obtained in a concerted field campaign, particularly observations from aircraft. Instruments deployed on the campaign aircraft are usually of the highest accuracy and resolution or at the cutting edge of the scientific surveillance technique.  They ride the aircraft to weave through target events to provide in-situ or near-in-situ observations in concert with the ground-based and satellite measurements. Many of these airborne observations provide instantaneous profiles of the atmospheric parameters that are key to reconstructing the event scenario.  Some of the aircraft measurements are stipulated for pre- or post-launch validation of innovative instruments on a new satellite payload. FCX seamlessly integrates these vector, point, 2-dimensional, and 3-dimensional datasets from the concerted observations to provide a time-dynamic three-dimensional visualization with user-controlled display, in turn, to achieve the goal of exploring observed events tied to the field campaign’s objectives or research interest to facilitate research for the end users.


The FCX has been built to explore the diverse multi-stream coincident datasets through several field campaigns whose data are managed and archived at GHRC. The FCX also utilizes the framework developed at the GHRC that exploits cloud-native technologies to ingest, catalogue, archive NASA Earth Science multi-instrument datasets in alignment with the NASA Earth Science Data Systems program goal of migrating to the cloud to support large missions. The GHRC framework uses many serverless technologies from the Amazon Web Services (AWS) platform to make the datasets sharable and keep the cost of the cloud-based services manageable.


Ultimately, FCX is a web-based, cloud-native and open-source system that visualizes multiple datasets in time-dynamic 3-dimensional display with supplemental data analysis.   While the web-based feature delivers visualization without requirement of a graphical software and being cloud-native allows for sharing of the data and visualization, the open-source nature lets users of FCX develop their own extensions for both visualizations and analyses. These three aspects of the FCX and their implementation are deliberated in Chapter 4 of this documentation. The components of the explorer and the visualization designs are described in Chapter 2. Use cases are given to show end users how to use the explorer to examine datasets of interest and how to navigate the explorer functions in Chapter 3. A side note: in this documentation, “parameters” and “physical variables” are used interchangeably.

## GOES-R PLT

The GOES-R, now GOES-16, is the R-series of the latest generation of Geostationary Operational Environmental Satellites (GOES) collaboratively developed, launched, and operated by the National Oceanic and Atmospheric Administration (NOAA) and NASA. The Post Launch Test (PLT) field campaign took place in spring 2017, carrying out the mission to test and validate the instruments onboard the GOES-R after its launch in November 2016 and before it was moved to operational GOES-East position to replace GOES-13 in December 2017. The instruments being tested include the Advanced Baseline Imager (ABI) and the Geostationary Lightning Mapper (GLM) that would be the world’s first operational lightning mapper in geostationary orbit (~36,000km above ground). The GOES-R ABI has been expanded to 16 bands (from 6) with finer spectral and spatial resolution (4x) and faster scanning (5x) than the previous GOES for imaging Earth’s weather, oceans and environment. Validation of the ABI took place in the West CONUS and mostly in the early days of the field campaign, whereas validation for the GLM took place in the Great Plains, SE Coast states and over the oceans during later part of the campaign, well into the mid-late 2017 spring.


The FCX exploration for the GOES-R PLT focuses on the assessment of GLM performance and the thunderstorm events that were associated with the lightning activities observed by the organized efforts of ground networks, aircraft, and satellites measurements during this springtime field campaign.


Ten parameters retrieved from eight instrumental measurements for the GOES-R PLT are visualized by the FCX (Table 1). The brightness temperature (TB) imagery from the ABI IR channel 13 serves as the narrator of the frontal storms’ evolution and outlines the cloud extent with the highlighted areas of low TB indicating the convection cores. Layers of lightning observations, as well as cloud properties from the cloud radar (CRS) and lidar (CPL), are displayed on top of the BT imagery, construing the picture of various characteristics of a thunderstorm in its lifecycle. In addition to GLM, three other instruments (LIS aboard the low-earth orbit ISS @ 408 km altitude, FEGS on the NASA ER-2 aircraft, and LMA) were detecting lightning signals (optical energy or RF radiation) and one instrument (LIP, also on ER-2) was detecting the ambient atmospheric electricity variation. They were designed for the cross-examination of GLM detection efficiency.


*Table 1. Parameters visualized in FCX for the GOES-R PLT*


<table>
<tbody>
<tr>
  <th>Types</th>
  <th>Instrument</th>
  <th>Measurement</th>
  <th>Displayed Parameter</th>
</tr>
</tbody>

<tbody>
<tr>
  <td rowSpan="4">Satellite</td>
  <td>ABI (GOES-R Advanced Baseline Imager) IR band</td>
  <td>Reflectance</td>
  <td>Channel 13 T_B</td>
</tr>
</tbody>

<tbody>
<tr>
  <td>ABI (GOES-R Advanced Baseline Imager) IR band</td>
  <td>Reflectance</td>
  <td>Intensity (energy)</td>
</tr>
</tbody>

<tbody>
<tr>
  <td rowSpan = "2">ISS-LIS (Lightning Imaging Sensor)</td>
  <td rowSpan = "2">Optical energy density</td>
  <td>Intensity (energy)</td>
</tr>
</tbody>

<tbody>
<tr>
  <td>Intensity (radiance)</td>
</tr>
</tbody>

<tbody>
<tr>
  <td>Ground network</td>
  <td>LMA (Lightning Mapping Array)</td>
  <td>60 MHz RF radiation</td>
  <td>Lightning source</td>
</tr>
</tbody>

<tbody>
<tr>
  <td rowSpan="5">Satellite</td>
  <td rowSpan="2">CRS (Cloud Radar System, w-band)</td>
  <td>Reflectivity</td>
  <td>Reflectivity</td>
</tr>
</tbody>

<tbody>
<tr>
  <td>Doppler Velocity</td>
  <td>Doppler Velocity</td>
</tr>
</tbody>

<tbody>
<tr>
  <td>CPL (Cloud Physics Lidar)</td>
  <td>Attenuated total backscattering</td>
  <td>Attenuated total backscattering</td>
</tr>
</tbody>

<tbody>
<tr>
  <td>FEGS (Fly’s Eye GLM Simulator)</td>
  <td>Optical energy</td>
  <td>Detected lightning FOV</td>
</tr>
</tbody>

<tbody>
<tr>
  <td>LIP (Lightning Instrument Package)</td>
  <td>Electric field</td>
  <td>Electric vector</td>
</tr>
</tbody>

</table>