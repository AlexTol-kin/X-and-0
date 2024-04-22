import { useSelector } from 'react-redux';
import { InformatinLayout } from './InformatinLayout';
import { selectCurrentPlayer, selectIsDraw, selectIsGameEnded } from '../../selectors';

export const Informatin = () => {
	const currentPlayer = useSelector(selectCurrentPlayer);
	const isDraw = useSelector(selectIsDraw);
	const isGameEnded = useSelector(selectIsGameEnded);

	const winPlayer = currentPlayer === 'X' ? 'O' : 'X';

	return (
		<InformatinLayout
			winPlayer={winPlayer}
			currentPlayer={currentPlayer}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
		/>
	);
};
