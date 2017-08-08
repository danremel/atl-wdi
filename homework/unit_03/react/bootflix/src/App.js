import React, { Component } from 'react';
import axios from 'axios';
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
    axios.get("http://img.omdbapi.com/?i=tt2294629&apikey=d31f1a94")
      .then((res) => {
        console.log(res);
        const movieTitle = res.data.t;
        this.setState({movieTitle: movieTitle});
      })
    console.log("Search by Title");
  }

  _searchById = () => {
    axios.get("http://img.omdbapi.com/?i=tt2294629&apikey=d31f1a94")
      .then((res) => {
        console.log(res);
        const movieId = res.data.i;
        this.setState({movieId: movieId});
      })
    console.log("Search by ID");
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search searchByTitle={this._searchByTitle} searchById={this._searchById}/>
        <Movie movieTitle={this.state.movie} />
      </div>
    );
  }
}

export default App;
