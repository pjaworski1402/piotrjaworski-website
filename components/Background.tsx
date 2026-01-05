import React, { useEffect, useState, useRef } from 'react';

export const Background: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 bg-[#050505] pointer-events-none overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* 
            BASE PATTERN 
            Reduced opacity to 3% - subtle texture
          */}
          <pattern
            id="crossed-squares-base"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="40" height="40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
            <path d="M0 0 L40 40 M40 0 L0 40" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" fill="none" />
          </pattern>

          {/* 
            HIGHLIGHT PATTERN
            Reduced opacity to 12% - gentle highlight
          */}
          <pattern
            id="crossed-squares-highlight"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="40" height="40" fill="none" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
            <path d="M0 0 L40 40 M40 0 L0 40" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" fill="none" />
          </pattern>
        </defs>

        {/* LAYER 1: Base Grid (Always visible) */}
        <rect width="100%" height="100%" fill="url(#crossed-squares-base)" />

        {/* LAYER 2: Spotlight Grid (Visible on hover) */}
        <g>
          <defs>
            <radialGradient id="spotlight-mask" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="mouse-mask">
              <circle cx={mousePos.x} cy={mousePos.y} r="400" fill="url(#spotlight-mask)" />
            </mask>
          </defs>
          
          <rect 
            width="100%" 
            height="100%" 
            fill="url(#crossed-squares-highlight)" 
            mask="url(#mouse-mask)"
          />
        </g>
      </svg>
      
      {/* Vignette - increased opacity to focus user on center content */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-60" />
    </div>
  );
};