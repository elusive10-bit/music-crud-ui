import Nav from './components/Nav'
import Main from './components/Main'
import React, {useState} from "react";

const App = (props) => {
	const [playlist, setPlaylist] = useState(props.currentPlaylist)
	return (
    <div className="container">
				<Nav/>
				<Main 
				currentPlaylist={playlist}
				setPlaylist={setPlaylist}  
				results={props.results}
				/>
					
    </div>
  );
}

export default App;
