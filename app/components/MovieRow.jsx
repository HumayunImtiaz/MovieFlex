import React from 'react'
import MovieCart from './MovieCart'

function MovieRow({title,movies}) {
  return (
    <div className='movie-row mb-10 '> 
    <h2>{title}</h2>
    <div className='flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-4'>
    {
        movies.map((movie)=>(
            <MovieCart key={movie.trackId} movie={movie}/>
        ))
    }
    </div>
    </div>
  )
}

export default MovieRow