import ship from "./ship";
let Ships = ship();

test("Ships object length exists", () => {
	expect(Ships.shipsList[0].length).toBe(6);
});
test("ships hit positions", () => {
	expect(Ships.shipsList[2].hitPositions[2]).toBe(null);
});
test("position is marked as hit", () => {
	expect(Ships.hit(2, 0)).toStrictEqual([null, null, "hit", null, null, null]);
});
test("is sunk function works. all positions are marked as hit", () => {
	expect(Ships.isSunk(0)).toBe("boat still alive");
});
