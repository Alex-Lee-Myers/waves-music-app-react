import LibrarySong from "./LibrarySong";

const Library = ({songs, setCurrentSong}) => {
    return (
        <div className="library">
            <h2>Library</h2>
            <div>
                {songs.map((song, index) => (
                        <LibrarySong 
                            key={index} 
                            song={song}
                            setCurrentSong={setCurrentSong}
                        />
                ))}
            </div>
        </div>
    )
}

export default Library;