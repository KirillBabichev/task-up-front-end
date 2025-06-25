'use client';

import { DragDropContext } from '@hello-pangea/dnd';

import { COLUMNS } from '../columns.data';
import { useTasks } from '../hooks/useTasks';
import { useUpdateTaskDnd } from '../hooks/useUpdateTaskDnd';

import { ListRowParent } from './ListRowParent';
import styles from './ListView.module.scss';

const ListView = () => {
	const { items, setItems } = useTasks();
	const { onDragEnd } = useUpdateTaskDnd();

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.table}>
				<div className={styles.header}>
					<div>Task name</div>
					<div>Due date</div>
					<div>Priority</div>
					{/* Table not working with dnd */}
					<div></div>
				</div>

				<div className={styles.parentsWrapper}>
					{COLUMNS.map((column) => (
						<ListRowParent
							items={items}
							label={column.label}
							value={column.value}
							setItems={setItems}
							key={column.value}
						/>
					))}
				</div>
			</div>
		</DragDropContext>
	);
};

export default ListView;
