export const Card = ({ children, className = '', animate = true }) => {
  return (
    <div className={`
      bg-surface dark:bg-surface-dark 
      border border-gray-100 dark:border-gray-800/60 
      rounded-2xl shadow-sm 
      transition-all duration-300 
      hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1 
      p-5 relative overflow-hidden 
      ${animate ? 'animate-in slide-up' : ''}
      ${className}
    `}>
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-white/[0.02] pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
