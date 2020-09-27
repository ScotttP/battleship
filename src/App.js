import React from "react";
import ship from "./ship";
import gameboard from "./gameboard.js";
import player from "./player";
import "./App.css";
function App() {
	let userBoard = gameboard();
	let computerBoard = gameboard();

	return (
		<div className="App">
			<div id="appContainer">
				<div id="gameBoardContainer">
					<div id="userShipsContainer">Ships</div>
					<div id="userGameboardContainer">
						<h1>User Gameboard</h1>
						<div className="gameBoardStyling">
							{userBoard.board.map((row) => {
								console.log(row);
								return row.map((col) => {
									//col shows the object contents
									return <div class="gameboardGrid"></div>;
								});
							})}
						</div>
					</div>
					<div id="computerGameboardContainer">
						<h1>Computer Gameboard</h1>
						<div className="gameBoardStyling">
							{computerBoard.board.map((row) => {
								return row.map((col) => {
									return <div class="gameboardGrid"></div>;
								});
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
