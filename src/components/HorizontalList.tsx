import React from 'react';
import MovieCard from './MovieCard';

interface HorizontalListProps {
  items: { posterPath: string; title: string }[];
}

const HorizontalList: React.FC<HorizontalListProps> = ({ items }) => {
  return (
    <div className="flex overflow-x-auto space-x-4">
      {items.map((item, index) => (
        <div key={index} className="flex-shrink-0">
          <MovieCard posterPath={item.posterPath} title={item.title} />
        </div>
      ))}
    </div>
  );
};

export default HorizontalList;

