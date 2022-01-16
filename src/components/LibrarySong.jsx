

const LibrarySong = ({song}) => {
    return (
        <div className="library-songs">
            <img src={song.cover} alt={`Cover art for the song ${song.name} by ${song.artist}`} className="cover" />
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;