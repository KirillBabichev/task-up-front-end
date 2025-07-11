import { Metadata } from 'next';

import Heading from '@/components/ui/Heading';

import { NO_INDEX_PAGE } from '../constants/seo.constants';

import Statistics from './Statistics';

export const meta: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE,
};

const DashboardPage = () => {
	return (
		<div>
			<Heading title="Statistics" />
			<Statistics />
		</div>
	);
};

export default DashboardPage;
