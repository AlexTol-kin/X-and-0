import { useState } from 'react';
import { WIN_PATTERNS } from './constant/constant';
import { addConditions, restartParam } from './constant/conditions';
import { AppLayout } from './AppLayout';

export const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const restarClick = (event) => {
		const { target } = event;
		restartParam(target, setCurrentPlayer, setIsGameEnded, setIsDraw, setField);
	};

	const onClick = (event) => {
		const { target } = event;
		addNewArray(target);
	};

	const addNewArray = (target) => {
		if (!isGameEnded && !isDraw && target.textContent === '') {
			const newSetField = field.map((id, index) => {
				if (index === Number(target.id) && id === '') {
					return (id = currentPlayer);
				} else {
					return id;
				}
			});
			setField(newSetField);
			checkConditions(newSetField);
		}
	};

	const checkConditions = (array) => {
		for (const index of WIN_PATTERNS) {
			if (
				index.every((value) => array[value] === 'X') ||
				(index.every((value) => array[value] === 'O') &&
					array.some((id) => id === ''))
			) {
				return setIsGameEnded(true);
			}
		}
		if (array.every((id) => id !== '' && !isGameEnded)) {
			return setIsDraw(true);
		}

		addConditions(isGameEnded, currentPlayer, setCurrentPlayer);
	};

	return (
		<AppLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			onClick={onClick}
			restarClick={restarClick}
		/>
	);
};
