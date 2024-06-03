import React from 'react'
import LandingContent from './Section-1/LandingContent'
import About from './Section-2/About'
import ProjectCards from './ProjectCard/ProjectCards'
import VideoPlayer from './ExtraFeatures/VideoPlayer'
import ImageCarousel from './Section-3/ImageCarousel'
import Footer from './Footer'
import Obs from './Current OBs/Obs'

const WebsiteLandingPage = () => {
  return (
    <div>
         <div className='whole-website bg-gradient-to-b from-[#178365] to-stone-900 '>
            <LandingContent />
            <About /> 
            <ProjectCards /> 
            <VideoPlayer />
            <ImageCarousel />
            {/* <SynthetixBanner />  */}
            <Obs />   
            <Footer />   
        </div>
    </div>
  )
}

export default WebsiteLandingPage
