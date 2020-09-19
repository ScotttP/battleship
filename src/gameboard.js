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
	function placeShips(placedRow, placedColumn, selectedBoat) {
		if (selectedBoat.orientation === "horizontal") {
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
		} else if (selectedBoat.orientation === "vertical") {
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
	function receiveAttack(guessRow, guessColumn) {
		if (
			board[guessRow][guessColumn].available === false &&
			board[guessRow][guessColumn].boatPlacedOnPosition !== null
		) {
			board[guessRow][guessColumn].markedHit = true;
			shipFactory.hit(board[guessRow][guessColumn].boatPlacedOnPosition);
			allAreSunk(shipFactory.shipsList);
			console.log("hit");
		} else if (
			board[guessRow][guessColumn].available === true &&
			board[guessRow][guessColumn].boatPlacedOnPosition === null
		) {
			board[guessRow][guessColumn].available = false;
			//mark it as missed
		} else if (
			board[guessRow][guessColumn].available === false &&
			board[guessRow][guessColumn].boatPlacedOnPosition === null
		) {
			console.log(
				"these coordinates have already been taken and cannot be used anymore"
			);
		}
		return board;
	}
	function allAreSunk(listOfShips) {
		return listOfShips.every((ship) => ship.health === 0);
	}
	return {
		board,
		placeShips,
		receiveAttack,
		allAreSunk,
	};
};
export default gameboard;
