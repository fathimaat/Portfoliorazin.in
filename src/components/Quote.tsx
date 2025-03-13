  import React from 'react';

export function Quote() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-400 to-cyan-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <p className="text-white text-3xl md:text-4xl max-w-3xl mb-8 md:mb-0">
        As an enthusiastic developer, I'm passionate about exploring new coding perspectives and pushing innovation.   </p>
        <a 
  href="https://www.linkedin.com/in/razinrayees/" 
  target="_blank" 
  className="px-12 py-4 bg-white text-black hover:bg-opacity-90 transition-colors"
>
  LET'S CONNECT  
</a>

      </div>
    </section>
  );
}