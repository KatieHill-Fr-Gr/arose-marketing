import HandWithLightbulb from '../../assets/HandWithLightbulb.jpeg'
import HomeImg from '../../assets/HomeImg.jpeg'



const HomePage = () => {


    return (
        <main>
            <section className="relative h-screen flex items-center justify-start overflow-hidden">
                <div className="absolute top-1/2 -translate-y-1/2 right-10 w-125 h-125 bg-brand-secondary rounded-full opacity-0 animate-[slideInRight_0.8s_ease-out_0.2s_forwards]">
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-80 w-125 h-125 bg-brand-secondary rounded-full opacity-0 animate-[slideInRight_0.8s_ease-out_0.6s_forwards]"></div>
                <div className="absolute top-1/2 -translate-y-1/2 right-150 w-125 h-125 bg-brand-secondary rounded-full opacity-0 animate-[slideInRight_0.8s_ease-out_1.0s_forwards]"></div>
                <div className="relative z-10 w-full max-w-[1280px] mx-auto px-[clamp(1rem,3vw,3rem)]">
                    <h1 className="md:max-w-4xl">Lifecycle Marketing and CRM for <span className="italic">high-growth</span> businesses and <span className="italic">start-ups</span></h1>
                </div>
            </section>
            <section className="h-1/2 flex items-center justify-start bg-white">
                <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row gap-8 pl-[clamp(1rem,3vw,3rem)]">
                    <h2 className="max-w-4xl md:w-1/2 flex items-center">Hi, I'm Emily, a CRM specialist with 10 years of experience</h2>
                    <img src={HomeImg} alt="Profile Image of Emily Hill with blond hair and leopard-print top" className="md:w-1/2 object-cover" />
                </div>
            </section>
            <section className="h-1/2 flex items-center justify-start bg-brand-primary">
                <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row gap-8 pl-[clamp(1rem,3vw,3rem)]">
                    <h2 className="max-w-4xl md:w-1/2 flex items-center">From developing creative concepts to coding emails, automation & analytics, I offer a complete service to boost customer loyalty</h2>
                    <img src={HandWithLightbulb} alt="Illustration of black and white hand passing a pink lightbulb to another on a light blue background" className="md:w-1/2" />
                </div>
            </section>
        </main >
    )
}

export default HomePage