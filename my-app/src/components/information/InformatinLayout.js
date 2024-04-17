import styles from './information.module.css';

export const InformatinLayout = ({ winPlayer, currentPlayer, isDraw, isGameEnded }) => {
	return (
		<div className={styles.spanDiv}>
			<span className={styles.span}>
				{isGameEnded
					? `Победа: ${winPlayer}`
					: isDraw
						? 'Ничья'
						: `Ходит: ${currentPlayer}`}
			</span>
		</div>
	);
};
