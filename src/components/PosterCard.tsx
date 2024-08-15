import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';

interface MovieCardProps {
  posterPath: string;
  title: string;
  onClick: () => void;
}

const PosterCard: React.FC<MovieCardProps> = ({ posterPath, title, onClick }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        height={300}
        width={200}
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Button text="Watch Now" onClick={onClick} />
      </div>
    </motion.div>
  );
};

export default PosterCard;
