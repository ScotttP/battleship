import { player } from "./player";
let user = player("Scott");

test("user board and enemy board exists", () => {
	expect(user).toBe(10);
});
