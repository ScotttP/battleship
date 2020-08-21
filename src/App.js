import React from "react";
import ship from "./ship";
import "./App.css";
const shipObj = ship();
function App() {
	shipObj.hit();
	return (
		<div className="App">
			<h1>My Battleship App</h1>
		</div>
	);
}

export default App;
