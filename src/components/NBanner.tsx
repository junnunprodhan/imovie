import React from 'react';

interface BannerProps {
  posterPath: string;
  title: string;
}

const NBanner: React.FC<BannerProps> = ({ posterPath, title }) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${posterPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default NBanner;
