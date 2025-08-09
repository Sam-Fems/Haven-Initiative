import React from 'react';
import { House, Info, UserCog, MailOpen } from 'lucide-react';
import { Link } from 'react-scroll';

const navItems = [
  { icon: House, name: 'Home', path: 'home' },
  { icon: Info, name: 'About', path: 'about' },
  { icon: UserCog, name: 'Services', path: 'services' },
  { icon: MailOpen, name: 'Contact', path: 'contact' },
];

const Navbar = () => {
  return (
    <nav className='shadow-md sticky top-0 z-50 bg-gray-800'>
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to='home'
          className="flex items-center gap-2 text-2xl font-bold text-blue-400"
        >
          <House className="text-blue-400" />
          Haven Initiative
        </Link>

        <div className='hidden md:flex items-center gap-6'>
          <ul className='flex gap-6 items-center'>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  smooth={true}
                  duration={800}
                  offset={-50}
                  className="cursor-pointer text-gray-500 hover:text-blue-400 transition-all duration-300"
                  activeClass="text-blue-400 font-semibold"
                  spy={true}
                >
                  <item.icon className="inline mr-1" size={20} />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
