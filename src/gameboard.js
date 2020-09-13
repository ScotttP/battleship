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
			if (board[placedRow][placedColumn].available === true) {
				for (let i = 0; i <= selectedBoat.length - 1; i++) {
					board[placedRow][placedColumn].available = false;
					board[placedRow][placedColumn].boatPlacedOnPosition = selectedBoat;
					placedColumn++;
				}
				return board;
			} else {
				console.log("board position taken");
			}
		} else if (shipOrientation === "vertical") {
			if (board[placedRow][placedColumn].available === true) {
				for (let i = 0; i <= selectedBoat.length - 1; i++) {
					board[placedRow][placedColumn].available = false;
					board[placedRow][placedColumn].boatPlacedOnPosition = selectedBoat;
					placedRow++;
				}
				return board;
			} else {
				console.log("board position taken");
			}
		}
	}
	function recieveAttack(guessRow, guessColumn) {
		if (board[guessRow][guessColumn].available === false) {
			board[guessRow][guessColumn].markedHit = true;
			shipFactory.hit(board[guessRow][guessColumn].boatPlacedOnPosition);
			allAreSunk(shipFactory.shipsList);
		} else {
			board[guessRow][guessColumn].available = false;
		}
		return board;
	}
	function allAreSunk(listOfShips) {
		return listOfShips.every((ship) => ship.health === 0);
	}
	return {
		board,
		placeShips,
		recieveAttack,
		allAreSunk,
	};
};
export default gameboard;
