import React from "react";

// Update this Movie component with info from OMDB
// BONUS: Use OMDB's Poster API to add a poster to each movie.
const Movie = () => {
  return (
    <section id="movie-listing">
      <div className="movie">
        <h3>{this.searchByTitle}</h3>
        <p>
          <strong>Released:</strong> {this.Released}<br />
          <strong>Directed By:</strong> {this.Director}<br />
          <em>Genre:</em>{this.Genre}
        </p>
        <p>{this.Plot}</p>
      </div>
    </section>
  );
};

export default Movie;


