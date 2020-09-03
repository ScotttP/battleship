import React from "react";
import { render } from "@testing-library/react";
import Ship from "./ship";
let Ships = Ship();

test("Ships object length exists", () => {
	expect(Ships.ships[0].length).toBe(6);
});
test("ships hit positions", () => {
	expect(Ships.ships[2].hitPositions[2]).toBe(null);
});
