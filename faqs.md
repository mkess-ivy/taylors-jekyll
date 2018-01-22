---
layout: fullpage
title: Taylor's FAQs
permalink: /faqs/
bg_header: /assets/img/fullpage-header.jpg
---

{%  include components/beta_header.html
    beta_subtitle="check our"
    beta_header="frequently asked questions"
%}

<section class="fullpage_wrapper">
    <section class="accordion">

        {% for item in site.data.faqs %}
        <div class="accordion-item potato">
            <a href="#" class="heading">
                <div class="icon"></div>
                <div class="title">{{ item.faqs_title }}</div>
            </a>

            <div class="content">
                <p>
                    {{ item.faqs_text }}
                </p>
            </div>
        </div>
        {% endfor %}

    </section>
</section>
