import React from 'react';

export function Toolkit() {
  return (
    <section className="w-full bg-gradient-to-r from-[#00A3FF] to-[#00E0FF]" style={{ height: '501px' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <div className="relative">
              <h2 
                className="font-['Be_Vietnam'] font-semibold text-[40px] leading-[79%] tracking-[-0.09em] text-white" 
                style={{ width: '110px', position: 'absolute', top: '102px' }}
              >
                SKILLS
              </h2>
              <p 
                className="font-['Be_Vietnam'] font-semibold text-[25px] leading-[109%] tracking-[-0.09em] text-white/90" 
                style={{ width: '430px', position: 'absolute', top: '155px' }}
              >
                While I am language agnostic, here's what I have worked with so far over the years.
              </p>
            </div>
          </div>
          
          <div className="col-span-4 col-start-7">
            <ul 
              className="space-y-1 text-white font-['Be_Vietnam'] font-semibold text-[40px] leading-[109%] tracking-[-0.09em]" 
              style={{ marginTop: '94px' }}
            >
              <li>C</li>
              <li>Python</li>
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>MySQL</li>
              <li>API / JSON</li>
              <li>Puppet</li>
            </ul>
          </div>
          
          <div className="col-span-4 col-start-11">
            <ul 
              className="space-y-1 text-white font-['Be_Vietnam'] font-semibold text-[40px] leading-[109%] tracking-[-0.09em]" 
              style={{ marginTop: '94px' }}
            >
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