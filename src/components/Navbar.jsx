import React from 'react'
import { House, Info, Home, UserCog, MailOpen } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { icon: Home, name: 'Home', path: '/' },
  { icon: Info, name: 'About', path: '/about' },
  { icon: UserCog, name: 'Services', path: '/services' },
  { icon: MailOpen, name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  return (
    <nav className='shadow-md sticky top-0 z-50 bg-gray-800'>
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-blue-400"
        >
          <House className="text-blue-400" />
          Haven Initiative
        </NavLink>

        <div className='hidden md:flex items-center gap-6'>
          <ul className='flex gap-6 items-center'>
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-blue-400 font-semibold'
                      : 'text-gray-500 hover:text-blue-400 transition-all duration-300'
                  }
                >
                  <item.icon className="inline mr-1" size={20}/>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar