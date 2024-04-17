import styles from './field.module.css';

export const FieldLayout = ({ field, onClick }) => {
	return (
		<div className={styles.app}>
			{field.map((id, index) => (
				<div id={index} className={styles.field} onClick={onClick} key={index}>
					{id}
				</div>
			))}
		</div>
	);
};
