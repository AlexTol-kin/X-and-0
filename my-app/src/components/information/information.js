import { InformatinLayout } from './InformatinLayout';

export const Informatin = ({ currentPlayer, isGameEnded, isDraw }) => {
	return (
		<InformatinLayout
			currentPlayer={currentPlayer}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
		/>
	);
};
