

const LibrarySong = ({song, songs, setCurrentSong}) => {
    //! States:
    //? None

    //! Event Handlers:
    const songSelectHandler = () => {
        //* Grab all the songs and filter them out.
        //* Then set the current song to the one that was clicked on.
        setCurrentSong(song);
    };


    //! Render UI
    return (
        <div onClick={songSelectHandler} className="library-songs">
            <img src={song.cover} alt={`Cover art for the song ${song.name} by ${song.artist}`} className="cover" />
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;