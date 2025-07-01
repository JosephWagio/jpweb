import React from "react";
import { Clock, Database, Plug, UserX, Shield, TrendingUp } from "lucide-react"

import './AboutUs.css';

const AboutUs = () => {
    const problemCards = [
        {
          icon: Clock,
          title: "Time Wasted",
          description:
            "Manual data entry, fixing tech errors, and chasing updates eat into your day and kill productivity — unnecessarily.",
        },
        {
          icon: Database,
          title: "Scattered Data",
          description:
            "Customer and business data is spread across different tools, making it hard to get accurate insights or make smart decisions.",
        },
        {
          icon: Plug,
          title: "Disjointed Tools",
          description:
            "Your systems don't communicate, forcing your team to waste hours jumping between platforms just to complete simple tasks.",
        },
        {
          icon: UserX,
          title: "Poor User Experience",
          description:
            "A slow or clunky website frustrates visitors, reduces trust, and drives potential customers straight to your competitors.",
        },
        {
          icon: Shield,
          title: "Security Gaps",
          description:
            "Outdated, unlinked platforms leave your business exposed to breaches, data loss, and compliance issues — all without you noticing.",
        },
        {
          icon: TrendingUp,
          title: "Sales Slipping Through The Cracks",
          description:
            "Leads get lost and follow-ups missed because disconnected systems prevent your team from seeing and acting on opportunities in real time.",
        },
      ]
    return(
        <div className="aboutUs section__padding" id='about'>
            <div className="about-us__container">
                <header className="about-us__header">
                    <h1 className="about-us__title">About JP WEB</h1>
                    <div className="about-us__intro">
                        <p className="about-us__intro-text">
                            You didn't start your business to drown in admin or juggle clunky tools. But for many Nigerian businesses, that's the reality.
                        </p>
                        <p className="about-us__intro-text about-us__intro-text--emphasis">
                            <strong>That's why JP Web exists.</strong> We help growth-driven companies build digital systems that talk to each other. From your website to CRM, payments to inventory — everything flows in sync, so your team works smarter, not harder.
                        </p>
                    </div>
                </header>

                <div className="about-us__content">
                    <aside className="about-us__problem-statement">
                        <h2 className="about-us__section-title">Imagine This</h2>
                        <div className="about-us__divider"></div>

                        <div className="about-us__problem-text">
                            <p>It's Monday morning. You're ready to start the week, but your team is still manually copying data from one system to another. <strong>Your website is slow</strong>, customer{" "} <strong>records are scattered</strong>, and you're not even sure if your{" "} <strong>numbers are accurate</strong>. You feel stuck, overwhelmed, and honestly <strong>tired</strong>.</p>
                            <p>You built this business to grow, not to be confused everyday</p>
                            <p className="about-us__empathy">You're not alone</p>
                            <p>Most small to medium businesses in hit this wall. The tech is there -{" "} <strong>Websites, CRMs, Online Payments</strong> - but nothing works together. That's where your problems really begin </p>
                        </div>
                    </aside>

                    <main className="about-us__problems">
                        <h2 className="about-us__section-title">
                            The Real Problem Isn't Just the Tech - It's the Chaos Behind It:
                        </h2>
                        <div className="about-us__divider"></div>

                        <p className="about-us__problems-intro">Disconnected systems are silently killing your business. Every manual entry, every delay, every misstep with a customer adds up:</p>

                        <div className="about-us__grid">
                            {problemCards.map((card, index) => {
                                const IconComponent = card.icon
                                return (
                                    <article key={card.title}
                                    className="about-us__card" style={{animationDelay: `${index * 0.1}s` }}>
                                        <div className="about-us__card-icon-wrapper">
                                            <IconComponent className="about-us__card-icon" />
                                            <div className="about-us__card-icon-bg"></div>
                                        </div>
                                        <h3 className="about-us__card-title">{card.title}</h3>
                                        <p className="about-us__card-description">{card.description}</p>
                                        <div className="about-us__card-overlay"></div>
                                    </article>
                                )
                            })}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
};

export default AboutUs;