import React from 'react';

interface CoursePlaceholderProps {
  width?: number;
  height?: number;
  backgroundColor?: string;
  iconColor?: string;
  className?: string;
}

/**
 * A minimal, static course image placeholder component
 */
const CoursePlaceholder: React.FC<CoursePlaceholderProps> = ({
  width = 200,
  height = 150,
  backgroundColor = '#E5E7EB',
  iconColor = '#9CA3AF',
  className = '',
}) => {
  return (
    <div
      className={className}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor,
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <svg 
        width={width * 0.3} 
        height={height * 0.3} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Book/Course Icon */}
        <path 
          d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z" 
          fill={iconColor} 
        />
        <path 
          d="M12 13.25V19.25M19.25 9V15C19.25 15 16 18.25 12 19.25C8 18.25 4.75 15 4.75 15V9" 
          stroke={iconColor} 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>
  );
};

export default CoursePlaceholder;
