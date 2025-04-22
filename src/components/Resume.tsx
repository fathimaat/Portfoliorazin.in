import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ArrowLeft, Download, ChevronLeft, ChevronRight, Minus, Plus } from 'lucide-react';
import { Logo } from './Logo';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export function Resume() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1);
  
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    // Set initial scale based on screen width
    setScale(window.innerWidth < 768 ? 0.6 : 1.5);
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
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
          <Logo />
          <div className="flex items-center gap-2 sm:gap-4 sm:ml-auto">
            <div className="flex items-center gap-2">
              <button
                onClick={zoomOut}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Zoom out"
              >
                <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <span className="text-xs sm:text-sm text-gray-600">
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={zoomIn}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Zoom in"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            <a 
              href="/Razin_Rayees_Resume.pdf"
              download
              className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-black text-white hover:bg-black/90 transition-colors text-sm sm:text-base"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Download</span>
            </a>
            <a 
              href="/"
              className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Back</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="border-b p-3 sm:p-4 flex justify-between items-center">
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={goToPrevPage}
                disabled={pageNumber <= 1}
                className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <span className="text-xs sm:text-sm text-gray-600">
                Page {pageNumber} of {numPages}
              </span>
              <button
                onClick={goToNextPage}
                disabled={pageNumber >= numPages}
                className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
                aria-label="Next page"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          <div className="flex justify-center p-4 sm:p-8 bg-neutral-50 overflow-x-auto">
            <div className="shadow-lg min-w-fit">
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