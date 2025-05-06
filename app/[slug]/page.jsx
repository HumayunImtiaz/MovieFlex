"use client";
import React, { useEffect, useState } from "react";

function Page({ params }) {
  const { slug } = React.use(params);
  const [movie, setmovieparams] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://itunes.apple.com/lookup?id=${slug}`
      );
      const data = await response.json();
      console.log(data);
      setmovieparams(data.results[0]); // Only set the movie object
    };

    fetchData();
  }, [slug]);
  if (!movie) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="movie-detail-page">
      <div className="movie-detail-container">
        {movie.previewUrl && (
          <video
            src={movie.previewUrl}
            controls
            autoPlay
            className="movie-video"
            style={{ border: "1px solid blue" }}
          />
        )}
        <div className="movie-info">
          <h1>{movie.trackName}</h1>
          <p>
            <strong>Geners : </strong> {movie.primaryGenreName}
          </p>
          <p>
            <strong>Release Date : </strong> {movie.releaseDate}
          </p>
          <p>
            <strong>Description : </strong> {movie.longDescription}
          </p>
          <button className="back-button" onClick={() => window.history.back()}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
