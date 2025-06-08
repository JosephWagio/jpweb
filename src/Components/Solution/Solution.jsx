import { FaProjectDiagram, FaRoute, FaCogs, FaRobot, FaChalkboardTeacher } from "react-icons/fa";
import React from "react";

import './Solution.css';

const Solution = () => {
    return (
        <div className='solution section__padding'>
            <div className='solution_header'>
                <h1>That Ends Today. Welcome to JP Web.</h1>
                <div className='title-divider'></div>
                <p>We help forward-thinking Nigerian businesses like yours <strong>build a fully connected digital ecosystem</strong> that runs like clockwork.</p>
                <p>No more digital guesswork. No more juggling tools.</p>
                <p>We design, build, and integrate your website, CRM, inventory, and internal tools so <strong>your systems and your team</strong> can finally work smarter, not harder.</p>
            </div>
            <div className='solution_content'>
                <h2>How We Help You Win</h2>
                <div className='title-divider'></div>
                <div className="grid">
                    <div className="card">
                        <strong><FaProjectDiagram /> Digital Ecosystem Blueprint</strong><br/>
                        We don’t just build. We map your entire workflow and design your ideal digital setup.
                    </div>
                    <div className="card">
                        <strong><FaRoute /> Connection Mapping</strong><br/>
                        Our proprietary method visualizes how information flows between all your systems, making it easy to fix gaps.
                    </div>
                    <div className="card">
                        <strong><FaCogs /> Custom-Built Integration</strong><br/>
                        We connect your website, sales, CRM, payments, inventory, and more into one smooth platform.
                    </div>
                    <div className="card">
                        <strong><FaRobot /> Automation That Saves You Hours</strong><br/>
                        Admin tasks? Handled. Manual data entry? Gone.
                    </div>
                    <div className="card">
                        <strong><FaChalkboardTeacher /> Real-Time Dashboards</strong><br/>
                        Monitor everything in one place. Make decisions with real, live numbers.
                    </div>
                    <div className="card">
                        <strong><FaChalkboardTeacher /> Ongoing Training & Support</strong><br/>
                        We don’t disappear after launch. Your team gets the tools and support to thrive.
                    </div>
                </div>
            </div>
        </div>
    )
}