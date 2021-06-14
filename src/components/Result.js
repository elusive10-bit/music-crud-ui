import React, { useState } from "react"

export default function Result(props) {
    const [isAdded, setIsAdded] = useState(props.isAdded);
    
    function addResult(e) {
        props.addResultToPlaylist(props.songTitle, props.songId);
        props.toggleIsAdded(props.songId);
    } 

    function deleteResult() {
        props.deleteSong(props.songId);
        props.toggleIsAdded(props.songId);
    }

    const songAddedToPlaylist = (
        <img src="images/remove.svg" name="Song Title" alt="" onClick={deleteResult}
        />
    );

    const songNotAddedToPlaylist = (
        <img src="images/add.svg" name="Song Title" alt="" onClick={addResult}/>
    );


    
    return(
        <div className="card">
            <div className="card-image"><img src="images/playThumbnail.svg" alt=""/></div>
            <div className="card-body">
            <h3>{props.songTitle}</h3>
                
                {!props.isAdded ? songNotAddedToPlaylist : songAddedToPlaylist}
                
            </div>
        </div>
    );
    
}