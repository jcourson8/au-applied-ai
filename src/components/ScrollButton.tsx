// src/components/ScrollButton.tsx
import React from 'react';
import { ChevronDown } from 'lucide-react';

type ScrollButtonProps = {
  targetId: string;
  ariaLabel: string;
  message?: boolean;
};

const ScrollButton: React.FC<ScrollButtonProps> = ({ targetId, ariaLabel, message }) => {
  const scrollToNext = () => {
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="absolute inset-x-0 bottom-6 flex flex-col items-center">
      <button
        onClick={scrollToNext}
        className="animate-bounce"
        aria-label={ariaLabel}
      >
        {message && (
          <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-gray-400 whitespace-nowrap">
            <span className="sm:hidden">Tap me!</span>
            <span className="hidden sm:inline">Click me!</span>
          </span>
        )}
        <ChevronDown size={48} className="text-gray-400" />
      </button>
    </div>
  );
};

export default ScrollButton;