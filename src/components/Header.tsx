import React from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6" />
            <span className="font-semibold text-xl">Portfolio</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-gray-600">About</a>
            <a href="#education" className="hover:text-gray-600">Education</a>
            <a href="#projects" className="hover:text-gray-600">Projects</a>
            <a href="#contact" className="hover:text-gray-600">Contact</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col gap-4">
              <a href="#about" className="hover:text-gray-600">About</a>
              <a href="#education" className="hover:text-gray-600">Education</a>
              <a href="#projects" className="hover:text-gray-600">Projects</a>
              <a href="#contact" className="hover:text-gray-600">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}