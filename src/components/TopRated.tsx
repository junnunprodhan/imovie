import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

interface Movie {
  posterPath: string;
  title: string;
}

interface MoviesGridProps {
  movies: Movie[];
}

const TopRated: React.FC<MoviesGridProps> = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < movies.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div className="relative mt-5">
      <h4 className="text-xl font-semibold mb-4">Now Playing</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.slice(currentIndex, currentIndex + itemsPerPage).map((movie, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              height={300}
              width={200}
              src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
              alt={movie.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              {/* Additional content can be added here */}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-y-0 right-4 flex flex-col justify-center space-y-2">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`text-gray-600 p-2 rounded-full shadow-lg ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + itemsPerPage >= movies.length}
          className={`text-gray-600 p-2 rounded-full shadow-lg ${
            currentIndex + itemsPerPage >= movies.length ? 'opacity-50 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TopRated;

