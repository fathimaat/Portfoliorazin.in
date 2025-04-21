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
      <div className="max-w-7xl mx-auto flex items-center">
        <button 
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="flex-1 flex justify-center">
          <Logo />
        </div>

        <div className="w-[40px]">
          <a 
            href="#contact" 
            onClick={handleClick}
            className="px-6 py-2 bg-black text-white hover:bg-black/90 transition-colors"
          >
            CONTACT
          </a>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 py-4 shadow-lg">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col space-y-4">
                <a href="#" onClick={handleClick} className="text-lg hover:text-gray-600 transition-colors">Home</a>
                <a href="#quote" onClick={handleClick} className="text-lg hover:text-gray-600 transition-colors">Quote</a>
                <a href="#projects" onClick={handleClick} className="text-lg hover:text-gray-600 transition-colors">Projects</a>
                <a href="#toolkit" onClick={handleClick} className="text-lg hover:text-gray-600 transition-colors">Skills</a>
                <a href="#about" onClick={handleClick} className="text-lg hover:text-gray-600 transition-colors">About</a>
                <a href="#certificates" onClick={handleClick} className="text-lg hover:text-gray-600 transition-colors">Certificates</a>
                <a href="#contact" onClick={handleClick} className="text-lg hover:text-gray-600 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}