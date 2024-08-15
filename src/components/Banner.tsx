// import React from 'react';

// interface BannerProps {
//     posterPath: string;
//     title: string;
//   }
// const Banner: React.FC<BannerProps> = ({ posterPath, title }) => {
//     const posterPic = '/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg'
//     console.log(posterPath,title)
//   return (
//     <div
//       className="hero min-h-screen"
//       style={{
//         backgroundImage:`url( {https://image.tmdb.org/t/p/w500${posterPic }})`,
//       }}
//     >
//       <div className="hero-overlay bg-opacity-60"></div>
//       <div className="hero-content text-neutral-content text-center">
//         <div className="max-w-md">
//           <h1 className="mb-5 text-5xl font-bold">{title}</h1>
//           <button className="btn btn-primary">Get Started</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
// import SeeMoreButton from './SeeMoreButton';

// interface BannerProps {
//     posterPath: string;
//     title: string;
// }

// const Banner: React.FC<BannerProps> = ({ posterPath, title }) => {
//     // You can replace the posterPic with the actual posterPath passed as a prop
//     const posterPic = posterPath || '/https://i.ibb.co/KV9dG1z/super.jpg';
//     const extraTitle = title || 'SUPER NATURAL';
//     const handleClick = () => {
//         console.log('Button clicked!');
//       };

//     console.log(posterPath, title);

//     return (
//         <div 
//             className="hero mb-5"
//             style={{
//                 backgroundImage: `url(https://image.tmdb.org/t/p/w500${extraTitle})`,
//                 height: '300px', // Set the height of the hero section to 300px
//                 backgroundSize: 'cover', // Ensure the image covers the entire section
//                 backgroundPosition: 'center', // Center the image
//             }}
//         >
//             <div className='flex'>
//             </div>
//             <div className="hero-overlay bg-opacity-60"></div>
//             <div className="hero-content text-neutral-content text-center">
//                 <div className="max-w-md">
//                     <h1 className="mb-5 text-5xl font-bold">{title}</h1>
//                     <SeeMoreButton text="Watch Now" onClick={handleClick} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;

// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import SeeMoreButton from './SeeMoreButton';

// interface BannerProps {
//   title: string;
//   buttonText: string;
//   imageUrl: string;
//   onButtonClick?: () => void;
// }

// const Banner: React.FC<BannerProps> = ({ title, buttonText, imageUrl, onButtonClick }) => {

//     const handleClick = () => {
//                 console.log('Button clicked!');
//               };
//   return (
//     <div className="relative w-full h-60">
//       <div className="absolute inset-0">
//         <Image
//           src={imageUrl}
//           alt={title}
//           layout="fill"
//           objectFit="cover"
//           className="w-full h-full"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//       </div>
//       <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
//         <motion.h1
//           className="text-3xl md:text-4xl font-bold mb-4"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {title}
//         </motion.h1>
//         <SeeMoreButton text="Watch Now" onClick={handleClick} />
//       </div>
//     </div>
//   );
// };

// export default Banner;


// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// interface BannerProps {
//   title: string;
//   buttonText: string;
//   imageUrl: string;
//   onButtonClick?: () => void;
// }

// const Banner: React.FC<BannerProps> = ({ title, buttonText, imageUrl, onButtonClick }) => {
//   return (
//     <div className="relative w-full h-60">
//       <div className="absolute inset-0">
//         <Image
//           src={imageUrl}
//           alt={title}
//           layout="fill"
//           objectFit="cover"
//           className="w-full h-full"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//       </div>
//       <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
//         <motion.h1
//           className="text-3xl md:text-4xl font-bold mb-4"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {title}
//         </motion.h1>
//         <motion.button
//           className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 ease-in-out"
//           onClick={onButtonClick}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           {buttonText}
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default Banner;



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
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
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
          {buttonText}
        </motion.button>
      </div>
    </div>
  );
};

export default Banner;