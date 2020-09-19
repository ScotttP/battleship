import { player } from "./player";

test("user board and enemy board exists", () => {
	const player1 = player();
	const computer = player();

	player1.boardFactory.placeShips(0, 0, player1.shipsFactory.shipsList[4]);
	computer.boardFactory.placeShips(1, 1, computer.shipsFactory.shipsList[4]);

	expect(player1.boardFactory.board[0]).toMatchObject([
		{
			available: false,
			markedHit: false,
			boatPlacedOnPosition: {
				name: "destroyer",
				length: 2,
				hitOrNot: false,
				health: 2,
				orientation: "horizontal",
			},
		},
		{
			available: false,
			markedHit: false,
			boatPlacedOnPosition: {
				name: "destroyer",
				length: 2,
				hitOrNot: false,
				health: 2,
				orientation: "horizontal",
			},
		},
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
	]);
	expect(computer.boardFactory.board[1]).toMatchObject([
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{
			available: false,
			markedHit: false,
			boatPlacedOnPosition: {
				name: "destroyer",
				length: 2,
				hitOrNot: false,
				health: 2,
				orientation: "horizontal",
			},
		},
		{
			available: false,
			markedHit: false,
			boatPlacedOnPosition: {
				name: "destroyer",
				length: 2,
				hitOrNot: false,
				health: 2,
				orientation: "horizontal",
			},
		},
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
	]);
});
test("randomCoordinates function returns coordinates between 0-9", () => {
	const player1 = player();

	expect(player1.randomCoordinates().randomRow).toBeGreaterThanOrEqual(0);
	expect(player1.randomCoordinates().randomCol).toBeLessThanOrEqual(9);
});
test("testing if playerTurn function works", () => {
	const player1 = player();
	const computer = player();
	let enemyBoard = computer.boardFactory;
	let row = computer.randomCoordinates().randomRow;
	let col = computer.randomCoordinates().randomCol;
	let thisTurn = player1.playerTurn(enemyBoard, row, col);

	expect(thisTurn).toBe(false);
});
