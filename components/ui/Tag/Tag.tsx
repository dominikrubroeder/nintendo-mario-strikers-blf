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
      className={`interactive rounded-full px-4 py-2 hover:bg-accent-dark themed:bg-accent-dark ${variantClassNames}`}
    >
      {label}
    </button>
  );
};

export default Tag;
