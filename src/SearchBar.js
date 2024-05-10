import React, { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from "./constants";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      axios.get(`${BACKEND_URL}/api/posts/search?term=${searchTerm}`)
        .then(response => {
          onSearch(response.data);
        })
        .catch(error => {
          console.error('Ошибка поиска:', error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleChange} placeholder="Поиск..." />
      <button type="submit">Искать</button>
    </form>
  );
}

export default SearchBar;
