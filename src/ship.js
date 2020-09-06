const ship = () => {
	const shipsList = [
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
	function hit(markedPosition, boatType) {
		shipsList[boatType].hitPositions.splice(markedPosition, 1, "hit");
		isSunk(boatType);
		return shipsList[boatType].hitPositions;
	}
	function isSunk(boatType) {
		const allHit = (indexInHitPositions) => indexInHitPositions === "hit";
		if (shipsList[boatType].hitPositions.every(allHit) === false) {
			return "boat still alive";
		} else {
			return "boat is sunk";
		}
	}
	return {
		hit,
		isSunk,
		shipsList,
	};
};

export default ship;
