import React from 'react';

export function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-[clamp(2rem,8vw,5.5rem)] font-bold leading-none mb-4">
          RAZIN
          <br />
          RAYEES
        </h1>
        <p className="text-[clamp(1.5rem,4vw,2.5rem)] max-w-3xl leading-tight mb-12">
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