import { type Dispatch, type SetStateAction } from 'react';

import { ITaskResponse } from '@/types/task.types';

import styles from './ListView.module.scss';

type TListAddRowInputProps = {
	filterDate?: string;
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>;
};

export const ListAddRowInput = ({
	setItems,
	filterDate,
}: TListAddRowInputProps) => {
	const addRow = () => {
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
		<div className={styles.addRow}>
			<button
				onClick={addRow}
				className="italic opacity-40 text-sm"
			>
				+ Add task
			</button>
		</div>
	);
};
