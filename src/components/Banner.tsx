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

import React from 'react';
import Button from './Button';

interface BannerProps {
    posterPath: string;
    title: string;
}

const Banner: React.FC<BannerProps> = ({ posterPath, title }) => {
    // You can replace the posterPic with the actual posterPath passed as a prop
    const posterPic = posterPath || '/https://i.ibb.co/KV9dG1z/super.jpg';
    const extraTitle = title || 'SUPER NATURAL';
    const handleClick = () => {
        console.log('Button clicked!');
      };

    console.log(posterPath, title);

    return (
        <div 
            className="hero mb-5"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${extraTitle})`,
                height: '300px', // Set the height of the hero section to 300px
                backgroundSize: 'cover', // Ensure the image covers the entire section
                backgroundPosition: 'center', // Center the image
            }}
        >
            <div className='flex'>
            </div>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <Button text="Watch Now" onClick={handleClick} />
                </div>
            </div>
        </div>
    );
};

export default Banner;

