import Nav from './components/Nav'
import Main from './components/Main'
import Side from './components/Side'
import React from "react";

const App = (props) => {
  console.log(props)
	
	return (
    <div className="container">
				<Nav/>
				<Main />
					
    </div>
  );
}

export default App;
