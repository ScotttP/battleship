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
	function hit(hitPosition) {}
	function isSunk() {
		console.log(ships.length);
	}
	return {
		hit,
		isSunk,
		ships,
	};
};

export default ship;
