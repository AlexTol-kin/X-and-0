export const addConditions = (isGame, player, setPlayer) => {
	if (!isGame) {
		switch (player) {
			case 'X':
				setPlayer('O');
				break;
			case 'O':
				setPlayer('X');
				break;
			default:
				break;
		}
	}
};

export const restartParam = (target, setPlayer, isGame, draw, field) => {
	if (target) {
		setPlayer('X');
		isGame(false);
		draw(false);
		field(['', '', '', '', '', '', '', '', '']);
	}
};
