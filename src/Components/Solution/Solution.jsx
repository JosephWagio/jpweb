import React from "react";
import { Network, Route, Settings, Bot, BarChart3, HeadphonesIcon } from "lucide-react"

import './Solution.css';
import DEB from '../../assets/DEB img.png';
import CM from '../../assets/CM img.png';
import CBI from '../../assets/CBI img.png';
import A from '../../assets/A img.png';
import RTD from '../../assets/RTD img.png';
import TS from '../../assets/T&S img.png';

const Solution = () => {
    const solutions = [
        {
          id: "ecosystem",
          icon: Network,
          title: "Digital Ecosystem Blueprint",
          description:
            "Before we build, we plan. This strategic blueprint outlines your full digital workflow, ensuring every system works in sync to support growth, scale, and long-term success.",
          image: DEB,
          alt: "Digital Ecosystem Blueprint illustration",
        },
        {
          id: "mapping",
          icon: Route,
          title: "Connection Mapping",
          description:
            "We map how your systems should work together — revealing gaps, overlaps, and lost opportunities — then build a flow that improves efficiency, visibility, and control.",
          image: CM,
          alt: "Connection Mapping illustration",
          reverse: true,
        },
        {
          id: "integration",
          icon: Settings,
          title: "Custom-Built Integration",
          description:
            "We don't force your business into rigid tools. We design seamless, tailored integrations that connect your website, CRM, payments, inventory, and operations into one smooth-running system.",
          image: CBI,
          alt: "Custom-Built Integration illustration",
        },
        {
          id: "automation",
          icon: Bot,
          title: "Automation That Saves You Hours",
          description:
            "Ditch the repetitive admin work. From data entry to customer follow-ups, we automate time-consuming tasks so your team can focus on growth, not grunt work.",
          image: A,
          alt: "Automation illustration",
          reverse: true,
        },
        {
          id: "dashboard",
          icon: BarChart3,
          title: "Real-Time Dashboards",
          description:
            "No more guessing. Get a live, all-in-one view of your business performance — sales, leads, inventory, and more — so you can make fast, confident, data-driven decisions.",
          image: RTD,
          alt: "Real-Time Dashboards illustration",
        },
        {
          id: "support",
          icon: HeadphonesIcon,
          title: "Ongoing Training & Support",
          description:
            "We don't just build and leave. Your team gets hands-on training, personalized support, and lifetime access to our resources — so you're always empowered and never stuck.",
          image: TS,
          alt: "Training & Support illustration",
          reverse: true,
        },
      ]
    return (
        <div className='solution section__padding' id="process">
            <div className="solution__container">
                <header className="solution__header">
                    <h1 className="solution__title">
                        That Ends Today. <strong>Welcome to JP Web.</strong>
                    </h1>
                    <div className="solution__intro">
                        <p className="solution__intro-text">
                            We help forward-thinking businesses like yours{" "} <strong>Build a fully connected digital ecosystem</strong> that runs like clockwork.
                        </p>
                        <p className="solution__intro-text">
                            No more digital guesswork. No more juggling tools.
                        </p>
                        <p className="solution__intro-text">
                            We design, build, and integrate your website, CRM, inventory, and internal tools so{" "} <strong>your sysytems and your team</strong> can finally work smarter, not harder.
                        </p>
                    </div>
                </header>

                <main className="solution__content">
                    <h2 className="solution__content-title">How We Help You Win</h2>

                    <div className="solution__services">
                        {solutions.map((service, index) => {
                            const IconComponent = service.icon
                            return (
                                <article
                                key={service.id}
                                className={`solution__service ${service.reverse ? "solution__service--reverse" : ""}`}
                                style={{animationDelay: `${index * 0.2}s` }}
                                >
                                    <div className="solution__service-image">
                                        <div className="solution__image-wrapper">
                                            <img
                                                src={service.image || "/placeholder.svg"}
                                                width={400}
                                                height={400}
                                                className="solution__image"
                                            />
                                            <div className="solution__image-glow"></div>
                                        </div>
                                    </div>

                                    <div className="solution__service-content">
                                        <div className="solution__icon-wrapper">
                                            <IconComponent className="solution__icon" />
                                            <div className="solution__icon-bg"></div>
                                        </div>

                                        <h3 className="solution__service-title">{service.title}</h3>
                                        <div className="solution__divider"></div>
                                        <p className="solution__service-description">{service.description}</p>

                                        <div className="solution__service-overlay"></div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Solution;