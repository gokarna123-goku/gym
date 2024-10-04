import React from 'react'
import Layout from '../../../layout/Layout'
import { Link } from 'react-router-dom'
import { MdOutlineDoubleArrow } from 'react-icons/md'

const Banner = () => {
    return (
        <div className='w-full border-t border-b border-neutral-700 md:h-[85vh] sm:h-[70vh] h-[55vh] bg-[url("https://cdn.pixabay.com/photo/2020/03/05/16/53/boxing-4904901_1280.jpg")] bg-cover bg-center bg-no-repeat'>
            <Layout className="w-full h-full flex items-center justify-center flex-col text-center md:space-y-14 space-y-8 bg-gradient-to-tr from-neutral-950/80 to-neutral-950/70">
                <div className="md:space-y-5 space-y-3">
                    <p className="text-2xl text-neutral-400 font-medium">
                        {/* A Roadmap to Total Body Fitness */}
                        Want to get stronger?
                    </p>
                    <h1 className="md:text-5xl sm:text-4xl text-3xl text-neutral-50 font-bold uppercase">
                        Still making excuses?
                    </h1>

                    <h1 className="md:text-5xl sm:text-4xl text-3xl text-neutral-50 font-bold uppercase">
                        come on guys!!!
                    </h1>
                </div>

                <Link to="/about" className="w-fit px-10 py-4 bg-red-600 hover:bg-transparent border-2 border-red-600 text-lg text-neutral-50 font-medium uppercase flex items-center gap-x-2 group ease-in-out duration-300">
                    Join GYM Now <MdOutlineDoubleArrow className='w-6 h-6 pt-0.5 group-hover:translate-x-2 ease-in-out duration-300' />
                </Link>

            </Layout>
        </div>
    )
}

export default Banner