import React from 'react'
import Hero from '../components/hero/HeroSection'
import About from '../components/about/AboutSection'
import DepartmentSection from '../components/departments/DepartmentSection'
import FeaturedServices from '../components/services/FeaturedServices'
import FindDoctor from '../components/doctors/FindDoctor'
import CallToAction from '../components/callToAction/CallToAction'


const Home = () => {
  return (
    <>
    <div>
        <Hero/>
        <About/>
        <DepartmentSection/>
        <FeaturedServices/>
        <FindDoctor/>
        <CallToAction/>
    </div>
    </>
  )
}

export default Home