import './App.css'
import BrandLogo from './components/brandLogo/BrandLogo.jsx'
import Hero from './components/hero/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Services from './components/services/Services.jsx'
import Testimonials from './components/testimonials/Testimonials.jsx'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BlogsComp from './components/blogsComp/BlogsComp.jsx'
import Footer from './components/footer/footer.jsx'
import AOS from "aos";
import "aos/dist/aos.css";
import React from 'react'

function App() {
React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
    AOS.refresh();
  },[]);
  return (
    <>
      <div className='overflow-hidden bg-white dark:bg-black duration-300'>
        <Navbar />
        <Hero />
        <BrandLogo />
        <Services />
        <Testimonials />
        <BlogsComp />
        <Footer />
      </div>
    </>
  )
}

export default App
