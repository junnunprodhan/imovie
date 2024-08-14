import Image from 'next/image';
import React from 'react';

interface MovieCardProps {
  posterPath: string;
  title: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ posterPath, title }) => {
  return (
    <div className="text-center">
      <Image
      width={200}
      height={250}
        src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
        alt={title}
        className="img-fluid"
      />
      <p className="mt-2">{title}</p>
    </div>
  );
};

export default MovieCard;
