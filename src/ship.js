const ship = () => {
	const ships = [
		{
			name: "carrier",
			length: 6,
			hitOrNot: false,
			hitPositions: [null, null, null, null, null, null],
		},
		{
			name: "battleship",
			length: 5,
			hitOrNot: false,
			hitPositions: [null, null, null, null, null],
		},
		{
			name: "cruiser",
			length: 4,
			hitOrNot: false,
			hitPositions: [null, null, null, null],
		},
		{
			name: "submarine",
			length: 3,
			hitOrNot: false,
			hitPositions: [null, null, null],
		},
		{
			name: "destroyer",
			length: 2,
			hitOrNot: false,
			hitPositions: [null, null],
		},
	];
	function hit(markedPosition = 2, boatType = 0) {
		ships[(boatType = 0)].hitPositions.splice(markedPosition, 1, "hit");
		return ships[(boatType = 0)].hitPositions;
	}
	function isSunk() {
		console.log(ships[0].length);
	}
	return {
		hit,
		isSunk,
		ships,
	};
};

export default ship;
