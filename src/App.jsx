import { useState, useRef } from 'react';

import Song from './components/Song.jsx';
import Player from './components/Player.jsx';
import Library from './components/Library.jsx';
import Nav from './components/Nav.jsx';
//! importing Styles/scss file
import './styles/app.scss';
//! import data from data.js
import data from './data.js';
// import util that contains skipForward function
import {skipForward} from './util.js';

function App() {
  //! useRef:
  const audioRef = useRef();
    //* How do you play a song and grab the audio element?
    //* If you need to grab a specific HTML tag, you can use a ref (useRef)

  //! States:
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]); //? Setting state to index 0 of the data array so a song already loads on page load.
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
});

  //! Event Handlers:

  const songEndHandler = async () => {
    skipForward(songs, currentSong, setCurrentSong, isPlaying, audioRef);
  };


  //? Time Update Handler
  //* This is how you update the current time of the song
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //* Calculate the percentage of the song that has been played
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const percentage = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      animationPercentage: percentage,
      volume: e.target.volume,
    });
  };

  //! Render UI
  return (
    <div className={`App ${libraryStatus ? "library-active mobile-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song 
        currentSong={currentSong} 
      />
      <Player 
        audioRef={audioRef}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
      />
      <Library 
        audioRef={audioRef}
        currentSong={currentSong} 
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        songs={songs}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio 
        onLoadedMetadata={timeUpdateHandler} 
        onTimeUpdate={timeUpdateHandler} 
        ref={audioRef} 
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio> 
            {/*? This is where the audio file is being imported. If you add "controls", it gives a basic player. We don't want that. */}
            {/*? The onLoadedMetadata event is where the duration of the song is being grabbed. */}
            {/*? The onTimeUpdate event is where the current time of the song is being grabbed. */}
    </div>
  );
}

export default App;