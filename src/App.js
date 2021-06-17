import Result from './components/Result.js'
import Playlist from './components/Playlist.js'

import React, { useState } from "react";
import { nanoid } from "nanoid";

const App = (props) => {
  const [songs, setSongs] = useState(props.songs);
  const [songName, setSongName] = useState('');
  const [results, setResults] = useState(props.results);
  const [isAdded, setIsAdded] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value);  
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(name) {
      addSong(name);
      setName('');
    }
      
    else
      alert("Please add something");
  }

  const addSong = (name) => {
    const newSong = {id: "song-" + nanoid(), name: name, artist: "Vacaloid", isAdded: true};
    setSongs([...songs, newSong]);
  } 

  const toggleIsAdded = (id) => {
    const editedSongList = results.map(result => {
      (id === result.id) 
				? { ...result, isAdded: !songResult.isAdded}
      	: result
    })

    setResults(editedSongList);
    console.log(editedSongList);
  }

  const addResultToPlaylist(name, id) => {
    const newSong = {id: id, name: name, artist: "Vacaloid"};
    setSong([...songs, newSong]);

    const editedSongResultList = songResults.map(songResult => {
      if(id === songResult.id) {
        return { ...songResult, isAdded: true }
        
      }
      return songResult;
    });

		setSong()

    toggleIsAdded(id);
    
  }

  function deleteSong(id) {
    console.log(id);
    const remainingSongs = songs.filter(song => id !== song.id);
    
    setSong(remainingSongs);
    toggleIsAdded(id);
    
    // setResults(editedSongList);
  }
  

  const songList = songs
  .map(
    song => 
        <Playlist 
          key={song.id}
          id={song.id}
          isAdded={isAdded}
          songName={song.name}
          deleteSong={deleteSong}
          songArtist={song.artist}
        >

        </Playlist>
  )

  const songResultsList = songResults
  .map(
    songResult =>
    <Result 
      songTitle={songResult.name} 
      songId={songResult.id }
      songArtist={songResult.artist}
      key={songResult.id}
      isAdded={songResult.isAdded}
      toggleIsAdded={toggleIsAdded}
      addResultToPlaylist={addResultToPlaylist}
      deleteSong={deleteSong}
    />
  )

  const noSongFound = (
    <h4>Nothing found</h4>
  );

  const resultsCount = (
  <h2>{songResultsList.length} results found</h2>
  )


  return (
    <div className="container">
        <div id="nav">
            <div id="logo">
                <img src="images/logo.svg" alt="" id="logo"/>
            </div>

            <div id="user">
                <img src="images/user.svg" alt="" />
            </div>
        </div>
        
        <div id="main">
            <div id="side">
                <div id="musicPlayer">
                    <div id="albumIcon"><img src="images/albumIcon.svg" alt=""/></div>
                    <h2>Gallows bell by Vocaloid</h2>
                    <div id="controls">
                        <img src="images/prev.svg" alt="" />
                        <img src="images/play.svg" alt="" />
                        <img src="images/next.svg" alt="" />
                    </div>
                    <div id="timeline">
                        <div id="timeStart"><p>01:25</p></div>
                        <div id="timelineImage"><img src="images/timeLine.svg" alt="" /></div>
                        <div id="timeEnd"><p>04:11</p></div>
                        
                    </div>
                </div>
                <div id="playlist">
                    <h1>
                        Current Playlist
                    </h1>
                       
                    <ol>

                        {songList.length ? songList : "Nothing added to playlist" }
                        {/* <li>
                          <form 
                            onSubmit={handleSubmit}
                            autoComplete="off"
                          >
                            <input id="addListInput" type="text" onChange={handleChange} value={name}/>
                            <button>
                            <img src="images/add.svg" id="addToList"/>
                            </button>
                          </form>
                        </li> */}
                        
                    </ol>

                    
                    
                </div>
            </div>
            
            <div id="results">
                <div id="search">
                    <img src="images/search.svg" alt=""/>
                    <input type="text" placeholder="Search" value="Vocaloid"/>
                </div>
                
                <div id="results-container">
                      <div><h1>Results</h1><h2>{songResultsList.length ? resultsCount : noSongFound}</h2></div>
                
                    <div className="card-container">
                        {songResultsList}
                    </div>
                </div> 
            </div>
        </div>         
    </div>
  );
}

export default App;
