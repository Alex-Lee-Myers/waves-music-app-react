import LibrarySong from "./LibrarySong";

const Library = ({libraryStatus, songs, setSongs, currentSong, setCurrentSong, audioRef, isPlaying}) => {
    //! States:

    //! Event Handlers:


    //! Render:
    return (
        <div className={`library ${libraryStatus ? `library-active` : ``}`}>
            <h2>Library</h2>
            <ul>
                {songs.map((song) => (
                        <LibrarySong 
                            active={song.active} //? This is the active state of the song
                            artist={song.artist} //? This is the artist of the song
                            audioRef={audioRef} //? This is the audioRef of the song
                            cover={song.cover} //? This is the cover of the song
                            currentSong={currentSong} //? This is the current song that is being passed in
                            setCurrentSong={setCurrentSong} //? This is the function to change the current song to something else
                            id={song.id} //? This is the id of the song
                            isPlaying={isPlaying} //? This is the isPlaying state of the song
                            key={song.id.toString()} //? This is a unique key for each song that React requires
                            name={song.name} //? This is the name of the song
                            song={song} //? This is the individual song and their information
                            songs={songs} //? This is the array of songs that is being passed in
                            setSongs={setSongs} //? This is the function that is being passed in
                        />
                ))}
            </ul>
        </div>
    )
}

export default Library;