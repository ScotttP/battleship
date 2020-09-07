import React from "react";
import ship from "./ship";
import gameboard from "./gameboard.js";
import "./App.css";
function App() {
	let game = gameboard();
	let shipFactory = ship();
	game.placeShips(0, 2, shipFactory.shipsList[3], "horizontal");
	console.log(game.board);
	return (
		<div className="App">
			<h1>My Battleship App</h1>
		</div>
	);
}

export default App;
