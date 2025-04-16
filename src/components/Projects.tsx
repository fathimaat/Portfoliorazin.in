import React from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: "Zeba's Portfolio",
    description: 'A sleek and modern portfolio site showcasing web projects, designed for speed, responsiveness, and clarity.',
    image: 'https://razin.imgix.net/121.png', 
    type: 'PROJECT',
    link: 'https://zebakk.web.app'
    
  },
  {
    title: "Arshad Khader's Portfolio",
    description: ' A clean, professional website designed for Arshad Khader, showcasing his background and initiatives.',
    image: 'https://razin.imgix.net/arshad.png?auto=format&fit=crop&q=80&w=1200',
    type: 'PORTFOLIO',
    link: 'https://arshadk.pages.dev'
  },
  {
    title: 'Patch Property',
    description: 'Building a static modern renting platform with Patch to improve credit history, rent with a deposit, and find the perfect pad',
    image: 'https://razin.imgix.net/23.png?auto=format&fit=crop&q=80',
    type: 'PROJECT',
    link: 'https://patch.razin.in'
  },
  {
    title: 'Bitbucket',
    description: 'Building Bitbucket: More than just Git code management, providing teams a single platform to plan projects, collaborate on code, test, and deploy',
    image: 'https://razin.imgix.net/24.png?auto=format&fit=crop&q=80',
    type: 'PROJECT',
    link: 'https://bitbucket.razin.in'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-6xl">PROJECTS</h2>
          <a href="https://github.com/razinrayees" target="_blank" rel="noopener noreferrer">
            <Github size={48} />
          </a>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-80 p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm">{project.type}</span>
                {/* Make title clickable */}
                <h3 className="text-3xl font-bold mt-2 mb-4">
                  <a 
                    href={project.link || 'https://www.google.com'} // Fallback to google.com if no link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    {project.title}
                  </a>
                </h3>
                {/* Hide description on mobile */}
                <p className="text-lg mb-8 hidden md:block">{project.description}</p>
                {project.link && project.link !== '#' && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"                    
                    className="inline-block px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors"
                  >
                    LIVE
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
