import { useState } from 'react';

import Song from './components/Song.jsx';
import Player from './components/Player.jsx';
// importing Styles/scss file
import './styles/app.scss';
// import data from data.js
import data from './data.js';

function App() {
  //? States:
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]); //? Setting state to index 0 of the data array so a song already loads on page load.
  const [isPlaying, setIsPlaying] = useState(false);


  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} songs={songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  );
}

export default App;