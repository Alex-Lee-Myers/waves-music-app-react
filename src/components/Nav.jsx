import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
    //! States:

    //! Event Handlers:
    const openLibraryHandler = () => {
        setLibraryStatus(!libraryStatus);
    };

    //! Render UI:
    return (
        <nav>
            <h1>Waves</h1>
            
            <button
            className={libraryStatus ? "library-active" : ""}
            onClick={openLibraryHandler}
            >
                Library
            <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
            </button>
        </nav>
    );
};

export default Nav;
