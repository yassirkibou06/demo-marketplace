import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div className="grid items-center text-center grid-cols-1 md:grid-cols-hero gap-16 mt-24">
      <div>
        <h2 className='font-bold text-3xl md:text-5xl text-gray-900 mb-4'>First Education Theme</h2>
        <h2 className='font-bold text-3xl md:text-5xl text-gray-900 mb-4'>For <span className="text-blue-500">Marketplace</span></h2>
        <p className="text-gray-700 text-sm md:text-[15px] tracking-widest leading-4">This will be the best place for anyone to sell courses online, with all the necessary eCommerce features. This is Eduma - Education WordPress Theme.</p>
        <div className="mt-7 flex space-y-5 md:space-y-0 flex-col md:flex-row">
          <Button className="bg-blue-500 py-4 w-full mr-5"><Link>Create Your Free Account</Link></Button>
          <Button className="py-4 w-full bg-transparent text-black border-2 border-black hover:text-white"><Link>View Courses</Link></Button>
        </div>
      </div>
      <div>
        <div>
          <img className='w-full h-full object-cover' src="https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2023/08/home-banner-top.jpg" alt="n" />
        </div>
      </div>
    </div>
  )
}

export default Hero