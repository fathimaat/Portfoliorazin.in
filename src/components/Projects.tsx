import React from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: "Zeba's Portfolio",
    description: 'A sleek and modern portfolio site showcasing web projects, designed for speed, responsiveness, and clarity.',
    image: 'https://i.imgur.com/SYvto01.jpeg', 
    type: 'PORTFOLIO',
    link: 'https://zebakk.web.app'
  },
  {
    title: 'Patch Property',
    description: 'Building a static modern renting platform with Patch to improve credit history, rent with a deposit, and find the perfect pad',
    image: 'https://i.imgur.com/rqDXkCn.jpeg',
    type: 'PROJECT',
    link: 'https://patch.razin.in'
  },
  {
    title: 'Bitbucket',
    description: 'Building Bitbucket: More than just Git code management, providing teams a single platform to plan projects, collaborate on code, test, and deploy',
    image: 'https://i.imgur.com/g9ZW0qj.jpeg',
    type: 'PROJECT',
    link: 'https://bitbucket.razin.in'
  },
  {
    title: "Arshad Khader's Portfolio",
    description: 'A clean, professional website designed for Arshad Khader, showcasing his background and initiatives.',
    image: 'https://i.imgur.com/nGUcvby.jpeg',
    type: 'PORTFOLIO',
    link: 'https://arshadk.pages.dev'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-6xl">PROJECTS</h2>
          <a 
            href="https://github.com/razinrayees" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600 transition-colors"
          >
            <Github className="w-8 h-8" />
          </a>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* First project - spans 8 columns */}
          <div className="col-span-12 lg:col-span-8">
            <a 
              href={projects[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative h-[400px] overflow-hidden bg-black group"
            >
              <img 
                src={projects[0].image} 
                alt={projects[0].title}
                className="w-full h-full object-cover opacity-75 transition-transform duration-700 lg:group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 p-12">
                <div className="h-full flex flex-col">
                  <span className="text-white text-sm lg:opacity-0 lg:transform lg:-translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transition-all lg:duration-300">{projects[0].type}</span>
                  <div className="mt-auto">
                    <h3 className="text-white text-[3.5rem] leading-none font-bold lg:opacity-0 lg:transform lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transition-all lg:duration-300 lg:delay-100">{projects[0].title}</h3>
                    <p className="text-white text-xl mt-6 mb-8 max-w-2xl lg:opacity-0 lg:transform lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transition-all lg:duration-300 lg:delay-200">{projects[0].description}</p>
                    <span className="inline-block text-white text-lg border border-white px-6 py-2 lg:opacity-0 lg:transform lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transition-all lg:duration-300 lg:delay-300">
                      LIVE LINK
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Second and Third projects - span 4 columns each */}
          {projects.slice(1, 3).map((project, index) => (
            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-[400px] overflow-hidden bg-black group"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-75 transition-transform duration-700 lg:group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 p-8">
                  <div className="h-full flex flex-col">
                    <span className="text-white text-sm lg:opacity-0 lg:transform lg:-translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transition-all lg:duration-300">{project.type}</span>
                    <div className="mt-auto">
                      <h3 className="text-white text-[2.5rem] leading-none font-bold lg:opacity-0 lg:transform lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transition-all lg:duration-300 lg:delay-100">{project.title}</h3>
                      <p className="text-white text-lg mt-4 mb-8 lg:opacity-0 lg:transform lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transition-all lg:duration-300 lg:delay-200">{project.description}</p>
                      <span className="inline-block text-white text-lg border border-white px-6 py-2 lg:opacity-0 lg:transform lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transition-all lg:duration-300 lg:delay-300">
                        LIVE LINK
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}

          {/* Fourth project - spans 8 columns */}
          <div className="col-span-12 lg:col-span-8">
            <a 
              href={projects[3].link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative h-[400px] overflow-hidden bg-black group"
            >
              <img 
                src={projects[3].image}
                alt={projects[3].title}
                className="w-full h-full object-cover opacity-75 transition-transform duration-700 lg:group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 p-12">
                <div className="h-full flex flex-col">
                  <span className="text-white text-sm lg:opacity-0 lg:transform lg:-translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transition-all lg:duration-300">{projects[3].type}</span>
                  <div className="mt-auto">
                    <h3 className="text-white text-[3.5rem] leading-none font-bold lg:opacity-0 lg:transform lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transition-all lg:duration-300 lg:delay-100">{projects[3].title}</h3>
                    <p className="text-white text-xl mt-6 mb-8 lg:opacity-0 lg:transform lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transition-all lg:duration-300 lg:delay-200">{projects[3].description}</p>
                    <span className="inline-block text-white text-lg border border-white px-6 py-2 lg:opacity-0 lg:transform lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:transition-all lg:duration-300 lg:delay-300">
                      LIVE LINK
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}