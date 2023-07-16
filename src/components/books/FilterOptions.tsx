import React, { useState } from 'react';

interface FilterOptionsProps {
  onFilter: (selectedGenre: string) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ onFilter }) => {
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = event.target.value;
    setSelectedGenre(genre);
    onFilter(genre);
  };

  return (
    <div>
      <div>
        <label htmlFor="genre-select" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Sort Book
        </label>
        <select
          id="genre-select"
          value={selectedGenre}
          onChange={handleGenreChange}
          className="w-full p-2 mb-4 bg-gray-200 rounded-md"
        >
          <option value="">All Genres</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-fiction">Non-fiction</option>
          <option value="Mystery">Mystery</option>
          {/* Add more genre options as needed */}
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;
