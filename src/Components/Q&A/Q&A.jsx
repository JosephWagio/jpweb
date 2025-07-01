import { useState } from "react"
import { Code, Users, DollarSign, CheckCircle, ArrowRight } from "lucide-react"

import "./Q&A.css"


const objections = [
    {
      id: 1,
      icon: Code,
      concern: "I've tried developers before and nothing worked.",
      solution:
        "Most devs build in isolation. We focus on integration from Day One, ensuring everything works together seamlessly.",
      color: "purple",
    },
    {
      id: 2,
      icon: Users,
      concern: "What if it's too technical?",
      solution:
        "We handle the tech complexity. You get a clean, intuitive system — and we train your team to use it effectively.",
      color: "teal",
    },
    {
      id: 3,
      icon: DollarSign,
      concern: "It sounds expensive.",
      solution:
        "Our phased approach ensures you see value at each stage. Plus, our clients often save more than they spend through improved efficiency.",
      color: "gold",
    },
  ]

const ObjectionHandling = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      company: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [focusedInput, setFocusedInput] = useState(null)
      
    const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
      
    const handleSubmit = async (e) => {
      e.preventDefault()
      setIsSubmitting(true)
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))
  
       console.log("Form submitted:", formData)
      setIsSubmitting(false)
  
      // Reset form
      setFormData({ name: "", email: "", company: "" })
    }

    return (
        <div className="objection-handling section__padding" id="faq">
            <div className="objection-handling__container">
                <header className="objection-handling__header">
                    <h1 className="objection-handling__title">Worried It Won't Work for You?</h1>
                    <p className="objection-handling__subtitle">
                        We understand your concerns. Here's how we address the most common worries:
                    </p>
                    <div className="objection-handling__title-divider"></div>
                </header>

                <div className="objection-handling__content">
                    <div className="objection-handling__grid">
                        {objections.map((objection, index) => {
                        const IconComponent = objection.icon
                        return (
                            <article
                            key={objection.id}
                            className={`objection-handling__card objection-handling__card--${objection.color}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                            >
                            <div className="objection-handling__card-header">
                                <div className="objection-handling__icon-wrapper">
                                <IconComponent className="objection-handling__icon" />
                                <div className="objection-handling__icon-bg"></div>
                                </div>
                                <h3 className="objection-handling__concern">{objection.concern}</h3>
                            </div>

                            <div className="objection-handling__solution">
                                <div className="objection-handling__check-wrapper">
                                <CheckCircle className="objection-handling__check-icon" />
                                </div>
                                <p className="objection-handling__solution-text">{objection.solution}</p>
                            </div>

                            <div className="objection-handling__card-overlay"></div>
                            <div className="objection-handling__card-glow"></div>
                            </article>
                        )
                        })}
                    </div>
                </div>

                <div className="objection-handling__cta" id="contact">
                    <div className="objection-handling__cta-container">
                        <div className="objection-handling__cta-content">
                            <h2 className="objection-handling__cta-title">Book A Call Today</h2>
                            <p className="objection-handling__cta-subtitle">
                                Don't struggle anymore to manage tasks. Everything is easy to setup
                            </p>

                            <form className="objection-handling__form" onSubmit={handleSubmit}>
                                <div className="objection-handling__form-inputs">
                                    <div className="objection-handling__input-group">
                                        <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedInput("name")}
                                        onBlur={() => setFocusedInput(null)}
                                        placeholder="Your Name"
                                        className={`objection-handling__input ${
                                            focusedInput === "name" ? "objection-handling__input--focused" : ""
                                        }`}
                                        required
                                        />
                                        <label className="objection-handling__input-label">Name *</label>
                                    </div>

                                    <div className="objection-handling__input-group">
                                        <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedInput("email")}
                                        onBlur={() => setFocusedInput(null)}
                                        placeholder="your@email.com"
                                        className={`objection-handling__input ${
                                            focusedInput === "email" ? "objection-handling__input--focused" : ""
                                        }`}
                                        required
                                        />
                                        <label className="objection-handling__input-label">Email *</label>
                                    </div>

                                    <div className="objection-handling__input-group">
                                        <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedInput("company")}
                                        onBlur={() => setFocusedInput(null)}
                                        placeholder="Your Company"
                                        className={`objection-handling__input ${
                                            focusedInput === "company" ? "objection-handling__input--focused" : ""
                                        }`}
                                        required
                                        />
                                        <label className="objection-handling__input-label">Company *</label>
                                    </div>
                                </div>

                                <button type="submit" className="objection-handling__cta-button" disabled={isSubmitting}>
                                    <span className="objection-handling__button-text">{isSubmitting ? "Booking..." : "Book Now"}</span>
                                    {isSubmitting ? (
                                        <div className="objection-handling__spinner"></div>
                                    ) : (
                                        <ArrowRight className="objection-handling__button-icon" />
                                    )}
                                </button>
                            </form>
                        </div>

                        <div className="objection-handling__cta-decoration">
                            <div className="objection-handling__cta-circle objection-handling__cta-circle--1"></div>
                            <div className="objection-handling__cta-circle objection-handling__cta-circle--2"></div>
                            <div className="objection-handling__cta-circle objection-handling__cta-circle--3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ObjectionHandling
