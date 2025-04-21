import React, { useState } from 'react';
import { Document, Page } from '@react-pdf/renderer';
import { Download, ArrowLeft, ChevronLeft, ChevronRight, Minus, Plus } from 'lucide-react';
import { Logo } from './Logo';

// Initialize PDF.js worker
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export function Resume() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.5);
  
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(prev + 1, numPages));
  };

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 2.5));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.8));
  };

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
          <div className="border-b p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button
                onClick={zoomOut}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Zoom out"
              >
                <Minus className="w-5 h-5" />
              </button>
              <button
                onClick={zoomIn}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Zoom in"
              >
                <Plus className="w-5 h-5" />
              </button>
              <span className="text-sm text-gray-600">
                {Math.round(scale * 100)}%
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-sm text-gray-600">
                Page {pageNumber} of {numPages}
              </span>
              <button
                onClick={goToNextPage}
                disabled={pageNumber >= numPages}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex justify-center p-8 bg-neutral-50">
            <div className="shadow-lg">
              <Document
                file="/Razin_Rayees_Resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                className="transition-all duration-300"
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="transition-all duration-300"
                />
              </Document>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}