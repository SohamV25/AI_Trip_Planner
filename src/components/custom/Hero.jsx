import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
      <div className='flex items-center mx-56 gap-9 flex-col'>
        <h1 className='font-extrabold text-[50px] text-center mt-16'>
          <span className='text-[#f56551]'>Discover Your Next Adventure with AI:</span>  Personalized Itineraires at Your Fingertips
        </h1>

        <p className='text-xl text-gray-500'>Your personal trip planner and travel curator, creating custom intineries tailored to your interest and budget
        </p>

      <Link to={'/create-trip'}><Button>Get Started, It's free</Button></Link>
        
      </div>

      
    </>
  )
}

export default Hero