import React, { Component } from 'react';
<<<<<<< HEAD
import axios from 'axios';
=======
>>>>>>> 7d01367d3021dfc03a3f3ecec687fbbde4a12e09
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json'

class App extends Component {
  constructor(){
    super();
    this.state = {
      movie: example
    }
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  _searchByTitle = () => {
<<<<<<< HEAD
    axios.get("http://img.omdbapi.com/?i=tt2294629&apikey=d31f1a94")
      .then((res) => {
        console.log(res);
        const movieTitle = res.data.t;
        this.setState({movieTitle: movieTitle});
      })
=======
>>>>>>> 7d01367d3021dfc03a3f3ecec687fbbde4a12e09
    console.log("Search by Title");
  }

  _searchById = () => {
<<<<<<< HEAD
    axios.get("http://img.omdbapi.com/?i=tt2294629&apikey=d31f1a94")
      .then((res) => {
        console.log(res);
        const movieId = res.data.i;
        this.setState({movieId: movieId});
      })
=======
>>>>>>> 7d01367d3021dfc03a3f3ecec687fbbde4a12e09
    console.log("Search by ID");
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
<<<<<<< HEAD
        <Search searchByTitle={this._searchByTitle} searchById={this._searchById}/>
        <Movie movieTitle={this.state.movie} />
=======
        <Search />
        <Movie />
>>>>>>> 7d01367d3021dfc03a3f3ecec687fbbde4a12e09
      </div>
    );
  }
}

export default App;
