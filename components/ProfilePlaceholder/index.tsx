import React from 'react';

interface ProfilePlaceholderProps {
  size?: number;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

/**
 * A minimal, static profile image placeholder component
 */
const ProfilePlaceholder: React.FC<ProfilePlaceholderProps> = ({
  size = 40,
  backgroundColor = '#E5E7EB',
  textColor = '#9CA3AF',
  className = '',
}) => {
  return (
    <div
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
        borderRadius: '50%',
        backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <svg 
        width={size * 0.6} 
        height={size * 0.6} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" 
          fill={textColor} 
        />
        <path 
          d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" 
          fill={textColor} 
        />
      </svg>
    </div>
  );
};

export default ProfilePlaceholder;
