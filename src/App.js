import Nav from './components/Nav'
import Main from './components/Main'
import React from "react";

const App = (props) => {
	
	return (
    <div className="container">
				<Nav/>
				<Main currentPlaylist={props.currentPlaylist} results={props.results}/>
					
    </div>
  );
}

export default App;
