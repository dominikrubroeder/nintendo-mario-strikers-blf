import Image from 'next/image';
import React from 'react';

interface QuestionBlockProps {
  /** Width and height size of the rendered image */
  size: number;
}

const QuestionBlock: React.FC<QuestionBlockProps> = ({ size }) => {
  return (
    <Image
      width={size}
      height={size}
      src="/images/items/Question_Block_Artwork_-_Super_Mario_3D_World.png"
      alt="Question block image Super Mario"
      className="animate-pulse object-contain"
    />
  );
};

export default QuestionBlock;
