import { store } from '../../store';
import { FieldLayout } from './fieldLayout';
import { WIN_PATTERNS } from '../../constant';
import { checkConditions, nextPlayer } from '../../utils';

export const Field = () => {
	const { field, currentPlayer, isGameEnded, isDraw } = store.getState();

	const onClick = ({ target }) => {
		if (!isGameEnded && !isDraw && target.textContent === '') {
			const newField = field.map((id, index) => {
				if (index === Number(target.id) && id === '') {
					return (id = currentPlayer);
				} else {
					return id;
				}
			});

			store.dispatch({ type: 'PLAYING FIELD', payload: newField });

			checkConditions(newField, WIN_PATTERNS, isGameEnded, currentPlayer);
		}

		nextPlayer(currentPlayer, isGameEnded);
	};

	return <FieldLayout field={field} onClick={onClick} />;
};
