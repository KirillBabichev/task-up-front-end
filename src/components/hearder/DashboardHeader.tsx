import { FC } from 'react';

import { GlobalLoader } from './GlobalLoader';
import Profile from './profile/Profile';

export const DashboardHeader: FC = (): React.ReactElement => {
	return (
		<header>
			<GlobalLoader />
			<Profile />
		</header>
	);
};
