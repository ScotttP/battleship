import React from "react";
import { render } from "@testing-library/react";
import ship from "./ship";
let Ships = ship();

test("Ships object length exists", () => {
	expect(Ships.ships[0].length).toBe(6);
});
test("ships hit positions", () => {
	expect(Ships.ships[2].hitPositions[2]).toBe(null);
});
test("position is marked as hit", () => {
	expect(Ships.hit()).toStrictEqual([null, null, "hit", null, null, null]);
});
