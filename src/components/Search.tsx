// components/Search.tsx
import React, { useState } from 'react';


const Search: React.FC = () => {
  const [query, setQuery] = useState<string>('');



  return (
    <div className="relative flex items-center ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
    </div>
  );
};

export default Search;
