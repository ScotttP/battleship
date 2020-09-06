import gameboard from "./gameboard.js";
let game = gameboard();

test("Ships object length exists", () => {
	expect(game.board.length).toBe(10);
});
