'use client';

import React, { useState, useEffect } from 'react';
import MoviePage from './MoviePage';

const FetchData = async (query) => {
  try {
    const response = await fetch(`https://itunes.apple.com/search?term=${query}&media=movie`);
    // if (!response.ok) throw new Error("Failed to fetch");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};

const Movie = () => {
  const [defaultMovies, setDefaultMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    const fetchDefault = async () => {
      const actionMovie = await FetchData("marvel");
      const dcMovie = await FetchData("dc");
      const modrenMovie = await FetchData("2023");
      const comedyMovie = await FetchData("comedy");
      const dramaMovie = await FetchData("drama");

      setDefaultMovies([
        { title: "Action Trailers", movies: actionMovie },
        { title: "DC", movies: dcMovie },
        { title: "Modern Movies", movies: modrenMovie },
        { title: "Comedy Movies", movies: comedyMovie },
        { title: "Drama Movies", movies: dramaMovie },
      ]);
    };

    fetchDefault();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;

    const results = await FetchData(searchQuery);
    setSearchResults([{ title: `Search Results for "${searchQuery}"`, movies: results }]);
  };

  return (
    <div>
     <div 
     >
       <form onSubmit={handleSearch} style={{ padding: '10px' , display: "flex", justifyContent: "center", width: '100%' , height:"100%", paddingTop:'2%'}} >
       
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a movie"
            style={{ padding: '1.5%', width: '60%' , border: '1px solid blue', borderRadius: '8px' , background:"black", color:"white"}}
          />
          <button type="submit" style={{ padding: '5px 30px', marginLeft: '10px', borderRadius: '8px'  , border: '1px solid blue' }}>Search</button>
          
        </form>
        </div>
        
      <header>
        <h1 style={{ padding: '10px' }}>Movie Flex</h1>
      </header>

      {searchResults ? (
        <MoviePage movies={searchResults} />
      ) : (
        <MoviePage movies={defaultMovies} />
      )}
    </div>
  );
};

export default Movie;
