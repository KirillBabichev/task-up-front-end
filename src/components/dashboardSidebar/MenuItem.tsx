import Link from 'next/link';

import { TMenuItem } from './menu.types';

export const MenuItem = ({ item }: { item: TMenuItem }) => {
	return (
		<div>
			<Link
				href={item.link}
				className="flex gap-2.5 items-center py-1.5 mt-2 px-layout transition-colors hover:bg-border rounded-lg"
			>
				<item.icon />
				<span>{item.name}</span>
			</Link>
		</div>
	);
};
