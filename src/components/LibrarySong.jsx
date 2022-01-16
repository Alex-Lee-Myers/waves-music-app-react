

const LibrarySong = ({song, songs, setCurrentSong, audioRef, isPlaying}) => {
    //! States:
    //? None

    //! Event Handlers:
    const songSelectHandler = () => {
        //* Grab all the songs and filter them out.
        //* Then set the current song to the one that was clicked on.
        setCurrentSong(song);
        audioRef.current.play()
        //check if the song is playing
        //if it is playing, pause it
        //if it is not playing, play it
        if(isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) { //* This is a check to see if the browser supports the play promise.
                playPromise.then((audio) => { //* This is a check to see if the song is playing.
                    audioRef.current.play(); //* This is to play the song.
                }).catch((error) => {
                    console.log(error); 
                });
            }
        }
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