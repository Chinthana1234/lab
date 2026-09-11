import React from 'react'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Services from './Services.jsx'
import Work from './Work.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import WhyChooseUs from './WhyChooseUs.jsx'
/* ---------------- APP ---------------- */
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs/>
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
