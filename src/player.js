import gameboard from "./gameboard";
import ship from "./ship";
const player = () => {
	let boardFactory = gameboard();
	let shipsFactory = ship();

	function playerTurn(enemyBoard, guessedRow, guessedCol) {
		let turn = true;
		if (turn === true) {
			enemyBoard.receiveAttack(guessedRow, guessedCol); //row and col need to come from somewhere.
			console.log("else");
		}
		turn = false;
	}

	function randomCoordinates() {
		let randomRow = Math.floor(Math.random() * 9);
		let randomCol = Math.floor(Math.random() * 9);
		return { randomRow, randomCol };
	}
	return { boardFactory, shipsFactory, playerTurn, randomCoordinates };
};

export { player };
