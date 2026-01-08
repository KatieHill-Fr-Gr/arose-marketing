import HandWithLightbulb from '../../assets/HandWithLightbulb.jpeg'


const HomePage = () => {


    return (
        <main>
            <section className="h-screen flex items-center justify-start">
            <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,3vw,3rem)]">
            <h1 className="md:max-w-4xl">Lifecycle Marketing for <span className="italic">high-growth</span> businesses, startups & tech</h1>
            </div>
            </section>
            <section className="h-screen flex items-center justify-start bg-brand-secondary">
            <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,3vw,3rem)] flex flex-col md:flex-row gap-8"> 
            <h2 className="max-w-4xl md:w-1/2">Hi, I'm <span className="italic">Emily</span>, a CRM specialist with 10 years of experience</h2>
            </div>
            </section>
            <section className="h-screen flex items-center justify-start bg-brand-primary">
            <div className="w-full max-w-[1280px] mx-auto px-[clamp(1rem,3vw,3rem)] flex flex-col md:flex-row gap-8">
            <h2 className="max-w-4xl md:w-1/2">Hi, I'm <span className="italic">Emily</span>, a CRM specialist with 10 years of experience</h2>
            <img src={HandWithLightbulb} alt="Illustration of black and white hand passing a pink lightbulb to another on a light blue background" className="md:w-1/2" />
            </div>
            </section>
        </main >
    )
}

export default HomePage