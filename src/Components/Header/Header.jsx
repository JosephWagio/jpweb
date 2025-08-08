import { useState, useRef } from 'react';

import './Header.css'
import Logo from '../../assets/Logo.png';
import HeaderImg from '../../assets/header_img.png'
// import HeaderVid from '../../../public/assets/header_video.mp4'

const Header = () => {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
      <div className="header">
          <div className="header__logo">
              <img src={Logo} 
              alt="JP WEB Logo"
              width={60}
              height={60}
              className='header__logo-image'/>
              <span className='header__logo-text'>JP WEB</span>
          </div>

          <div className="header__content section__padding">
              <div className="header__content-text">
                  <h1 className='header__title'>Building Smart, Stunning, & Scalable Websites</h1>
                  <p className='header__description'>At JP WEB, we craft modern digital experiences with cutting-edge technology,
                      sleek design, and performance in mind. Let’s take your online presence to the next level.</p>
                  <div className="header__buttons">
                    <a href="https://tally.so/r/w2G5Qj" target="_blank" rel="noopener noreferrer">
                      <button className="header__cta-button header__cta-button--primary">
                        <span>Book A Call Now</span>
                        <svg className="header__cta-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </a>


                    <a
                      href="https://wa.me/2349023843604?text=Hi%20JPWeb%2C%20I'm%20interested%20in%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="header__cta-button header__cta-button--secondary">
                        <span>Reach Out Now</span>
                        <svg className="header__cta-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M4.16667 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </a>
                  </div>
              </div>

              <div className="header__content-image">
                <div className="header__image-container">
                  <video
                    className="header__image floating"
                    autoPlay
                    loop
                    muted={isMuted} // ← This allows React to manage the mute state
                    playsInline
                    preload="metadata"
                    poster="/placeholder.svg?height=400&width=680&text=Header+Video"
                    ref={videoRef}
                  >
                    <source src="/assets/header_video.mp4" type="video/mp4" />
                    <source src="../../assets/header_video.webm" type="video/webm" />
                    {/* Fallback image for browsers that don't support video */}
                    <img
                      src={HeaderImg}
                      alt="Header Content"
                      className="header__image"
                    />
                  </video>

                  {/* Mute/Unmute Button */}
                  <button
                    onClick={toggleMute}
                    className="header__mute-button"
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    title={isMuted ? "Click to unmute" : "Click to mute"}
                  >
                    {isMuted ? (
                      // Muted Icon
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="header__mute-icon">
                        <path
                          d="M11 5L6 9H2V15H6L11 19V5Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M23 9L17 15M17 9L23 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      // Unmuted Icon
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="header__mute-icon">
                        <path
                          d="M11 5L6 9H2V15H6L11 19V5Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.07 4.93C20.9447 6.80528 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07M15.54 8.46C16.4774 9.39764 17.0039 10.6692 17.0039 12C17.0039 13.3308 16.4774 14.6024 15.54 15.54"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>

                  <div className="header__image-glow"></div>
                </div>
              </div>
          </div>
      </div>
  );
};

export default Header;