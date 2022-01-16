import LibrarySong from "./LibrarySong";

const Library = ({songs, setCurrentSong, audioRef, isPlaying}) => {
    return (
        <div className="library">
            <h2>Library</h2>
            <div>
                {songs.map((song) => (
                        <LibrarySong 
                            song={song} //? This is the individual song and their information
                            songs={songs} //? This is the array of songs that is being passed in
                            // setSongs={setSongs} //? This is the function that is being passed in
                            setCurrentSong={setCurrentSong} //? This is the function to change the current song to something else
                            id={song.id} //? This is the id of the song
                            key={song.id} //? This is a unique key for each song that React requires
                            // audioRef={song.audioRef} //? This is the audioRef of the song
                            // isPlaying={song.isPlaying} //? This is the isPlaying state of the song
                            audioRef={audioRef} //? This is the audioRef of the song
                            isPlaying={isPlaying} //? This is the isPlaying state of the song
                        />
                ))}
            </div>
        </div>
    )
}

export default Library;