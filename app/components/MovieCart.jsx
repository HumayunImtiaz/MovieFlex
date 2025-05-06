"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function MovieCart({ movie }) {
  const pixel = movie.artworkUrl100.replace("100x100", "500x500");
  const [ishover, sethover] = useState(false);
  const router=useRouter()

  return (
    <div
      className="movie-card"
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
      onClick={()=>router.push(`/${movie.trackId}`)}
    
    >
      {ishover && movie.previewUrl ? (
        <video src={movie.previewUrl} autoPlay loop className="hover-preview" />
      ) : (
        <img src={pixel} alt={movie.trackName} className="movie-image" />
      )}
      <div className="details">
        <h2>{movie.trackName}</h2>
        <p>{movie.primaryGenreName}</p>
      </div>
    </div>
  );
}

export default MovieCart;
