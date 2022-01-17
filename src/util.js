//! Skip Forward ():
export const skipForward = async (songs, currentSong, setCurrentSong, isPlaying, audioRef) => {
	let currentIndex = (songs.findIndex((song) => song.id === currentSong.id));
	await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
	if (isPlaying) audioRef.current.play();
}