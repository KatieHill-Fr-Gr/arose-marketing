import HandWithLightbulb from '../../assets/HandWithLightbulb.jpeg'


const HomePage = () => {


    return (
        <main>
            <section>
            <div className="h-screen flex items-center justify-start">
            <h1 className="max-w-4xl">Lifecycle Marketing for <span className="italic">high-growth</span> businesses, startups & tech</h1>
            </div>
            </section>
            <section>
            <div className="h-screen flex items-center justify-start bg-blue">
            <h2 className="max-w-4xl w-1/2">Hi, I'm <span className="italic">Emily</span>, a CRM specialist with 10 years of experience</h2>
            <img src={HandWithLightbulb} alt="Illustration of black and white hand passing a pink lightbulb to another on a light blue background" className="w-1/2" />
            </div>
            </section>
        </main >
    )
}

export default HomePage