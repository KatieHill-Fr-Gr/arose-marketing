import HandWithLightbulb from '../../assets/HandWithLightbulb.jpeg'


const HomePage = () => {


    return (
        <main>
            <section className="relative h-screen flex items-center justify-start overflow-hidden">
            <div className="absolute top-1/2 -translate-y-1/2 right-10 w-125 h-125 bg-brand-secondary rounded-full opacity-0 animate-[slideInRight_0.8s_ease-out_0.2s_forwards]"></div>
            <div className="absolute top-1/2 -translate-y-1/2 right-80 w-125 h-125 bg-brand-secondary rounded-full opacity-0 animate-[slideInRight_0.8s_ease-out_0.6s_forwards]"></div>
            <div className="absolute top-1/2 -translate-y-1/2 right-150 w-125 h-125 bg-brand-secondary rounded-full opacity-0 animate-[slideInRight_0.8s_ease-out_1.0s_forwards]"></div>
            <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[clamp(1rem,3vw,3rem)]">
            <h1 className="md:max-w-4xl">Lifecycle Marketing and CRM for <span className="italic">high-growth</span> businesses and <span className="italic">start-ups</span></h1>
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