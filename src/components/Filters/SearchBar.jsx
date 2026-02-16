import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search pokemon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
