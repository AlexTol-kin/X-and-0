import styles from './information.module.css';

export const InformatinLayout = ({ currentPlayer, isDraw, isGameEnded }) => {
	return (
		<>
			<div className={styles.spanDiv}>
				<span className={styles.span}>
					{isGameEnded
						? `Победа: ${currentPlayer}`
						: isDraw
							? 'Ничья'
							: `Ходит: ${currentPlayer}`}
				</span>
			</div>
		</>
	);
};
