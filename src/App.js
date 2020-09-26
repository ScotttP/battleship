import React from "react";
import ship from "./ship";
import gameboard from "./gameboard.js";
import player from "./player";
import "./App.css";
function App() {
	let userBoard = gameboard();
	let computerBoard = gameboard();
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
			<div id="gameBoardContainer">
				<div id="userGameboardContainer">
					<h1>User Gameboard</h1>
					<div className="gameBoardStyling">
						{userBoard.board.map((row, i) => {
							return row.map((col) => {
								return <div class="gameboardGrid"></div>;
							});
						})}
					</div>
				</div>
				<div id="computerGameboardContainer">
					<h1>Computer Gameboard</h1>
					<div className="gameBoardStyling">
						{computerBoard.board.map((row, i) => {
							return row.map((col) => {
								return <div class="gameboardGrid"></div>;
							});
						})}
					</div>
				</div>
			</div>
			<div id="userShipsContainer">Ships</div>
		</div>
	);
}

export default App;
