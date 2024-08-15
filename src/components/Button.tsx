// import React from 'react';
// import { motion } from 'framer-motion';

// interface ButtonProps {
//   text: string;
//   onClick?: () => void;
// }

// const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
//   return (
//     <motion.button
//       onClick={onClick}
//       whileHover={{ scale: 1.05, backgroundColor: '#be185d', boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.2)' }}
//       whileTap={{ scale: 0.95, backgroundColor: '#9d174d' }}
//       className="px-8 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-sm shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all duration-300 ease-in-out"
//     >
//       {text}
//     </motion.button>
//   );
// };

// export default Button;



import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, backgroundColor: '#be185d', boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.2)' }}
      whileTap={{ scale: 0.95, backgroundColor: '#9d174d' }}
      className="px-8 py-2 h-10 w-42 absolute bottom-1 right-1 left-1 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-sm shadow-md hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all duration-300 ease-in-out"
    >
      {text}
    </motion.button>
  );
};

interface ImageCardProps {
  src: string;
  alt: string;
  buttonText: string;
  onButtonClick?: () => void;
}

// const ImageCard: React.FC<ImageCardProps> = ({ src, alt, buttonText, onButtonClick }) => {
//   return (
//     <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
//       <Image
//         src={src}
//         alt={alt}
//         layout="fill"
//         objectFit="cover"
//         className="rounded-lg"
//       />
//       <div className="absolute bottom-5 transform -translate-x-1/2">
//         <Button text={buttonText} onClick={onButtonClick} />
//       </div>
//     </div>
//   );
// };

export default Button;

