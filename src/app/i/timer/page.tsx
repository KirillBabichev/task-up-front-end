import type { Metadata } from 'next';

import Heading from '@/components/ui/Heading';

import { Timer } from './Timer';
import { NO_INDEX_PAGE } from '@/app/constants/seo.constants';

export const metadata: Metadata = {
	title: 'Pomodoro timer',
	...NO_INDEX_PAGE,
};

export const PomodoroTimerPage = () => {
	return (
		<div>
			<Heading title="Pomodoro timer" />
			<Timer />
		</div>
	);
};

export default PomodoroTimerPage;
