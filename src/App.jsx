import React from "react";


import { Header, AboutUs, Solution, Testimonials, ObjectionHandling, Footer } from './Components';
import './App.css'

function App() {

  return (
    <div className= 'background_bg' >
      <Header />
      <AboutUs />
      <Solution />
      <Testimonials />
      <ObjectionHandling />
      <Footer />
    </div>
  )
}

export default App
