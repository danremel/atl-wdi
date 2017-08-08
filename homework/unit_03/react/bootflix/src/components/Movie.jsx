import React from "react";

// Update this Movie component with info from OMDB
// BONUS: Use OMDB's Poster API to add a poster to each movie.
const Movie = () => {
  return (
    <section id="movie-listing">
      <div className="movie">
<<<<<<< HEAD
        <h3>{this.searchByTitle}</h3>
        <p>
          <strong>Released:</strong> {this.Released}<br />
          <strong>Directed By:</strong> {this.Director}<br />
          <em>Genre:</em>{this.Genre}
        </p>
        <p>{this.Plot}</p>
=======
        <h3>Movie Title</h3>
        <p>
          <strong>Released:</strong> 1984<br />
          <strong>Directed By:</strong> Some director<br />
          <em>Genre:</em>
        </p>
        <p>Plotline should go inside of here</p>
>>>>>>> 7d01367d3021dfc03a3f3ecec687fbbde4a12e09
      </div>
    </section>
  );
};

export default Movie;


