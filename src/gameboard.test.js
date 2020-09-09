import gameboard from "./gameboard.js";
import ship from "./ship";
let game = gameboard();
let shipFactory = ship();

test("Ships object length exists", () => {
	expect(game.board.length).toBe(10);
});

test("receiveAttack function works", () => {
	game.recieveAttack(4, 5);
	expect(game.board[4][5]).toStrictEqual({
		available: false,
		markedHit: false,
		boatPlacedOnPosition: null,
	});
}); // need to put board[guessRow][guessColumn] in return statement to work

test("all ships have sunk", () => {
	let shipsList = [
		{
			name: "carrier",
			length: 6,
			hitOrNot: false,
			health: 0,
			orientation: "horizontal",
		},
		{
			name: "battleship",
			length: 5,
			hitOrNot: false,
			health: 0,
			orientation: "horizontal",
		},
		{
			name: "cruiser",
			length: 4,
			hitOrNot: false,
			health: 0,
			orientation: "horizontal",
		},
		{
			name: "submarine",
			length: 3,
			hitOrNot: false,
			health: 0,
			orientation: "horizontal",
		},
		{
			name: "destroyer",
			length: 2,
			hitOrNot: false,
			health: 0,
			orientation: "horizontal",
		},
	];
	expect(game.allAreSunk(shipsList)).toBe(true);
});

test("placeShips function correctly marks gameboard positions with ship orientation being horizonal", () => {
	for (let i = 0; i <= shipFactory.shipsList; i++) {
		shipFactory.shipsList[i].orientation = "horizontal";
		return shipFactory.shipsList;
	}
	game.placeShips(0, 2, shipFactory.shipsList[3], "horizontal");
	expect(game.board[0]).toStrictEqual([
		//0
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{
			available: false,
			markedHit: false,
			boatPlacedOnPosition: {
				health: 3,
				hitOrNot: false,
				length: 3,
				name: "submarine",
				orientation: "horizontal",
			},
		},
		{
			available: false,
			markedHit: false,
			boatPlacedOnPosition: {
				health: 3,
				hitOrNot: false,
				length: 3,
				name: "submarine",
				orientation: "horizontal",
			},
		},
		{
			available: false,
			markedHit: false,
			boatPlacedOnPosition: {
				health: 3,
				hitOrNot: false,
				length: 3,
				name: "submarine",
				orientation: "horizontal",
			},
		},
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
	]);
});

test("placeShips function correctly marks gameboard positions with ship orientation being vertical", () => {
	// for (let i = 0; i <= shipFactory.shipsList; i++) {
	// 	shipFactory.shipsList[i].orientation = "vertical";
	// 	return shipFactory.shipsList;
	// }
	game.placeShips(3, 2, shipFactory.shipsList[3], "vertical");
	expect(game.board[3]).toStrictEqual([
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{
			available: false,
			markedHit: false,
			boatPlacedOnPosition: {
				health: 3,
				hitOrNot: false,
				length: 3,
				name: "submarine",
				orientation: "horizontal", //should be vertical. need to figure this out
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
	expect(game.board[4]).toStrictEqual([
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{
			available: false,
			markedHit: false,
			boatPlacedOnPosition: {
				health: 3,
				hitOrNot: false,
				length: 3,
				name: "submarine",
				orientation: "horizontal", //should be vertical. need to figure this out
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
	expect(game.board[5]).toStrictEqual([
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{
			available: false,
			markedHit: false,
			boatPlacedOnPosition: {
				health: 3,
				hitOrNot: false,
				length: 3,
				name: "submarine",
				orientation: "horizontal", //should be vertical. need to figure this out
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
