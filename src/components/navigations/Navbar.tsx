'use client';
import  { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';




export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', active: true },
    { name: 'About Us', href: '/home/about-us', active: false },
    { name: 'Services', href: '/home/services', active: false },
    { name: 'Projects', href: '/home/projects', active: false },
    { name: 'Contact', href: '/home/contact', active: false },
  ];

  return (
    <nav className="z-40 h-24 w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
        <Link to="/" className="flex text-2xl font-bold">
          <span className="text-black">Ayomiposi</span>
          <span className="text-yellow-500">Steel</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  item.active
                    ? 'rounded border-2 border-yellow-500 text-yellow-500'
                    : 'pb-1 text-gray-600 hover:border-b-2 hover:border-yellow-500 hover:text-yellow-500'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none focus:ring-inset"
          >
            {isMenuOpen ? (
              <X className="block h-6 w-6" />
            ) : (
              <Menu className="block h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-gray-100 bg-white px-2 pt-2 pb-3">
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    item.active
                      ? 'border-l-4 border-yellow-500 bg-yellow-50 text-yellow-500'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-yellow-500'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
