import { SocialIcon } from 'react-social-icons'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full" style={{ backgroundColor: '#fff' }}>
      <div className="mx-auto w-full px-2 pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
           <div>
            <h2 className="text-2xl font-bold mb-6">
              Fancy a chat?
            </h2>
          </div>

          {/* Contact Details */}
          <div className="text-left">
            <ul className="w-full">
              <li className="flex items-center gap-1 w-full py-2">
                <p>To find out more about my consultancy services, send me an email or book a call:</p>
              </li>
              <li className="flex items-center gap-1 w-full py-2">
                <a
                  href="mailto:ehill2604@googlemail.com"
                  className="hover:text-brand-links transition-colors"
                >
                  ehill2604@googlemail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="text-right">
            <ul className="w-full">
              <li>
                <Link
                  to="/projects"
                  className="flex items-center justify-between w-full py-2 hover:text-brand-links transition-colors"
                >
                  <span>Projects </span><ChevronRight />

                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center justify-between w-full py-2 hover:text-brand-links transition-colors"
                >
                  <span>Contact</span> <ChevronRight />
                 
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-black pt-4">
          <p className="text-black-700 text-sm mb-4 md:mb-0 text-center md:text-left">
            &copy; {currentYear}{" "}
            Arose Marketing. All Rights Reserved.
          </p>

          {/* Social icons */}
          <div className="flex gap-4">
            <div className="w-[28px] h-[28px]">
              <SocialIcon url="https://www.instagram.com/" bgColor="black" fgColor="white" style={{ height: '100%', width: '100%' }} />
            </div>
            <div className="w-[28px] h-[28px]">
              <SocialIcon url="https://www.linkedin.com/in/emilyrosehill2604/" bgColor="black" fgColor="white" style={{ height: '100%', width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

