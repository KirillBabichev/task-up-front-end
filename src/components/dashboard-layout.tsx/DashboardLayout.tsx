import { PropsWithChildren } from 'react';

import { DashboardSidebar } from '../dashboardSidebar/DashboardSidebar';
import { DashboardHeader } from '../hearder/DashboardHeader';

export default function DashboardLayout({
	children,
}: PropsWithChildren<unknown>) {
	return (
		<div className="grid min-h-screen 2xl:grid-cols-[1.1fr_6fr] grid-cols-[1.2fr_6fr] shrink-0">
			<DashboardSidebar />

			<main className="p-big-layout overflow-x-hidden max-h-screen required:">
				<DashboardHeader />
				{children}
			</main>
		</div>
	);
}
