import ship from "./ship";
const shipFactory = ship();
const gameboard = () => {
	let board = Array(10)
		.fill(0)
		.map(() =>
			Array(10)
				.fill(0)
				.map(() => {
					return {
						available: true,
						markedHit: false,
						boatPlacedOnPosition: null,
					};
				})
		);
	function placeShips(placedRow, placedColumn, selectedBoat, shipOrientation) {
		if (shipOrientation === "horizontal") {
			for (let i = 0; i <= selectedBoat.length - 1; i++) {
				board[placedRow][placedColumn].available = false;
				board[placedRow][placedColumn].boatPlacedOnPosition = selectedBoat;
				placedColumn++;
			}
			return board;
		} else if (shipOrientation === "vertical") {
			for (let i = 0; i <= selectedBoat.length - 1; i++) {
				board[placedRow][placedColumn].available = false;
				board[placedRow][placedColumn].boatPlacedOnPosition = selectedBoat;
				placedRow++;
			}
			return board;
		}
	}
	function recieveAttack(guessRow, guessColumn) {
		if (board[guessRow][guessColumn].available === false) {
			board[guessRow][guessColumn].markedHit = true;
			shipFactory.hit(board[guessRow][guessColumn].boatPlacedOnPosition);
		}
	}
	return {
		board,
		placeShips,
		recieveAttack,
	};
};
export default gameboard;
