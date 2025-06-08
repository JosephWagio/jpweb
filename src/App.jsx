import React from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

import { Header, AboutUs, Solution, Testimonials } from './Components';
import './App.css'

function App() {
  // useEffect(() => {
  //     AOS.init({ duration: 1000 });
  // }, []);

  return (
    <div className= 'background_bg' >
      <Header />
      <AboutUs />
      <Solution />
      <Testimonials />
    </div>
  )
}

export default App
