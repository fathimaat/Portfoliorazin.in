import React from 'react';
import { Logo } from './Logo';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-3xl mb-8">Let's connect</p>
          <Logo />
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 text-lg">
          <div>
            <h3 className="font-['Be_Vietnam'] font-semibold text-[14px] leading-[79%] tracking-[0.165em] text-neutral-500 mb-8">SECTIONS</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="font-['Be_Vietnam'] font-semibold text-[40px] leading-[100%] tracking-[-0.09em] hover:text-neutral-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="font-['Be_Vietnam'] font-semibold text-[40px] leading-[100%] tracking-[-0.09em] hover:text-neutral-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="font-['Be_Vietnam'] font-semibold text-[40px] leading-[100%] tracking-[-0.09em] hover:text-neutral-400">
                  About Me
                </a>
              </li>
              <li>
                <a href="#contact" className="font-['Be_Vietnam'] font-semibold text-[40px] leading-[100%] tracking-[-0.09em] hover:text-neutral-400">
                  Contact Me
                </a>
              </li>
              <li>
                <a href="#certificates" className="font-['Be_Vietnam'] font-semibold text-[40px] leading-[100%] tracking-[-0.09em] hover:text-neutral-400">
                  Certificates
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-['Be_Vietnam'] font-semibold text-[14px] leading-[79%] tracking-[0.165em] text-neutral-500 mb-8">CONNECT WITH ME</h3>
            <div className="flex gap-6">
              <a href="mailto:razinrayees@outlook.com" className="hover:text-neutral-400">
                <Mail size={24} />
              </a>
              <a href="https://github.com/razinrayees" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/razinrayees" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}