import React from 'react'

const AdsOnlineLearn = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-ads items-center bg-blue-600 p-7 lg:p-0'>
            <div className='pl-16 hidden lg:block'>
                <img className='h-full w-full' src="https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2023/06/get-app-1.png" alt="" />
            </div>
            <div className='pr-16'>
                <h2 className='font-bold text-2xl md:text-4xl text-white tracking-wide pb-2'>Online Learning Now</h2>
                <h2 className='font-bold text-2xl md:text-4xl text-white tracking-wide mb-5'>In Your Fingertips</h2>
                <p className="text-white mb-10">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    ...
                </p>
                <div className="flex space-x-6">
                    <div>
                        <img src="https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2023/05/ch-play-1.png" alt="" />
                    </div>
                    <div>
                        <img src="https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2023/05/app-store-1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdsOnlineLearn