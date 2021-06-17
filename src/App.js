import Nav from './components/Nav'
import Main from './components/Main'
import React, {useState} from "react";

const App = (props) => {
	const [playlist, setPlaylist] = useState(props.currentPlaylist)
	const [results, setResults] = useState(props.results)
	return (
    <div className="container">
				<Nav/>
				<Main 
				currentPlaylist={playlist}
				setPlaylist={setPlaylist}  
				results={results}
				setResults={setResults}
				/>
					
    </div>
  );
}

export default App;
