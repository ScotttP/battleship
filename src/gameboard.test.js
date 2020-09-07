import gameboard from "./gameboard.js";
import ship from "./ship";
let game = gameboard();

test("Ships object length exists", () => {
	expect(game.board.length).toBe(10);
});

test("placeShips function correctly marks gameboard positions", () => {
	expect(game.placeShips(0, 2, 3, "horizontal")).toStrictEqual([
		[
			//0
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: false, markedHit: false },
			{ available: false, markedHit: false },
			{ available: false, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
		],
		[
			//1
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
		],
		[
			//2
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
		],
		[
			//3
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
		],
		[
			//4
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
		],
		[
			//5
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
		],
		[
			//6
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
		],
		[
			//7
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
		],
		[
			//8
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
		],
		[
			//9
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
		],
	]);
	expect(game.placeShips(0, 2, 3, "vertical")).toStrictEqual([
		[
			//0
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: false, markedHit: false }, // overlap of horizonal boat and vertical
			{ available: false, markedHit: false }, //from horizontal boat
			{ available: false, markedHit: false }, //from horizontal boat
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
		],
		[
			//1
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: false, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
		],
		[
			//2
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: false, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
		],
		[
			//3
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
		],
		[
			//4
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
		],
		[
			//5
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
		],
		[
			//6
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
		],
		[
			//7
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
		],
		[
			//8
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
		],
		[
			//9
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
			{ available: true, markedHit: false },
		],
	]);
});
