import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faStop, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
    //! States:
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });


    //! Event Handlers
        //? useRef:
            const audioRef = useRef();
            //* How do you play a song and grab the audio element?
            //* If you need to grab a specific HTML tag, you can use a ref (useRef)
            
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

        //? Time Update Handler
            //* This is where it updates the current time of the song
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({
            ...songInfo,
            currentTime: current,
            duration,   //* This is the same as writing duration: duration
        });
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

    //! Render UI
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

            <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio> 
            {/*? This is where the audio file is being imported. If you add "controls", it gives a basic player. We don't want that. */}
            {/*? The onLoadedMetadata event is where the duration of the song is being grabbed. */}
            {/*? The onTimeUpdate event is where the current time of the song is being grabbed. */}

        </div>
        
    )
}

export default Player;