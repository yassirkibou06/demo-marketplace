import React from 'react';
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button"

const items = [
    {
        id: "recents",
        label: "Recents",
    },
    {
        id: "home",
        label: "Home",
    },
    {
        id: "applications",
        label: "Applications",
    },
    {
        id: "desktop",
        label: "Desktop",
    },
    {
        id: "downloads",
        label: "Downloads",
    },
    {
        id: "documents",
        label: "Documents",
    },
]

const Filter = () => {
    return (
        <div>
            <div className="flex items-center justify-between mt-11">
                <h2 className='font-bold text-2xl md:text-2xl cursor-pointer'>Filter</h2>
                <h3>Reset</h3>
            </div>
            <ul className='bg-gray-100 rounded-lg p-4 mt-5'>
                <h2 className='font-bold text-lg md:text-xl tracking-wide mb-2'>Categories</h2>
                {items.map(item => (
                    <div className="flex items-center justify-between space-x-2 space-y-6">
                        <label
                            htmlFor={item.id}
                            className="text-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            {item.label}
                        </label>
                        <Checkbox id={item.id} />
                    </div>
                ))}
            </ul>
            <ul className='bg-gray-100 mt-2 rounded-lg p-4'>
                <h2 className='font-bold text-lg md:text-xl tracking-wide mb-2'>Price</h2>
                <div className="flex items-center justify-between space-x-2 space-y-6">
                    <label
                        htmlFor="paid"
                        className="text-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Paid
                    </label>
                    <Checkbox className="data-[state=checked]:bg-blue-600" id="paid" />
                </div>
                <div className="flex items-center justify-between space-x-2 space-y-6">
                    <label
                        htmlFor="free"
                        className="text-lg leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Free
                    </label>
                    <Checkbox className="data-[state=checked]:bg-blue-600" id="free" />
                </div>
            </ul>
            <Button className="bg-blue-600 w-full mt-7">Filter</Button>
            <ul className='mt-5'>
                <h2 className='font-bold text-2xl md:text-2xl cursor-pointer'>Course Categories</h2>
                <li className='flex justify-between items-center mt-4'>Coaching <span>{`(${15})`}</span></li>
            </ul>
        </div>
    )
}

export default Filter;