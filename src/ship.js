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
			hitPositions: [null, null, null], //yo
		},
		{
			name: "destroyer",
			length: 2,
			hitOrNot: false,
			hitPositions: [null, null],
		},
	];
	function hit(markedPosition = 2, boatType = 0) {
		ships[boatType].hitPositions.splice(markedPosition, 1, "hit");
		return ships[boatType].hitPositions;
	}
	function isSunk(boatType = 0) {
		const allHit = (indexInHitPositions) => indexInHitPositions === "hit";
		if (ships[boatType].hitPositions.every(allHit) === false) {
			return "boat still alive";
		} else {
			return "boat is sunk";
		}
	}
	return {
		hit,
		isSunk,
		ships,
	};
};

export default ship;
