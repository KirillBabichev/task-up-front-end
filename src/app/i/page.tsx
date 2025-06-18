import { Metadata } from 'next';

import { NO_INDEX_PAGE } from '../constants/seo.constants';

export const meta: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE,
};

const DashboardPage = () => {
	return <div>Dashboard</div>;
};

export default DashboardPage;
