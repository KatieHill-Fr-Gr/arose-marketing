import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <main>
            <section>
                <div className="container">
                    <div className="page-content">
                        <h1> Oops, page not found</h1>
                        <p>We can't find the page you were looking for.</p>
                        <Link to="/projects" className="page-button">Go back to projects</Link>
                    </div>
                </div>
            </section>
        </main>
    )

}


export default NotFound