import { FieldLayout } from './fieldLayout';

export const Field = ({ field, currentPlayer, onClick }) => {
	return <FieldLayout field={field} onClick={onClick} currentPlayer={currentPlayer} />;
};
