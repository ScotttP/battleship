const ship = () => {
	const ships = {
		length: 6,
	};
	function hit() {
		console.log(ships.length);
	}
	function isSunk() {
		console.log(ships.length);
	}
	return {
		hit,
		isSunk,
	};
};

export default ship;
