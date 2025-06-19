'use client';

import Loader from '@/components/ui/Loader';

import useProfile from '@/hooks/useProfile';

const Statistics = () => {
	const { data, isLoading } = useProfile();

	if (isLoading) <Loader />;

	return (
		<div className="grid grid-cols-4 gap-12 mt-7">
			{data?.statistics.length ? (
				data.statistics.map((item: any) => (
					<div
						className="bg-border/5 rounded p-layout text-center
                    hover:-translate-y-3 transition-transform duration-500"
						key={item.value}
					>
						<div className="text-xl">{item.label}</div>
						<div className="text-3xl font-semibold">{item.value}</div>
					</div>
				))
			) : (
				<div>Statistic not loaded!</div>
			)}
		</div>
	);
};

export default Statistics;
