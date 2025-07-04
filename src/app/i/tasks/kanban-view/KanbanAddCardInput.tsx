import { type Dispatch, type SetStateAction } from 'react';

import type { ITaskResponse } from '@/types/task.types';

type TKanbanAddCardInputProps = {
	filterDate?: string;
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
};

export const KanbanAddCardInput = ({
	setItems,
	filterDate,
}: TKanbanAddCardInputProps) => {
	const addCard = () => {
		setItems((prev) => {
			if (!prev) return;

			return [
				...prev,
				{
					id: '',
					name: '',
					isCompleted: false,
					createdAt: filterDate,
				},
			];
		});
	};

	return (
		<div className="mt-5">
			<button
				onClick={addCard}
				className="italic opacity-40 text-sm"
			>
				+ Add task
			</button>
		</div>
	);
};
