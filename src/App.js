import React from 'react';
import HighScoreTable from './HighScoreTable' ;
import allCountryTable from './countryData/allCountryScores'
import './App.css';
import PlayerScore from './PlayerScore';

const App =()=> {
  return (
    <div>
      <HighScoreTable countryData={allCountryTable}  />
      <br/>
      {/* <PlayerScore countryData={allCountryTable} /> */}
    </div>
  );
}

export default App;
