'use client';

import { useScrollProgress } from '@/hooks/use-scroll-progress';

export const ScrollProgress = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  );
};