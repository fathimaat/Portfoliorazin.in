import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-16">
          <div className="col-span-12 lg:col-span-4 lg:col-start-2">
            <div className="flex flex-col items-center lg:items-start">
              <h2 className="text-[40px] mt-[7rem]">Let's connect</h2>

              <a href="/" className="text-[64px] ml-[6rem] font-bold">rr.</a>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-3">
            <h3 className="text-neutral-500 text-sm mb-8">SECTIONS</h3>
            <ul className="space-y-4 text-[32px]">
              <li><a href="#" className="hover:text-neutral-400">Home</a></li>
              <li><a href="#projects" className="hover:text-neutral-400">Projects</a></li>
              <li><a href="#toolkit" className="hover:text-neutral-400">Skills / Tools</a></li>
              <li><a href="#about" className="hover:text-neutral-400">About Me</a></li>
              <li><a href="#contact" className="hover:text-neutral-400">Contact Me</a></li>
            </ul>
          </div>
          
          <div className="col-span-12 lg:col-span-3">
            <h3 className="text-neutral-500 text-sm mb-8">CONNECT WITH ME</h3>
            <ul className="space-y-4 text-[32px]">
              <li>
                <a href="mailto:razinrayees@outlook.com" className="hover:text-neutral-400">
                  Email
                </a>
              </li>
              <li>
                <a href="https://github.com/razinrayees" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/razinrayees" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://medium.com/@razinrayees" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-400">
                  Medium
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}