import { useEffect, useState } from 'react';
import { AppLayout } from './AppLayout';
import { store } from './store';
import { checkConditions } from './utils/checkConditions';
import { WIN_PATTERNS } from './constant';

export const App = () => {
	const [myState, setMyState] = useState(false);
	const { field, currentPlayer, isGameEnded } = store.getState();

	useEffect(() => {
		checkConditions(field, WIN_PATTERNS, isGameEnded, currentPlayer);
		const unsubscribe = store.subscribe(() => {
			setMyState(!myState);
		});
		return () => {
			unsubscribe();
		};
	});

	return <AppLayout />;
};
