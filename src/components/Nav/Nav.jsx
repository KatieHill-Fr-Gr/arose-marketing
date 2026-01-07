
import { Link } from 'react-router-dom'
import { Menu, X } from "lucide-react"
import { useState } from 'react'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <nav>
                <div className="left-section">
                    <Link to="/" className="home-link">Arose Marketing</Link>
                </div>

                <div className="right-section">
                    <Link to="/" className="page-link">Services</Link>
                    <Link to="/" className="page-link">Contact</Link>
                </div>
                <div className="mobile-user-controls">
                    <button
                        className="hamburger"
                        onClick={() => setMenuOpen(prev => !prev)}
                    >
                        {menuOpen ? <X size={24} color="var(--light-fonts)" /> : <Menu size={24} color="var(--light-fonts)" />}
                    </button>
                </div>
                {menuOpen && (
                    <div className="mobile-menu">
                        <div className="mobile-links">
                            <Link to="/" className="mobile-link" onClick={() => setMenuOpen(false)}>Services</Link>
                            <Link to="/" className="mobile-link" onClick={() => setMenuOpen(false)}>Contact</Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Nav