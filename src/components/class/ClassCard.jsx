import React from 'react'
import { FaDumbbell } from 'react-icons/fa6'

const ClassCard = ({ icon: Icon, title }) => {
    return (
        <div className="w-full bg-neutral-900/15 hover:bg-red-600 border border-neutral-700 hover:border-red-600 px-5 py-14 flex items-center justify-center flex-col space-y-10 hover:scale-105 group ease-in-out duration-300">
            <div className="text-8xl text-neutral-200">
                <Icon />
            </div>

            <div className="space-y-4 text-center">
                <h1 className="text-3xl text-neutral-50 font-bold uppercase">
                    {title}
                </h1>
                <p className="text-sm text-neutral-500 group-hover:text-neutral-300 font-thin line-clamp-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore soluta molestiae quisquam inventore Lorem ipsum dolor sit amet consectetur
                </p>
            </div>

            <button className="w-fit px-8 py-3 bg-red-600 group-hover:bg-neutral-950 text-base text-neutral-50 font-medium ease-in-out duration-300">
                Join Class Now
            </button>
        </div>
    )
}

export default ClassCard