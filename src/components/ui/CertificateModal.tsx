'use client';

import { useEffect, useState } from 'react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export default function CertificateModal({ isOpen, onClose, imageUrl, title }: CertificateModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      setRotation(0);
      setScale(1); 
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      const timer = setTimeout(() => setIsMounted(false), 300);
      document.body.style.overflow = '';
      return () => clearTimeout(timer);
    }

    // Critical: Reset scroll when component is unmounted
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const rotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  };

  if (!isOpen && !isMounted) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div 
        className={`relative w-full max-w-6xl bg-white rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 ease-out flex flex-col ${
          isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-90 translate-y-10 opacity-0'
        }`}
        style={{ maxHeight: '90vh' }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center p-4 border-b border-gray-100 bg-white z-10 gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-lg font-bold text-primary truncate flex-1">{title}</h3>
          </div>
          
          <div className="flex items-center gap-2 bg-bg-light p-1 rounded-xl shadow-inner">
            {/* Zoom Controls */}
            <div className="flex items-center border-e border-gray-200 px-2 gap-1">
              <button 
                onClick={zoomOut}
                className="p-2 hover:bg-white rounded-lg text-primary transition-all active:scale-90"
                title="تصغير"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className="text-xs font-bold text-primary w-12 text-center">
                {Math.round(scale * 100)}%
              </span>
              <button 
                onClick={zoomIn}
                className="p-2 hover:bg-white rounded-lg text-primary transition-all active:scale-90"
                title="تكبير"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>

            {/* Rotate Control */}
            <button 
              onClick={rotate}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-primary hover:bg-white transition-all active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              تدوير
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative flex-1 bg-gray-100 overflow-auto flex items-center justify-center p-8 min-h-[400px]">
          {imageUrl ? (
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `rotate(${rotation}deg) scale(${scale})` }}
            >
              <img
                src={imageUrl}
                alt={title}
                className="max-w-full max-h-[70vh] shadow-2xl rounded-sm object-contain bg-white"
              />
            </div>
          ) : (
            <div className="text-center p-12 bg-white rounded-2xl shadow-sm">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-500 font-medium italic">صورة الشهادة غير متوفرة حالياً</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-primary text-white px-8 py-2 rounded-lg font-bold hover:bg-secondary transition-all shadow-md active:scale-95"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
}
