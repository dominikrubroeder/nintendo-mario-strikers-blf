import React from 'react';

interface TagProps {
  label: string;
  variant: 'contained' | 'text';
}

const Tag: React.FC<TagProps> = ({ label, variant }) => {
  const variantClassNames =
    variant === 'contained'
      ? 'bg-accent text-white'
      : 'bg-transparent text-accent hover:text-white';

  return (
    <button
      className={`rounded-full px-4 py-2 transition duration-300 hover:bg-accent-dark active:scale-95 ${variantClassNames}`}
    >
      {label}
    </button>
  );
};

export default Tag;
