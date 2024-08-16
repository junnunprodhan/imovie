
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface BannerProps {
  title: string;
  buttonText: string;
  imageUrl: string;
  onButtonClick?: () => void;
}

const Banner: React.FC<BannerProps> = ({ title, buttonText, imageUrl, onButtonClick }) => {
  return (
    <div className="relative w-full h-[300px] mb-10 pb-10">
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.button
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 ease-in-out"
          onClick={onButtonClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Watch Now
        </motion.button>
      </div>
    </div>
  );
};

export default Banner;