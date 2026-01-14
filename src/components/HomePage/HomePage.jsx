import HandWithLightbulb from '../../assets/HandWithLightbulb.jpeg'
import placeHolder from '../../assets/placeHolder.jpeg'

import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { getProjects } from '../../services/projects.js'
import { useScrollAnimation } from '../../hooks/scrollFunction.js'


const HomePage = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    useScrollAnimation()


    useEffect(() => {
        const loadProjects = async () => {
            try {
                setLoading(true)
                const projects = await getProjects()
                console.log(projects.data)
                setProjects(projects.data)
            } catch (error) {
                setProjects([])
            } finally {
                setLoading(false)
            }
        }
        loadProjects()
    }, [])

    return (
        <main>
            <section className="relative h-screen flex items-center justify-start overflow-hidden">
                <div data-animate data-delay="0ms" className="animate-right transition-all duration-700 ease-out absolute top-1/2 -translate-y-1/2 right-10 w-125 h-125 bg-brand-secondary-half rounded-full opacity-50">
                </div>
                <div data-animate data-delay="200ms" className="animate-right transition-all duration-700 ease-out absolute top-1/2 -translate-y-1/2 right-80 w-125 h-125 bg-brand-secondary-half rounded-full opacity-50"></div>
                <div data-animate data-delay="400ms" className="animate-right transition-all duration-700 ease-out absolute top-1/2 -translate-y-1/2 right-150 w-125 h-125 bg-brand-secondary-half rounded-full opacity-50"></div>
                <div className="relative z-10 w-full max-w-[1280px] mx-auto">
                    <h1 className="md:max-w-4xl">Lifecycle Marketing and CRM for <span className="italic">high-growth</span> businesses and <span className="italic">start-ups</span></h1>
                </div>
            </section>
            <section className="h-1/2 flex items-center justify-start bg-white">
                <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row gap-8">
                    <div data-animate data-delay="0ms" className="animate-left transition-all duration-700 ease-out max-w-4xl md:w-1/2 flex flex-col justify-center gap-8 ">
                        <h2>Hi, I'm Emily, a CRM specialist with 10 years of experience working with a range of start-ups and tech businesses, including Moonpig, Symprove and JPMorgan Chase & Co.</h2>
                        <Link to="/" className="border-2 border-brand-border rounded-full px-6 py-2 w-fit">Read more</Link>
                    </div>
                    <div data-animate
                        data-delay="200ms"
                        className="animate-right transition-all duration-700 ease-out">
                        <h2 className="pt-12 md:[writing-mode:vertical-rl] [writing-mode:horizontal-tb]">About Me</h2>
                    </div>
                    <div className="md:w-1/2 flex items-center p-3">
                        <img src={placeHolder} alt="Profile Image of Emily Hill" className="w-full h-full object-cover p-3" />
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-start bg-brand-secondary py-24">
                <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row gap-8">
                    <div data-animate data-delay="0ms" className="animate-left transition-all duration-700 ease-out max-w-4xl flex flex-col justify-center gap-8">
                        <h2>Recent projects</h2>
                    </div>
                </div>
            </section>
            <section className="h-1/2 flex items-center justify-start bg-white">
                <div className="w-full max-w-[1280px] mx-auto flex flex-col p-3">
                    {loading ? (
                        <p>Loading projects...</p>
                    ) : projects.length > 0 ? (
                        projects.map((project) => (
                            <div key={project._id} className="flex flex-col md:flex-row gap-8">
                                <div data-animate data-delay="0ms" className="animate-left transition-all duration-700 ease-out max-w-4xl md:w-1/2 flex flex-col justify-center gap-8">
                                    <h3>{project.title}</h3>
                                    <p>{project.subtitle}</p>
                                    <Link to={`/`} className="border-2 border-brand-border rounded-full px-6 py-2 w-fit">
                                        View project
                                    </Link>
                                </div>

                                <div className="md:w-1/2 flex items-center p-3">
                                    <img src={project.image} alt="Project image" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-24 max-w-4xl md:w-1/2 flex flex-col justify-center gap-8">
                            <h2> No projects found</h2>
                        </div>
                    )}
                </div>
            </section>
            <section className="h-1/2 flex items-center justify-start bg-brand-primary">
                <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row gap-8">
                    <div className="max-w-4xl md:w-1/2 flex flex-col justify-center gap-8">
                        <div data-animate data-delay="0ms" className="animate-left transition-all duration-700 ease-out flex flex-col gap-2">
                            <h3>From developing concepts to automating emails, SMS & push notifications, and analytics, start building customer loyalty from day one.</h3>
                            <Link to="/" className="border-2 border-brand-border rounded-full px-6 py-2 w-fit">Read more</Link>
                        </div>
                    </div>
                    <div data-animate
                        data-delay="200ms"
                        className="animate-right transition-all duration-700 ease-out" >
                        <h2 className="pt-12 md:[writing-mode:vertical-rl] [writing-mode:horizontal-tb]">Expertise</h2>
                    </div>
                    <div className="md:w-1/2 flex items-center">
                        <img src={HandWithLightbulb} alt="Illustration of black and white hand passing a pink lightbulb to another on a light blue background" className="w-full object-cover" />
                    </div>
                </div>
            </section>
        </main >
    )
}

export default HomePage