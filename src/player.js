const player = () => {
	function playerTurn(enemyBoard, guessedRow, guessedCol) {
		let turn = true;
		if (turn === true) {
			enemyBoard.receiveAttack(guessedRow, guessedCol); //row and col need to come from somewhere.
		}
		turn = false;
		return turn;
	}
	function randomCoordinates() {
		let randomRow = Math.floor(Math.random() * 9);
		let randomCol = Math.floor(Math.random() * 9);
		return { randomRow, randomCol };
	}
	return { playerTurn, randomCoordinates };
};

export default player;
