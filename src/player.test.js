import { player } from "./player";

test("user board and enemy board exists", () => {
	const playerFactory1 = player("Scott", "Computer");
	const playerFactory2 = player("Computer", "Scott");

	playerFactory1.boardFactory.placeShips(
		0,
		0,
		playerFactory1.shipsFactory.shipsList[4],
		playerFactory1.shipsFactory.shipsList[4].orientation
	);
	playerFactory2.boardFactory.placeShips(
		1,
		1,
		playerFactory2.shipsFactory.shipsList[4],
		playerFactory2.shipsFactory.shipsList[4].orientation
	);

	expect(playerFactory1).toMatchObject({ user: "Scott", enemy: "Computer" });
	expect(typeof playerFactory1.boardFactory).toBe("object");

	// expect(playerFactory1.boardFactory.board).toBe(0);
	// expect(playerFactory2.boardFactory.board).toBe(0);
	console.log(playerFactory1.boardFactory.board); // need to make a test for this.
	console.log(playerFactory2.boardFactory.board); // need to make a test for this.
});
