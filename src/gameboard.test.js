import gameboard from "./gameboard.js";
import ship from "./ship";
const boardFactory = gameboard();
const shipFactory = ship();

test("Ships object length exists", () => {
	expect(boardFactory.board.length).toBe(10);
});

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
	expect(boardFactory.allAreSunk(shipsList)).toBe(true);
});

test("placeShips function correctly marks boardFactoryboard positions with ship orientation being horizonal", () => {
	boardFactory.placeShips(0, 2, shipFactory.shipsList[3], "horizontal");

	expect(boardFactory.board[0]).toMatchObject([
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

test("placeShips function correctly marks boardFactoryboard positions with ship orientation being vertical", () => {
	let shipsList = [
		{
			name: "carrier",
			length: 6,
			hitOrNot: false,
			health: 6,
			orientation: "vertical",
		},
		{
			name: "battleship",
			length: 5,
			hitOrNot: false,
			health: 5,
			orientation: "vertical",
		},
		{
			name: "cruiser",
			length: 4,
			hitOrNot: false,
			health: 4,
			orientation: "vertical",
		},
		{
			name: "submarine",
			length: 3,
			hitOrNot: false,
			health: 3,
			orientation: "vertical",
		},
		{
			name: "destroyer",
			length: 2,
			hitOrNot: false,
			health: 2,
			orientation: "vertical",
		},
	];
	boardFactory.placeShips(3, 2, shipsList[3], "vertical");

	expect(boardFactory.board[3]).toMatchObject([
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
				orientation: "vertical",
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
	expect(boardFactory.board[4]).toMatchObject([
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
				orientation: "vertical",
			},
		},
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null }, //isn't supposed to be true
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
		{ available: true, markedHit: false, boatPlacedOnPosition: null },
	]);
	expect(boardFactory.board[5]).toMatchObject([
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
				orientation: "vertical",
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

test("receiveAttack function works", () => {
	boardFactory.recieveAttack(9, 9);
	expect(boardFactory.board[9][9]).toMatchObject({
		available: false,
		markedHit: false,
		boatPlacedOnPosition: null,
	});
});
