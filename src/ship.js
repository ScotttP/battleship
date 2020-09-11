const ship = () => {
	let shipsList = [
		{
			name: "carrier",
			length: 6,
			hitOrNot: false,
			health: 6,
			orientation: "horizontal",
		},
		{
			name: "battleship",
			length: 5,
			hitOrNot: false,
			health: 5,
			orientation: "horizontal",
		},
		{
			name: "cruiser",
			length: 4,
			hitOrNot: false,
			health: 4,
			orientation: "horizontal",
		},
		{
			name: "submarine",
			length: 3,
			hitOrNot: false,
			health: 3,
			orientation: "horizontal",
		},
		{
			name: "destroyer",
			length: 2,
			hitOrNot: false,
			health: 2,
			orientation: "horizontal",
		},
	];
	function hit(selectedBoat) {
		shipsList[selectedBoat].health -= 1;
		isSunk(selectedBoat);
		return shipsList[selectedBoat].health;
	}
	function isSunk(selectedBoat) {
		return shipsList[selectedBoat].health > 0 ? "not sunk" : "sunk";
	}
	return {
		hit,
		isSunk,
		shipsList,
	};
};

export default ship;
