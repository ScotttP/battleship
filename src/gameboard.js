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
					};
				})
		);
	function placeShips(row, column, shipLength, shipOrientation) {
		if (shipOrientation === "horizontal") {
			for (let i = 0; i <= shipLength - 1; i++) {
				board[row][column].available = false;
				column++;
			}
			return board;
		} else if (shipOrientation === "vertical") {
			for (let i = 0; i <= shipLength - 1; i++) {
				board[row][column].available = false;
				row++;
			}
			return board;
			//keep the same column, increase the row based on shipLength
		}
		//game.board[row][column]
		//return shipFactory.shipsList[0].length; //returns the ship selected's length
	}
	function recieveAttack() {}
	return {
		board,
		placeShips,
	};
};
export default gameboard;
