import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player = ({audioRef, currentSong, isPlaying, setIsPlaying, songInfo, setSongInfo}) => {
    //! States:

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

    //! Render UI:
    return (
        <div className="player">

            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                    min={0} 
                    max={songInfo.duration} 
                    value={songInfo.currentTime} 
                    type="range"
                    onChange={dragHandler}
                    />
                <p>{getTime(songInfo.duration)}</p>
            </div>

            <div className="play-control">
            <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
            <FontAwesomeIcon onClick={playSongHandler} className="play-button" size="2x" icon={isPlaying ? faPause : faPlay} />
            <FontAwesomeIcon className="skip-forward" size="2x"icon={faAngleRight} />
            </div>

        </div>
        
    )
}

export default Player;