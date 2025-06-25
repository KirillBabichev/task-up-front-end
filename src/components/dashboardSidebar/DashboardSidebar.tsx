import { GanttChartSquare } from 'lucide-react';
import Link from 'next/link';

import { LogoutButton } from './LogoutButton';
import { MenuItem } from './MenuItem';
import { MENU } from './menu.data';
import { COLORS } from '@/app/constants/color.constants';

export const DashboardSidebar = () => {
	return (
		<aside className="border-r border-r-border h-full bg-sidebar flex flex-col justify-between">
			<div>
				<Link
					href="/"
					className="flex items-center gap-2.5 p-layout border-b border-b-border"
				>
					<GanttChartSquare
						color={COLORS.primary}
						size={38}
					/>
					<span className="text-2xl font-bold relative">
						Task Up
						<span className="absolute -top-1 -right-6 text-xs opacity-40 rotate-[18deg] font-normal">
							pet project
						</span>
					</span>
				</Link>
				<div className="p-3 relative">
					<LogoutButton />
					{MENU.map((item) => (
						<MenuItem
							item={item}
							key={item.link}
						/>
					))}
				</div>
			</div>
			<footer className="text-xs opacity-40 font-normal text-center p-layout">
				2025 &copy; With love from{' '}
				<a
					href="https://www.linkedin.com/in/kirill-babichev-8a17b5124/"
					target="_blank"
					rel="noreferrer"
					className="hover:text-primary text-brand-300 transition-colors"
				>
					Kirill Babichev
				</a>
				. <br /> All rights reserved.
			</footer>
		</aside>
	);
};
