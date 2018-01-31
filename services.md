---
layout: fullpage
title: Taylor's Services
permalink: /services/

[//]: #Header
bg_header: /assets/img/fullpage-header.jpg
---    
<div class="fullpage_wrapper">
    {%  include components/alpha_header.html
        alpha_header="A full service hair lounge for men, women &amp; kids"
        alpha_copy="Taylor’s Barberhops are unique, sleek, upbeat and innovative to give you a feel of comfort, fun and relaxation."
    %}

    <!-- Navigation Section -->
    <div class="navigation_section potato">
        <div class="navigation_icon">
            <a href="#barbering"><img src="/assets/img/icon_razor.png" /></a>
        </div>
        <div class="navigation_icon">
            <a href="#thebarbers"><img src="/assets/img/icon_scissor_comb.png" /></a>
        </div>
    </div>
</div>

<div class="fullpage_wrapper_alpha">
    <div class="fullpage_wrapper">

        <div class="services_section"  id="services">
            <div class="services_header">barber services</div>

            <ul class="potato">
                <div class="frow justify-between">
                    {% for item in site.services %}
                    <li>
                        {{ item.title }}
                        <div>
                            {{ item.price }}
                        </div>
                    </li>
                    {% endfor %}
                </div>
            </ul>
        </div>
    </div>
</div>

<div class="fullpage_wrapper">
    <div class="barbering_section">

        {%  include components/beta_header.html
            beta_subtitle="schedule your consultation and"
            beta_header="appointment"
        %}

        {%  include components/barbers.html %}

    </div>
</div>
