import React, { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" className="text-center mb-4 w-96 p-2 border border-gray-600 rounded" value={searchQuery} onChange={handleOnChange} placeholder="Search your favourite photo" />
    </form>
  );
};

export default SearchBar;