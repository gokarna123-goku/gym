import React from 'react'

const Tag = ({ tagTitle }) => {
    return (
        <div className='w-full flex items-center justify-center flex-col text-center space-y-2'>
            <p className="text-base text-red-600 font-medium uppercase">
                No Pain, No Gain
            </p>
            <h1 className="md:text-4xl text-3xl text-neutral-50 font-bold uppercase">
                {tagTitle}
            </h1>
        </div>
    )
}

export default Tag