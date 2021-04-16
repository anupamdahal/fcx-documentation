---
title: Open Source Code
---

<p>
FCX was originally designed to support the Hurricane and Severe Storm field campaign. Since this original iteration, FCX has evolved to fully support three components. First, FCX uses a cloud-native infrastructure. Second, FCX is a data exploration tool. Lastly, FCX is being designed to incorporate supplemental analytic capabilities to support science in the cloud.
</p>

<p>
The FCX can be separated into two major apparatuses: the frontend that includes visualization, menu bar, and data subsetting; and the backend field campaign data ingestion and processing. The frontend takes care of the web-based app and is developed mostly in Javascript (and html and CSS) to use CesiumJS. The backend is encoded mostly in Python. They are in the following pages. 
</p>

## The Arcitecture in Cloud*

<p>
The backend code is held at AWS EC2 and integrated and executed at an AWS EC2 instance with input of observational datasets stored at an S3 bucket and processed or pre-processed visualization data output to another S3 bucket. One the other hand, the frontend web-app is hosted also at EC2 with its visualization data housed in this other S3 bucket. Access of data in S3 from EC2 can be as slow as accessing from a local computer if the bucket and EC2 are not set up in the same region.
</p>

<div
  class="center"
>
  <img
    src="../static/img/userguide/open-source-code/architecture-in-cloud.png"
  />
</div>

## The Frontend Code

<p>
CesiumJS supports drawing and layering high-resolution imagery (maps) from many services. Tile your own imagery layers from raster data to CesiumJS apps. Layers can be ordered and blended together. Each layer’s brightness, contrast, gamma, hue, and saturation can be dynamically changed.
</p>

<p>
Note that users can alter the “linger” parameter in the frontend Javascript code to adjust for the trailing display of the CRS reflectivity/Doppler velocity and the CPL backscattering. NASA’s ER-2 typically cruises at 200 m/s speed when on field duty. That yields ~60 km long of the trailing display for linger = 300 (sec) and ~72 km for linger =360.
</p>

## The Backend Code

<p>
The backend code is programmed in Python 3 and mutually includes three processes for each dataset: data ingestion, processing, and graphic data preprocessing or production. A copy of all GOES-R PLT datasets is currently stored in one of our public AWS S3 buckets. Data is ingested directly via cloud access, i.e. from the AWS S3 bucket, except for (ABI) that uses a specific reader python package (GDAL) that does not support direct cloud access of the file type. Therefore the ABI data have to be downloaded to the AWS EC2 (or local disk) to be processed.  Afterwards, the graphic data produced by the backend code is uploaded to another public S3 bucket for FCX visualization to access or process. We have also made local access an option in the code for users. This option is particularly useful for users that develop their own analysis with the subset data.
</p>

<p>
Access of data in S3 from EC2 can be as slow as accessing from a local computer if they are not in the same region. Should:

<ol>
  <li>
  Check out VPC endpoint connection between EC2 and S3 later. 
  </li>
  
  <li>
  Check out use of d ask for multi-processing the backend code.
  </li>
</ol> 
</p>

<p>
In the current form, a Bash script is run from our EC2 instance to process a dataset for all the field campaign days before moving on to another dataset. The script passes to the python code the date/time, input/output data locations for the code to start ingesting and processing the data. The ingestion/processing and graphic data pre-processing or production modules are described in the following pages.
</p>