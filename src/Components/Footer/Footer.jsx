import React from "react"
import { Facebook, Twitter, Instagram, Linkedin, Github, ArrowUp, Mail, Phone, MapPin } from "lucide-react"

import "./Footer.css"
import Logo from '../../assets/Logo.png';

const footerSections = [
    {
      title: "SERVICES",
      links: [
        { name: "Digital Ecosystem Blueprint", href: "#digital-ecosystem" },
        { name: "Custom Integration", href: "#integration" },
        { name: "Business Automation", href: "#automation" },
        { name: "Real-Time Dashboards", href: "#dashboards" },
        { name: "Ongoing Support", href: "#support" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { name: "About JP Web", href: "#about" },
        { name: "Our Process", href: "#process" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact Us", href: "#contact" },
      ],
    },
  ]

const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#facebook", color: "#1877f2" },
    { name: "Twitter", icon: Twitter, href: "#twitter", color: "#1da1f2" },
    { name: "Instagram", icon: Instagram, href: "#instagram", color: "#e4405f" },
]
  
const contactInfo = [
    { icon: Mail, text: "jpweb@gmail.com", href: "mailto:jpweb2025@gmail.com" },
    { icon: Phone, text: "+234 (0) 902 384 3604", href: "tel:+2349023843604" },
    { icon: MapPin, text: "Port-Harcourt, Nigeria", href: "#location" },
]
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <footer className="footer">
      <div className="footer__container">
        {/* Main Footer Content */}
        <div className="footer__content">
          {/* Brand Section */}
          <div className="footer__brand">
            <div className="footer__brand-header">
              <div className="footer__logo">
                <img
                  src={Logo}
                  alt="JP WEB Logo"
                  width={60}
                  height={60}
                  className="footer__logo-image"
                />
                <span className="footer__brand-name">JP WEB</span>
              </div>
              <p className="footer__tagline">Building Smart, Stunning, & Scalable Websites</p>
            </div>

            {/* Contact Info */}
            <div className="footer__contact">
              <h4 className="footer__contact-title">Get in Touch</h4>
              <div className="footer__contact-list">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="footer__contact-item"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <IconComponent className="footer__contact-icon" />
                      <span className="footer__contact-text">{contact.text}</span>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="footer__social">
              <h4 className="footer__social-title">Follow Us</h4>
              <div className="footer__social-links">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="footer__social-link"
                      aria-label={`Follow us on ${social.name}`}
                      style={
                        {
                          animationDelay: `${index * 0.1}s`,
                          "--social-color": social.color,
                        }}
                    >
                      <IconComponent className="footer__social-icon" />
                      <div className="footer__social-bg"></div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="footer__links-container">
            {footerSections.map((section, sectionIndex) => (
              <div key={section.title} className="footer__section" style={{ animationDelay: `${sectionIndex * 0.2}s` }}>
                <h3 className="footer__section-title">{section.title}</h3>
                <div className="footer__section-divider"></div>
                <ul className="footer__section-links">
                  {section.links.map((link, linkIndex) => (
                    <li key={link.name} style={{ animationDelay: `${sectionIndex * 0.2 + linkIndex * 0.05}s` }}>
                      <a href={link.href} className="footer__link">
                        <span className="footer__link-text">{link.name}</span>
                        <div className="footer__link-underline"></div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <div className="footer__bottom-content">
            <div className="footer__copyright">
              <p className="footer__copyright-text">
                © 2025 JP WEB. All rights reserved.
              </p>
            </div>

            {/* <div className="footer__legal">
              <a href="#privacy" className="footer__legal-link">
                Privacy Policy
              </a>
              <a href="#terms" className="footer__legal-link">
                Terms of Service
              </a>
              <a href="#cookies" className="footer__legal-link">
                Cookie Policy
              </a>
            </div> */}

            <button className="footer__scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
              <ArrowUp className="footer__scroll-icon" />
            </button>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="footer__decoration">
          <div className="footer__decoration-circle footer__decoration-circle--1"></div>
          <div className="footer__decoration-circle footer__decoration-circle--2"></div>
          <div className="footer__decoration-circle footer__decoration-circle--3"></div>
        </div>
      </div>
    </footer>
    )
}

export default Footer
