import React from 'react';

const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Radial gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(0, 180, 216, 0.1) 0%, transparent 50%)`
        }}
      />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 180, 216, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 180, 216, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0, 180, 216, 0.4) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Animated glow spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-trust-cyan/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-data-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default BackgroundGrid;