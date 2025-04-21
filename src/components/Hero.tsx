import React from 'react';

export function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-8">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="font-['Be_Vietnam'] font-semibold text-[100px] leading-[79%] mb-4">
          RAZIN
          <br />
          RAYEES
        </h1>
        <p className="font-['Be_Vietnam'] font-semibold text-[40px] leading-[93%] max-w-3xl mb-12">
          CS STUDENT PASSIONATE ABOUT PUTTING MY SKILLS TO USE
        </p>
        <div>
          <a 
            href="#about" 
            className="px-8 py-4 bg-black text-white text-center hover:bg-black/90 transition-colors"
          >
            ABOUT ME
          </a>
        </div>
      </div>
    </div>
  );
}