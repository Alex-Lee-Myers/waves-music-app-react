

const LibrarySong = ({song}) => {
    return (
        <div className="library-song">
            <img src={song.cover} alt={`Cover art for the song ${song.name} by ${song.artist}`} className="cover" />
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
        </div>
    )
}

export default LibrarySong;