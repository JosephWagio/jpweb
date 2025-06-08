import React from "react";
import { BsHourglassSplit } from "react-icons/bs";
import { FaDatabase, FaPlug, FaUserLargeSlash, FaShieldHalved, FaChartLine } from "react-icons/fa6";

import './AboutUs.css';

const AboutUs = () => {
    return(
        <div className="aboutUs section__padding">
            <div className='aboutUs_header'>
                <h1> About JP WEB </h1>
                <p>You didn’t start your business to drown in admin or juggle clunky tools. But for many Nigerian businesses, that’s the reality.</p>
                <p><strong>That’s why JP Web exists.</strong> We help growth-driven companies build digital systems that talk to each other. From your website to CRM, payments to inventory — everything flows in sync, so your team works smarter, not harder.</p>
            </div>
            <div className='aboutUs_content'>
                <section className='section_1'>
                    <h2>Imagine this:</h2>
                    <div className='title-divider'></div>
                    <p>It’s Monday morning. You’re ready to start the week, but your team is still manually copying data from one system to another.<strong> Your website is slow</strong>, customer<strong> records are scattered</strong>, and you're not even sure if your<strong> numbers are accurate</strong>. You feel stuck, overwhelmed, and honestly<strong> tired</strong>.</p>
                    <p>You built this business to grow, not to be confused everyday</p>
                    <p>You’re not alone.</p>
                    <p>Most small to medium businesses in Nigeria hit this wall. The tech is there — <strong>websites, CRMs, online payments</strong> — but nothing works together. That’s where your problems really begin.</p>
                </section>
                <section className='section_2'>
                    <h2>The Real Problem Isn’t Just the Tech — It’s the Chaos Behind It:</h2>
                    <div className='title-divider'></div>
                    <p>Disconnected systems are silently killing your business. Every manual entry, every delay, every misstep with a customer adds up:</p>
                    <ul>
                        <li><BsHourglassSplit className='aboutUs_icon' /><strong> Time wasted</strong> on repetitive manual tasks.</li>
                        <li><FaDatabase className='aboutUs_icon' /><strong> Scattered data</strong> across platforms.</li>
                        <li><FaPlug className='aboutUs_icon' /><strong> Disjointed tools</strong> slowing down your team.</li>
                        <li><FaUserLargeSlash className='aboutUs_icon' /><strong> Poor user experience</strong> turning customers away.</li>
                        <li><FaShieldHalved className='aboutUs_icon' /><strong> Security gaps</strong> from outdated systems.</li>
                        <li><FaChartLine className='aboutUs_icon' /><strong> Sales slipping through the cracks</strong> without you knowing.</li>
                    </ul>
                    <p>We replace the chaos with clarity and connection — so your business runs like clockwork.</p>
                </section>
            </div>
        </div>
    )
};

export default AboutUs;