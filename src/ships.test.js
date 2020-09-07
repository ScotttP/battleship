import ship from "./ship";
let shipFactory = ship();

test("shipFactory object length exists", () => {
	expect(shipFactory.shipsList[0].length).toBe(6);
});
test("position is marked as hit", () => {
	expect(shipFactory.hit(0)).toBe(5);
});
test("is sunk function works. all positions are marked as hit", () => {
	expect(shipFactory.isSunk(0)).toBe("not sunk");
});
