import React, { Component } from 'react';
import Contact from './components/Contact';
import Description from './components/Description';
import LocationList from './components/LocationList';
import MenuList from './components/MenuList';
import NavBar from './components/NavBar';
import SplashImage from './components/SplashImage';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SplashImage />
        <Description />
        <MenuList />
        <LocationList />
        <Contact />
      </div>
    );
  }
}

export default App;
