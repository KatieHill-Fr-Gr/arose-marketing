
import { Link } from 'react-router-dom'
import { Menu, X } from "lucide-react"
import { useState } from 'react'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent">
                <div className="left-section">
                    <Link to="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">Arose Marketing</Link>
                </div>

                <div className="hidden md:flex gap-6 px-6 py-2 border-2 border-gray-300 rounded-full">
                    <Link to="/" className="page-link">Services</Link>
                    <Link to="/" className="page-link">Contact</Link>
                </div>
                <div className="md:hidden">
                    <button
                        className="hamburger"
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24}  />}
                    </button>
                </div>

                {menuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <div className="flex flex-col px-6 py-4 gap-4">
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