import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full" style={{ backgroundColor: '#fff' }}>
      <div className="mx-auto w-full max-w-7xl px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h5 className="text-2xl font-bold mb-6">
              Let's work together
            </h5>
          </div>

          {/* Contact Details */}
          <div className="text-left">
            <h6 className="text-lg font-semibold mb-4 text-left">Say hello</h6>
            <ul className="w-full">
              <li className="flex items-center gap-1 w-full py-2">
                <p>Got a project? Send me an email to discuss how I can help.</p>
              </li>
              <li className="flex items-center gap-1 w-full py-2">
                <a
                  href="mailto:ehill2604@googlemail.com"
                  className="hover:text-gray-900 transition-colors"
                >
                  ehill2604@googlemail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="text-right">
            <h6 className="text-lg font-semibold text-gray-900 mb-4 text-left">Read more</h6>
            <ul className="divide-y divide-black w-full">
              <li>
                <Link
                  to="/projects"
                  className="flex items-center justify-between w-full py-2 hover:text-gray-900 transition-colors"
                >
                  <span>Projects</span>
                  <span>→</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center justify-between w-full py-2 hover:text-gray-900 transition-colors"
                >
                  <span>About</span>
                  <span>→</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center justify-between w-full py-2 hover:text-gray-900 transition-colors"
                >
                  <span>Contact</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-black pt-4">
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
              <SocialIcon url="https://www.linkedin.com/" bgColor="black" fgColor="white" style={{ height: '100%', width: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

