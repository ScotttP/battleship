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
			hitPositions: [null, null, null],
		},
		{
			name: "destroyer",
			length: 2,
			hitOrNot: false,
			hitPositions: [null, null],
		},
	];
	function hit(markedPosition, selectedBoat) {
		shipsList[selectedBoat].hitPositions.splice(markedPosition, 1, "hit");
		isSunk(selectedBoat);
		return shipsList[selectedBoat].hitPositions;
	}
	function isSunk(selectedBoat) {
		const allHit = (indexInHitPositions) => indexInHitPositions === "hit";
		if (shipsList[selectedBoat].hitPositions.every(allHit) === false) {
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
