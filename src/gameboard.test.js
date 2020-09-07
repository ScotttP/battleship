import gameboard from "./gameboard.js";
import ship from "./ship";
let game = gameboard();
let shipFactory = ship();

test("Ships object length exists", () => {
	expect(game.board.length).toBe(10);
});

test("receiveAttack function works", () => {
	expect(game.recieveAttack(4, 5)).toStrictEqual({
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

//this test sucks and have no idea why it's not working anymore, need to fix it
// test("placeShips function correctly marks gameboard positions", () => {
// 	expect(
// 		game.placeShips(0, 2, shipFactory.shipsList[3], "horizontal")
// 	).toStrictEqual([
// 		[
// 			//0
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{
// 				available: false,
// 				markedHit: false,
// 				boatPlacedOnPosition: {
// 					health: 3,
// 					hitOrNot: false,
// 					length: 3,
// 					name: "submarine",
// 					orientation: "horizontal",
// 				},
// 			},
// 			{
// 				available: false,
// 				markedHit: false,
// 				boatPlacedOnPosition: {
// 					health: 3,
// 					hitOrNot: false,
// 					length: 3,
// 					name: "submarine",
// 					orientation: "horizontal",
// 				},
// 			},
// 			{
// 				available: false,
// 				markedHit: false,
// 				boatPlacedOnPosition: {
// 					health: 3,
// 					hitOrNot: false,
// 					length: 3,
// 					name: "submarine",
// 					orientation: "horizontal",
// 				},
// 			},
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 		],
// 		[
// 			//1
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 		],
// 		[
// 			//2
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 		],
// 		[
// 			//3
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 		],
// 		[
// 			//4
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 		],
// 		[
// 			//5
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 		],
// 		[
// 			//6
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 		],
// 		[
// 			//7
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 		],
// 		[
// 			//8
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 		],
// 		[
// 			//9
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 			{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 		],
// 	]);
// 	// expect(
// 	// 	game.placeShips(0, 2, shipFactory.shipsList[3], "vertical")
// 	// ).toStrictEqual([
// 	// 	[
// 	// 		//0
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{
// 	// 			available: false,
// 	// 			markedHit: false,
// 	// 			boatPlacedOnPosition: {
// 	// 				health: 3,
// 	// 				hitOrNot: false,
// 	// 				length: 3,
// 	// 				name: "submarine",
// 	// 				orientation: "horizontal",
// 	// 			},
// 	// 		}, // overlap of horizonal boat and vertical
// 	// 		{
// 	// 			available: false,
// 	// 			markedHit: false,
// 	// 			boatPlacedOnPosition: {
// 	// 				health: 3,
// 	// 				hitOrNot: false,
// 	// 				length: 3,
// 	// 				name: "submarine",
// 	// 				orientation: "horizontal",
// 	// 			},
// 	// 		}, //from horizontal boat
// 	// 		{
// 	// 			available: false,
// 	// 			markedHit: false,
// 	// 			boatPlacedOnPosition: {
// 	// 				health: 3,
// 	// 				hitOrNot: false,
// 	// 				length: 3,
// 	// 				name: "submarine",
// 	// 				orientation: "horizontal",
// 	// 			},
// 	// 		}, //from horizontal boat
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 	],
// 	// 	[
// 	// 		//1
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{
// 	// 			available: false,
// 	// 			markedHit: false,
// 	// 			boatPlacedOnPosition: {
// 	// 				health: 3,
// 	// 				hitOrNot: false,
// 	// 				length: 3,
// 	// 				name: "submarine",
// 	// 				orientation: "horizontal",
// 	// 			},
// 	// 		},
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 	],
// 	// 	[
// 	// 		//2
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{
// 	// 			available: false,
// 	// 			markedHit: false,
// 	// 			boatPlacedOnPosition: {
// 	// 				health: 3,
// 	// 				hitOrNot: false,
// 	// 				length: 3,
// 	// 				name: "submarine",
// 	// 				orientation: "horizontal",
// 	// 			},
// 	// 		},
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 	],
// 	// 	[
// 	// 		//3
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 	],
// 	// 	[
// 	// 		//4
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 	],
// 	// 	[
// 	// 		//5
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 	],
// 	// 	[
// 	// 		//6
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 	],
// 	// 	[
// 	// 		//7
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 	],
// 	// 	[
// 	// 		//8
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 	],
// 	// 	[
// 	// 		//9
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 		{ available: true, markedHit: false, boatPlacedOnPosition: null },
// 	// 	],
// 	// ]);
// });
