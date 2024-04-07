import React, { Component } from 'react';
import './App.css';
import Banner from './Component/Banner/Banner';
import NavBar from './Component/NavBar/NavBar';
import Posters from './Component/RowPosters/Posters';
import { Orginals, action, comedy, documentary, horror, romance, trending } from './Urls/urls';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Posters url={Orginals} title={'Netflix Orginals'} />
      <Posters url={trending} title={'Trending Now'} isSmall />
      <Posters url={action} title={'Action'} isSmall />
      <Posters url={comedy} title={'Comedy'} isSmall />
      <Posters url={romance} title={'Romance'} isSmall />
      <Posters url={horror} title={'Horror'} isSmall />
      <Posters url={documentary} title={'Documentary'} isSmall />
      {Component}

      
    </div>
  );
}

export default App;
