import gameboard from "./gameboard";
import ship from "./ship";
const player = () => {
	let boardFactory = gameboard();
	let shipsFactory = ship();

	function playerTurn(enemyBoard) {
		let turn = true;
		if (turn === true) {
			if (computer) {
				//if the player turn is a computer, might need to fix the logic here.
				enemyBoard.receiveAttack(
					randomCoordinates().randomRow,
					randomCoordinates().randomCol
				);
			} else {
				enemyBoard.receiveAttack(row, col); //row and col need to come from somewhere.
			}
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
