import React, { useEffect, useRef } from "react";
import './Testimonials.css';

const testimonies = [
    {
        quote: "As a Finance consultant, onboarding new clients used to take 3 days. JP Web automated our forms and systems — now it takes under 4 hours. Clients are happier, our team is focused on delivering value.",
        author: "— Tunde, CEO, Financial Advisory Firm"
    },
    {
        quote: "My online store was losing sales due to a clunky checkout. JP Web redesigned everything and added upsells. In just two months, our average order value increased by 32%.",
        author: "— Amaka, Founder, TrendyCart NG"
    },
    {
        quote: "We had leads falling through the cracks because marketing and sales weren’t in sync. JP Web connected our systems — now every lead is tracked, and our lead volume doubled in a month.",
        author: "— Seyi, Ops Director, Nova Manufacturing"
    },
    {
        quote: "JP Web didn’t just build a website — they transformed how we operate. Now we have full control and clarity over our systems. I finally sleep well at night.",
        author: "— Olu, Business Owner, Lagos"
    },
    {
        quote: "I used to spend hours daily moving data between apps. JP Web automated it all. Now I just log in and see everything updated — it’s saved me 15+ hours weekly.",
        author: "— Aisha, Operations Manager, FreightEase"
    },
    {
        quote: "Before JP Web, we were guessing what was working. Now with real-time dashboards, we make data-backed decisions that actually move the needle.",
        author: "— Daniel, Marketing Lead, Reva Foods"
    }
];

const Testimonials = () => {
    const sliderRef = useRef(null);
    // const originalLength = testimonies.length;

    useEffect(() => {
        const slider = sliderRef.current;
        let scrollStep = getScrollStep();

        const handleResize = () => {
            scrollStep = getScrollStep();
        };

        const getScrollStep = () => {
            return window.innerWidth >= 768
                ? slider.offsetWidth * 0.47
                : slider.offsetWidth * 0.9;
        };

        const scroll = () => {
            if (slider.scrollLeft >= slider.scrollWidth / 2) {
                // Reset scroll to the start (seamless loop)
                slider.scrollLeft = 0;
            } else {
                slider.scrollBy({ left: scrollStep, behavior: "smooth" });
            }
        };

        const interval = setInterval(scroll, 4000);

        window.addEventListener("resize", handleResize);
        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const duplicatedTestimonials = [...testimonies, ...testimonies];

    return (
        <div className='testimonials section__padding'>
            <div className='testimonial_header'>
                <h2>Real Businesses. Real Results.</h2>
            </div>
            <div className='testimonial_slider' ref={sliderRef}>
                {duplicatedTestimonials.map((item, index) => (
                    <div className='testimonial_card' key={index}>
                        <div className='testimonial_quote'>{item.quote}</div>
                        <div className='testimonial_author'>{item.author}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;