import PropTypes from 'prop-types';
import styles from './App.module.css';
import { Informatin } from './components/information/information';
import { Field } from './components/field/field';

export const AppLayout = ({
	currentPlayer,
	isGameEnded,
	isDraw,
	field,
	onClick,
	restarClick,
}) => {
	AppLayout.propTypes = {
		currentPlayer: PropTypes.string,
		isGameEnded: PropTypes.bool,
		isDraw: PropTypes.bool,
		field: PropTypes.array,
		onClick: PropTypes.func,
		restarClick: PropTypes.func,
	};

	return (
		<>
			<header className={styles.header}>
				<Informatin
					field={field}
					isDraw={isDraw}
					isGameEnded={isGameEnded}
					currentPlayer={currentPlayer}
				/>
				<div className={styles.app}>
					<Field
						field={field}
						currentPlayer={currentPlayer}
						onClick={onClick}
					/>
				</div>
				<div className={styles.buttonDiv}>
					<button onClick={restarClick} className={styles.button}>
						Начать заново
					</button>
				</div>
			</header>
		</>
	);
};
