import { Metadata } from 'next';

import Heading from '@/components/ui/Heading';

import { Settings } from './Settings';
import { NO_INDEX_PAGE } from '@/app/constants/seo.constants';

export const meta: Metadata = {
	title: 'Settings',
	...NO_INDEX_PAGE,
};

export default function SettingsPage() {
	return (
		<div>
			<Heading title="Settings" />
			<Settings />
		</div>
	);
}
