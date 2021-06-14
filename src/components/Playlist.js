import React from "react";

// The properties can change according to what is passed

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    }
  }
  handleClick() {
        props.deleteSong(props.id);
        console.log(props.songArtist);
        alert("Hello World");
    }
    
    render() {
      <li 
        >
          <div><img src="images/albumIconCircle.svg" alt=""/><h4>{props.songName} by {props.songArtist}</h4></div>
          <div>
            <button disabled={this.state.disabled} onClick={handleClick}><img src="images/removePlaylistSong.svg" alt=""/></button>
          </div>
          
          
        </li>
    }
        
}
    