import gameboard from "./gameboard";
import ship from "./ship";
const player = (userName, enemyName) => {
	let user = userName;
	let enemy = enemyName;
	let boardFactory = gameboard();
	let shipsFactory = ship();

	function playerTurn() {}
	return { user, enemy, boardFactory, shipsFactory };
};

export { player };
