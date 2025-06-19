'use client';

import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import { FC } from 'react';

import Loader from '../ui/Loader';

export const GlobalLoader: FC = (): React.ReactElement | null => {
	const isMutating = useIsMutating();
	const isFetching = useIsFetching();

	const isLoaderActive = isFetching || isMutating;

	if (!isLoaderActive) return null;

	return (
		<div className="fixed top-layout right-layout z-50">
			<Loader />
		</div>
	);
};
