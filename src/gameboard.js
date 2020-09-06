import ship from "./ship";
const gameboard = (ship) => {
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

	function recieveAttack() {}
	return {
		board,
	};
};
export default gameboard;
