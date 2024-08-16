// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import Image from 'next/image';
// import Button from './Button';

// interface Movie {
//   posterPath: string;
//   title: string;
// }

// interface MoviesGridProps {
//   movies: Movie[];
// }

// const NowPlaying: React.FC<MoviesGridProps> = ({ movies }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerPage = 4;

//   const nowPlayingMovies = movies?.map((item: any) => ({
//     posterPath: item.poster_path,
//     title: item.title,
//   }));

//   const handleNext = () => {
//     if (currentIndex + itemsPerPage < movies.length) {
//       setCurrentIndex(currentIndex + itemsPerPage);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - itemsPerPage);
//     }
//   };
//   const handleClick = () => {
//     console.log('Button clicked!');
//   };

//   return (
//     <div className="relative mt-5">
//       <h4 className="text-xl font-semibold mb-4">Now Playing</h4>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {nowPlayingMovies.slice(currentIndex, currentIndex + itemsPerPage).map((movie, index) => (
            
//           <motion.div
//             key={index}
//             className="bg-white shadow-lg rounded-lg overflow-hidden"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <Image
//             height={300}
//             width={200}
//               src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
//               alt={movie.title}
//               className="w-full h-60 object-cover"
//             />
//             <div className="p-4">
//             <Button text="Watch Now" onClick={handleClick} />
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <div className="absolute top-0 right-0 flex space-x-4 mt-1 mr-2">
//         <button
//           onClick={handlePrevious}
//           disabled={currentIndex === 0}
//           className={`btn text-gray-600 p-2 rounded-full shadow-lg ${
//             currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
//           }`}
//         >
//           <FaArrowLeft />
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={currentIndex + itemsPerPage >= movies.length}
//           className={`btn text-gray-600 p-2 rounded-full shadow-lg ${
//             currentIndex + itemsPerPage >= movies.length ? 'opacity-50 cursor-not-allowed' : ''
//           }`}
//         >
//           <FaArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NowPlaying;

import React, { useState } from 'react';
import MovieGrid from './MovieGrid';
import NavigationButtons from './NavigationButtons';

interface Movie {
  posterPath: string;
  title: string;
}

interface NowPlayingProps {
  movies: Movie[];
}

const NowPlaying: React.FC<NowPlayingProps> = ({ movies}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const nowPlayingMovies = movies?.map((item: any) => ({
        posterPath: item.poster_path,
        title: item.title,
      }));

  const handleNext = () => {
    if (currentIndex + itemsPerPage < nowPlayingMovies.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="relative mt-24">
      <h4 className="text-xl font-semibold mb-4">Now Playing</h4>

      <MovieGrid
        movies={nowPlayingMovies}
        currentIndex={currentIndex}
        itemsPerPage={itemsPerPage}
        onClick={handleClick}
      />

      <NavigationButtons
        onPrevious={handlePrevious}
        onNext={handleNext}
        disablePrevious={currentIndex === 0}
        disableNext={currentIndex + itemsPerPage >= nowPlayingMovies.length}
      />
    </div>
  );
};

export default NowPlaying;



