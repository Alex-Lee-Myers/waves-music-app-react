

const LibrarySong = ({song, cover, songs, setSongs, id, currentSong, setCurrentSong, audioRef, isPlaying}) => {
    //! States:
    //? None

    //! Event Handlers:
    const songSelectHandler = async () => {
        const selectedSong = songs.filter((state) => state.id === id);
        await setCurrentSong({ ...selectedSong[0] });
        //Set Active in library
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                };
                } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs);
    
        //Play audio
        if (isPlaying) audioRef.current.play();
    };

    //! Render UI
    return (
        <div 
            onClick={songSelectHandler} 
            className={`library-songs ${song.id === currentSong.id ? "selected" : ""} `}
        >
            <img src={cover} alt={`Cover art for the song ${song.name} by ${song.artist}`} className="cover" />
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;