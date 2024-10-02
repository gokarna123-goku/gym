import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({ img, title, desc }) => {
    return (
        <Link to="/articles" className="w-full border-2 border-neutral-700/60 hover:bg-neutral-700/10 md:p-4 p-2 flex items-center md:gap-x-6 gap-x-3 ease-in-out duration-300">
            <img src={img} alt="" className="md:w-36 w-24 md:h-[13vh] h-[10vh] object-cover object-center border border-neutral-700/20" />
            <div className="flex-1 space-y-1">
                <h1 className="md:text-lg text-base text-neutral-50 font-bold uppercase">
                    {title}
                </h1>
                <p className="md:text-sm text-xs text-neutral-400 font-thin line-clamp-3">
                    {desc}
                </p>
            </div>
        </Link>
    )
}

export default ArticleCard