---
layout: docs
permalink: Docs
title: Taylor Website Docs
---

# Home Page

To add a slide to the slide show, the image should be the following size: 2208px X 1472px.  Open the file 'index.html', and add the following line: slide3, along with the file location of the image.  

Example:

    Slide3: /assets/img/slide3.png  

![Home Page Image](/assets/img/docs/home.png "Home Page Image")


<br/><br/>

***      
<br/><br/>
# Services

To add services to the service list, open the file: /_data/services_barbering.yml


Add a line at the bottom of the list.

Example:

    - service: Service Here
    description: this is the description of Service Here

![Service Page Image](/assets/img/docs/service.png "Service Page Image")

<br/><br/>

## Barbers

To add a barber to the barber section on the Services page, open the file (_data/barbers.yml), and add the following lines:

    -   avatar: /assets/img/barber_dmontae.jpg
    name: Kevin L.
    title: barber
    description: Coming soon


This is a simple copy and paste of the code that is already present.  See picture below:

![Service Page Image](/assets/img/docs/barbers.png "Service Page Image")

<br><br>

***

<br><br>

# Taylor's Story

To add an image to the image gallery, open the file (_data/lookbook-gallery.yml) and type the following while filling in the new information - below is an example.

    - image: /assets/img/gallery1.jpg
    caption: Taylor's Barbershop Look 1

![Taylor's Story Page Image](/assets/img/docs/gallery.png "Taylor's Story Page Image")

<br><br>

***

<br><br>
# Careers

To add a career, open the file (_data/careers.yml), and add the following lines:

    - career_title: master barber

This will automatically link to the job application form.

![Careers Page Image](/assets/img/docs/careers.png "Careers Page Image")

<br><br>

***

<br><br>
# Shop

To add products to the shop, copy this file (_products/beard_oil.md).  After copying and pasting the file and then changing its name, fill in the proper metadata.  See image below:

![Careers Page Image](/assets/img/docs/products.png "Careers Page Image")

Example Product Update:

    ---
    layout: product-single
    title: Moisturizing Oil

    [//]: #Product Image
    product_image: /assets/img/moisturizing_image.jpg
    product_name: Moisturizing Oil
    product_price: 14.95
    product_description: More information about moisturizing oil goes here
    product_id: 2
    ---


To add multiple products, copy and paste the file multiple times

<br><br>

***

<br><br>
# FAQs

To add faqs, open the file (_data/faqs.yml).  Add the following lines at the bottom of the file:

Example:

    -   faqs_title: Are children welcomed in Taylor's Barbershop if they are not getting a hair cut?
    faqs_text: Yes, children at least 2 years of age and older are welcomed and serviced in the barbershop.

<br><br>

![FAQs Page Image](/assets/img/docs/faqs.png "FAQs Page Image")
