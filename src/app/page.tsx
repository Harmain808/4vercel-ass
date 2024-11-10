
import React from 'react'
import Navbar from './component/navbar';
import Hero from './component/hero';
import Footer from './component/footer';

export default function Page(){
  return(
    <div className="flex min-h-screen flex-col bg-[#121212]">
    
      
        <Navbar></Navbar>
        <Hero></Hero>
        <Footer></Footer>
    </div>
  )
}
