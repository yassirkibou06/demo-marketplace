import React from 'react'
import { Button } from './ui/button'

const InstructorsSect = () => {
  return (
    <div className='grid grid-cols-1 text-center lg:text-start lg:grid-cols-instructor items-center bg-[#ecedef] gap-20 p-5'>
        <div className='pl-0 lg:pl-16'>
            <img className='w-full h-full' src="https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2023/05/banner-footer.png" alt="" />
        </div>
        <div className='pr-0 lg:pr-16'>
            <h2 className='text-3xl lg:text-5xl font-bold mb-2'>Become One Of <span className='text-blue-600'>1000+</span></h2>
            <h2 className='text-3xl lg:text-5xl font-bold mb-7'>Eduma’s Instructors</h2>
            <p className='mb-10'>Become an instructor and change lives — including your own</p>
            <Button className="bg-blue-600 p-5 lg:p-6 rounded-xl"><a href="/">Get Started</a></Button>
        </div>
    </div>
  )
}

export default InstructorsSect