import { Metadata } from 'next';

import Heading from '@/components/ui/Heading';

import TasksView from './TasksView';
import { NO_INDEX_PAGE } from '@/app/constants/seo.constants';

export const meta: Metadata = {
	title: 'Tasks',
	...NO_INDEX_PAGE,
};

const TasksPage = () => {
	return (
		<div>
			<Heading title="Tasks" />
			<TasksView />
		</div>
	);
};

export default TasksPage;
