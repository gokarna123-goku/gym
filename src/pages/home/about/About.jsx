import React from 'react'
import Layout from '../../../layout/Layout'

import HeroImg from '../../../assets/3.png'
import Tag from '../../../components/tag/Tag'

import { Link } from 'react-router-dom'
import { MdOutlineDoubleArrow } from 'react-icons/md'

const About = () => {
    return (
        <Layout className="md:space-y-20 space-y-10">

            <div className="w-full flex items-center justify-between md:flex-nowrap flex-wrap md:gap-16 gap-12">

                <div className="md:w-1/2 w-full md:space-y-12 space-y-8 md:text-start text-center">

                    <div className="space-y-5">
                        <div className="space-y-2">
                            <p className="text-base text-red-600 font-medium uppercase">
                                About us
                            </p>
                            <h1 className="md:text-4xl text-3xl text-neutral-50 font-bold uppercase">
                                Build your body Strong.
                            </h1>
                        </div>

                        <h1 className="text-xl text-neutral-200 font-semibold capitalize">
                            A Roadmap to Total Body Fitness
                        </h1>

                        <p className="text-lg text-neutral-400 font-thin line-clamp-6 md:pr-14 pr-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repellat cumque dicta natus quae, dolore illo aspernatur debitis. Necessitatibus beatae delectus ab. Debitis voluptate, laudantium vero, culpa corrupti facilis dolor explicabo eveniet, ab commodi quaerat. Voluptas, porro, quis expedita quo id voluptatum molestias maiores recusandae, nulla tempora eligendi laborum est.
                        </p>
                    </div>

                    <Link to="/about" className="md:w-fit sm:w-fit w-full px-8 py-3.5 bg-red-600 hover:bg-transparent border-2 border-red-600 text-base text-neutral-50 font-medium flex items-center justify-center gap-x-2 group ease-in-out duration-300">
                        Learn More <MdOutlineDoubleArrow className='w-6 h-6 pt-0.5 group-hover:translate-x-2 ease-in-out duration-300' />
                    </Link>

                </div>

                <div className="md:w-1/2 w-full">
                    <img src="https://cdn.pixabay.com/photo/2021/12/23/05/06/strength-6888635_1280.jpg" className='w-full md:h-[70vh] sm:h-[50vh] h-[40vh] object-cover' alt="hero" />
                </div>

            </div>

            <div className="w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-0">
                <div className="w-full border border-neutral-700 flex items-center justify-center flex-col px-5 py-10 space-y-4">
                    <h1 className="md:text-8xl text-7xl text-neutral-50 font-bold flex items-start">
                        3<span className="text-red-600 text-6xl">+</span>
                    </h1>
                    <p className="text-xl text-neutral-300 font-light">
                        Years Experience
                    </p>
                </div>

                <div className="w-full border border-neutral-700 flex items-center justify-center flex-col px-5 py-10 space-y-4">
                    <h1 className="d:text-8xl text-7xl text-neutral-50 font-bold flex items-start">
                        50<span className="text-red-600 text-6xl">+</span>
                    </h1>
                    <p className="text-xl text-neutral-300 font-light">
                        Expert Trainers
                    </p>
                </div>

                <div className="w-full border border-neutral-700 flex items-center justify-center flex-col px-5 py-10 space-y-4">
                    <h1 className="d:text-8xl text-7xl text-neutral-50 font-bold flex items-start">
                        5K<span className="text-red-600 text-6xl">+</span>
                    </h1>
                    <p className="text-xl text-neutral-300 font-light">
                        Students Trained
                    </p>
                </div>

                <div className="w-full border border-neutral-700 flex items-center justify-center flex-col px-5 py-10 space-y-4">
                    <h1 className="d:text-8xl text-7xl text-neutral-50 font-bold flex items-start">
                        10<span className="text-red-600 text-6xl">+</span>
                    </h1>
                    <p className="text-xl text-neutral-300 font-light">
                        Successful Branches
                    </p>
                </div>

            </div>

        </Layout>
    )
}

export default About