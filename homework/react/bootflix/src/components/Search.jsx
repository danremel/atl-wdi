import React from 'react';

// Update the forms to utilize methods being passed down from App.js
const Search = () => {
  return (
    <section id="movie-search">
      <strong>Search by:</strong> Title <em>or</em> ID

      <div className="search">
        <form id="title-search-form" method="get">
          <input type="text" name="title" placeholder="Enter movie title" />
<<<<<<< HEAD
          <input onClick={this.searchByTitle} type="submit" value="Search for this title" />
=======
          <input type="submit" value="Search for this title" />
>>>>>>> 7d01367d3021dfc03a3f3ecec687fbbde4a12e09
        </form>
      </div>

      <div className="search">
        <form id="id-search-form" method="get">
          <input type="text" name="id" placeholder="Enter omdb movie ID" />
<<<<<<< HEAD
          <input onClick={this.searchById} type="submit" value="Search by ID" />
=======
          <input type="submit" value="Search by ID" />
>>>>>>> 7d01367d3021dfc03a3f3ecec687fbbde4a12e09
        </form>
      </div>

    </section>
  );
};

export default Search;