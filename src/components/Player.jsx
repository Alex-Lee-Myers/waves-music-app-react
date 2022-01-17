import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {skipForward} from '../util.js';

const Player = ({
    audioRef, 
    currentSong, 
    setCurrentSong, 
    isPlaying, 
    setIsPlaying, 
    songInfo, 
    setSongInfo,
    songs,
    setSongs, 
    }) => {
    //! States:

    //! ActiveLibraryHandler:
    const activeLibraryHandler = (song) => {
        const newSongs = songs.map((song) => {
            if(song.id === currentSong.id) {
                return {
                    ...song,
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        });
        setSongs(newSongs);
    }


    //! Event Handlers:
        //? Play/Pause Button 
    const playSongHandler = () => {
        if(isPlaying) {
            audioRef.current.pause(); //* Pause the song
            setIsPlaying(!isPlaying); //* Change the state of isPlaying to false
        } else {
            audioRef.current.play(); //* Play the song
            setIsPlaying(!isPlaying); //* Change the state of isPlaying to true
        }
    };

        //? getTime function to convert seconds to minutes and seconds
    const getTime = (time) => { 
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2) //* This is a helper function to convert seconds to minutes and seconds
            //* Slice(-2) is a way to get the last two digits of a number
        );
    };

        //? dragHandler for the progress bar
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value; //? This is how you set the current time of the song
        setSongInfo({...songInfo, currentTime: e.target.value}); //
    };

        //? skipTrackHandler for the skip buttons
    const skipTrackHandler = async (direction) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id); //? This is how you find the index of the current song
        //Forward Back
        if (direction === "skip-forward") {
            skipForward(songs, currentSong, setCurrentSong, isPlaying, audioRef); //? % is the modulus operator, this is how you get the remainder of a number
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length]); //? 
        }
        if (direction === "skip-back") {
            if ((currentIndex - 1) % songs.length === -1) {
            await setCurrentSong(songs[songs.length - 1]);
            activeLibraryHandler(songs[songs.length - 1]);
            if (isPlaying) audioRef.current.play();
            return;
            }
            await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
        }
        if (isPlaying) audioRef.current.play();
    };

        //!  Styles:
    //* Add the styles to the player
    const trackAnim = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }

    const progressGradientBar = {
        background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`
    }


    //! Render UI:
    return (
        <div className="player">

            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={progressGradientBar} className ="track">
                <input 
                    min={0} 
                    max={songInfo.duration || 0}
                    value={songInfo.currentTime} 
                    type="range"
                    onChange={dragHandler}
                    />
                    <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>

            <div className="play-control">
            <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className="skip-back" size="2x" icon={faAngleLeft} />
            <FontAwesomeIcon onClick={playSongHandler} className="play-button" size="2x" icon={isPlaying ? faPause : faPlay} />
            <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className="skip-forward" size="2x"icon={faAngleRight} />
            </div>

        </div>
        
    )
}

export default Player;