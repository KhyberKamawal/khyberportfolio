'use client';

export const EnhancedLogo = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div 
      className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-primary cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group btn-primary-glow"
      onClick={onClick}
    >
      <span className="font-poppins font-bold text-white text-lg tracking-tight group-hover:scale-110 transition-transform">KK</span>
    </div>
  );
};
