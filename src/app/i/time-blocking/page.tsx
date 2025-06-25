import type { Metadata } from 'next';

import Heading from '@/components/ui/Heading';

import { TimeBlocking } from './TimeBlocking';
import { NO_INDEX_PAGE } from '@/app/constants/seo.constants';

export const metadata: Metadata = {
	title: 'Time blocking',
	...NO_INDEX_PAGE,
};

export const TimeBlockingPage = () => {
	return (
		<div>
			<Heading title="Time blocking" />
			<TimeBlocking />
		</div>
	);
};

export default TimeBlockingPage;
