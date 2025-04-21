import React from 'react';
import { Download, ArrowLeft } from 'lucide-react';
import { Logo } from './Logo';

export function Resume() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-4">
            <a 
              href="/Razin_Rayees_Resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download
            </a>
            <a 
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <iframe
            src="/Razin_Rayees_Resume.pdf"
            className="w-full h-[calc(100vh-12rem)]"
            title="Resume PDF"
          />
        </div>
      </main>
    </div>
  );
}