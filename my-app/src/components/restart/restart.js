import { EMPTY_FIELD, PLAYER } from '../../constant';
import { store } from '../../store';
import styles from './restart.module.css';

export const Restart = () => {
	const restarClick = () => {
		store.dispatch({ type: 'PLAYING FIELD', payload: EMPTY_FIELD });
		store.dispatch({ type: 'NEXT PLAYER', payload: PLAYER.CROSS });
		store.dispatch({ type: 'GAME END', payload: false });
		store.dispatch({ type: 'IS DRAW', payload: false });
	};

	return (
		<div className={styles.buttonDiv}>
			<button onClick={restarClick} className={styles.button}>
				Начать заново
			</button>
		</div>
	);
};
