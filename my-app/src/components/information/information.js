import { store } from '../../store';
import { InformatinLayout } from './InformatinLayout';

export const Informatin = () => {
	const { currentPlayer, isGameEnded, isDraw } = store.getState();
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
