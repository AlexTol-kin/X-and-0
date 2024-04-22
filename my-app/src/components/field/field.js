import { store } from '../../store';
import { FieldLayout } from './fieldLayout';
import { WIN_PATTERNS } from '../../constant';
import { checkConditions, nextPlayer } from '../../utils';
import { useSelector } from 'react-redux';
import {
	selectCurrentPlayer,
	selectField,
	selectIsDraw,
	selectIsGameEnded,
} from '../../selectors';

export const Field = () => {
	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isGameEnded = useSelector(selectIsGameEnded);
	const isDraw = useSelector(selectIsDraw);

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
