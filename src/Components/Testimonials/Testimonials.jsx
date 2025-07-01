import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, Navigation, EffectCoverflow } from "swiper/modules"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"

import "./Testimonials.css"

const testimonials = [
    {
      id: 1,
      quote:
        "As a Finance consultant, onboarding new clients used to take 3 days. JP Web automated our forms and systems — now it takes under 4 hours. Clients are happier, our team is focused on delivering value.",
      author: "Tunde Adebayo",
      role: "CEO, Financial Advisory Firm",
      company: "FinanceFlow Nigeria",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "My online store was losing sales due to a clunky checkout. JP Web redesigned everything and added upsells. In just two months, our average order value increased by 32%.",
      author: "Amaka Okafor",
      role: "Founder & CEO",
      company: "TrendyCart NG",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "We had leads falling through the cracks because marketing and sales weren't in sync. JP Web connected our systems — now every lead is tracked, and our lead volume doubled in a month.",
      author: "Seyi Adeyemi",
      role: "Operations Director",
      company: "Nova Manufacturing",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      id: 4,
      quote:
        "JP Web didn't just build a website — they transformed how we operate. Now we have full control and clarity over our systems. I finally sleep well at night.",
      author: "Olu Fashina",
      role: "Business Owner",
      company: "Lagos Tech Solutions",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      id: 5,
      quote:
        "I used to spend hours daily moving data between apps. JP Web automated it all. Now I just log in and see everything updated — it's saved me 15+ hours weekly.",
      author: "Aisha Mohammed",
      role: "Operations Manager",
      company: "FreightEase",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      id: 6,
      quote:
        "The integration between our inventory and sales systems was seamless. Real-time updates mean we never oversell, and our customers trust us more. Revenue is up 45% this quarter.",
      author: "Kemi Ogundimu",
      role: "E-commerce Director",
      company: "AfriStyle Marketplace",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
]

const Testimonials = () => {
    // const renderStars = (rating) => {
    //     return Array.from({ length: 5 }, (_, i) => (
    //         <span key={i} className={`testimonials__star ${i < rating ? "testimonials__star--filled" : ""}`}>
    //             ★
    //         </span>
    //     ))
    // }

    return (
        <div className="testimonials section__padding">
            <div className="testimonials__container">
                <header className="testimonials__header">
                    <h2 className="testimonials__title">Real Business. Real Results.</h2>
                    <p className="testimonials__subtitle">See how we've helped businesses transform their operations and boost their growth.</p>
                    <div className="testimonials__title-divider"></div>
                </header>

                <div className="testimonials__swiper-container">
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation, EffectCoverflow]}
                        spaceBetween={30}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            clickable: true,
                            bulletClass: "testimonials__pagination-bullet",
                            bulletActiveClass: "testimonials__pagination-bullet--active",
                            renderBullet: (index, className) => `<span class="${className}" aria-label="Go to slide ${index + 1}"></span>`
                        }}
                        navigation={{
                            nextEl: ".testimonials__nav--next",
                            prevEl: ".testimonials__nav--prev"
                        }}
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2,
                            slideShadows: false
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                                effect: "slide"
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                                effect: "overflow"
                            },
                            1024: {
                                slidesPerView: 1.2,
                                spaceBetween: 40,
                                effect: "overflow"
                            },
                        }}
                        className="testimonials__swiper"
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}
                                className="testimonials__slide">
                                    <article className="testimonials__card">
                                        <div className="testimonials__quote-icon">
                                            <Quote className="testimonials__quote-svg" />
                                        </div>

                                        <div className="testimonials__content">
                                            {/* <div className="testimonials__rating">
                                                {renderStars(testimonial.rating)}
                                            </div> */}

                                            <blockquote className="testimonials__quote">
                                                {testimonial.quote}
                                            </blockquote>

                                            <div className="testimonials__author">
                                                {/* <div className="testimonials__avatar">
                                                    <img
                                                    src={testimonial.image || "/placeholder.svg"}
                                                    alt={`${testimonial.author} profile picture`}
                                                    width={80}
                                                    height={80}
                                                    className="testimonials__image"
                                                    />
                                                    <div className="testimonials__avatar-ring"></div>
                                                </div> */}
                                                <div className="testimonials__author-info">
                                                    <h3 className="testimonials__name">{testimonial.author}</h3>
                                                    <p className="testimonials__role">{testimonial.role}</p>
                                                    <p className="testimonials__company">{testimonial.company}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="testimonials__card-glow"></div>
                                    </article>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="testimonials__navigation">
                            <button className="testimonials__nav testimonials__nav--prev" aria-label="Previous testimonial">
                                <ChevronLeft className="testimonials__nav-icon" />
                            </button>
                            <button className="testimonials__nav testimonials__nav--next" aria-label="Next testimonial">
                                <ChevronRight className="testimonials__nav-icon" />
                            </button>
                        </div>
                </div>

                <div className="testimonials__stats">
                <div className="testimonials__stat">
                        <span className="testimonials__stat-number">50+</span>
                        <span className="testimonials__stat-label">Happy Clients</span>
                    </div>
                    <div className="testimonials__stat">
                        <span className="testimonials__stat-number">98%</span>
                        <span className="testimonials__stat-label">Satisfaction Rate</span>
                    </div>
                    <div className="testimonials__stat">
                        <span className="testimonials__stat-number">2x</span>
                        <span className="testimonials__stat-label">Growth Rate</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;
