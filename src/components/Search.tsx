// components/Search.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';



const Search: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = async () => {
  
  };

  return (
    <div className="relative flex items-center ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <motion.button
        onClick={handleSearch}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-0 top-0 h-full px-4 bg-blue-500 text-white rounded-r-lg"
      >
        Search
      </motion.button>
    </div>
  );
};

export default Search;
