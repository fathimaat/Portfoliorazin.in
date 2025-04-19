import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(href);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 bg-white z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 py-4 lg:hidden">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col space-y-4">
                <a href="#" onClick={handleClick} className="hover:text-gray-600">Home</a>
                <a href="#about" onClick={handleClick} className="hover:text-gray-600">About</a>
                <a href="#projects" onClick={handleClick} className="hover:text-gray-600">Projects</a>
                <a href="#certificates" onClick={handleClick} className="hover:text-gray-600">Certificates</a>
              </div>
            </div>
          </div>
        )}

        <div className="hidden lg:flex space-x-8">
          <a href="#" onClick={handleClick} className="hover:text-gray-600">Home</a>
          <a href="#about" onClick={handleClick} className="hover:text-gray-600">About</a>
          <a href="#projects" onClick={handleClick} className="hover:text-gray-600">Projects</a>
          <a href="#certificates" onClick={handleClick} className="hover:text-gray-600">Certificates</a>
        </div>

        <Logo />

        <a 
          href="#contact" 
          onClick={handleClick}
          className="px-6 py-2 bg-black text-white hover:bg-black/90 transition-colors"
        >
          CONTACT
        </a>
      </div>
    </nav>
  );
}