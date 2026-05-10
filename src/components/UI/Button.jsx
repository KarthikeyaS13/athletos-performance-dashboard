export const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  
  const variants = {
    primary: "bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/25 focus:ring-accent",
    secondary: "bg-surface dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 focus:ring-gray-400",
    danger: "bg-danger hover:bg-danger/90 text-white shadow-lg shadow-danger/25 focus:ring-danger",
    success: "bg-success hover:bg-success/90 text-white shadow-lg shadow-success/25 focus:ring-success",
    ghost: "text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50"
  };

  const sizes = {
    sm: "px-3.5 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
