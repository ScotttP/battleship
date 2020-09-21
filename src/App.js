import React from "react";
import ship from "./ship";
import gameboard from "./gameboard.js";
import player from "./player";
import "./App.css";
function App() {
	let userBoard = gameboard();
	//let computerBoard = gameboard();
	function gameLoop() {
		// let user = player();
		// let computer = player();
		// let userShips = ship();
		// let computerShips = ship();
		// while (
		// 	userShips.shipsList.every((ship) => ship.health > 0) ||
		// 	computerShips.shipsList.every((ship) => ship.health > 0)
		// ) {
		// 	console.log(userShips.shipsList[0].health);
		// }
	}

	return (
		<div className="App">
			{userBoard.board.map((row, i) => {
				return row.map((cell, j) => {
					return <div>cell</div>;
				});
			})}
		</div>
	);
}

export default App;
