import Song from './components/Song.jsx';
import Player from './components/Player.jsx';
// importing Styles/scss file
import './styles/app.scss';
// import data from data.js
import data from './data.js';

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;