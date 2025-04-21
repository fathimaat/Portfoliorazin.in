import React from 'react';

export function Toolkit() {
  return (
    <section className="py-32 px-6 bg-gradient-to-r from-[#00A3FF] to-[#00FFF0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-white text-7xl font-bold mb-6">SKILLS</h2>
            <p className="text-white/90 text-xl">
              While I am language agnostic, here's what I have worked with so far over the years.
            </p>
          </div>
          
          <div className="md:col-span-4">
            <ul className="space-y-6 text-white text-4xl font-light">
              <li>C</li>
              <li>Python</li>
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>MySQL</li>
              <li>API / JSON</li>
              <li>Puppet</li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <ul className="space-y-6 text-white text-4xl font-light">
              <li>Flask</li>
              <li>Bootstrap</li>
              <li>JQuery</li>
              <li>React</li>
              <li>Wordpress</li>
              <li>SASS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}