type THeading = {
	title: string;
};

const Heading = ({ title }: THeading) => {
	return (
		<div>
			<h1 className="text-3xl font-medium text-white">{title}</h1>
			<div className="my-3 h-0.5 bg-border w-full" />
		</div>
	);
};

export default Heading;
