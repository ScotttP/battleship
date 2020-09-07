import React from "react";
import ship from "./ship";
import gameboard from "./gameboard.js";
import "./App.css";
function App() {
	let game = gameboard();
	game.placeShips(0, 2, 3, "vertical");
	console.log(game.board);
	return (
		<div className="App">
			<h1>My Battleship App</h1>
		</div>
	);
}

export default App;
