'use client';

import { DragDropContext } from '@hello-pangea/dnd';

import { COLUMNS } from '../columns.data';
import { useTasks } from '../hooks/useTasks';
import { useUpdateTaskDnd } from '../hooks/useUpdateTaskDnd';

import { KanbanColumn } from './KanbanColumn';
import styles from './KanbanView.module.scss';

export function KanbanView() {
	const { items, setItems } = useTasks();
	const { onDragEnd } = useUpdateTaskDnd();

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.board}>
				{COLUMNS.map((column) => (
					<KanbanColumn
						key={column.value}
						value={column.value}
						label={column.label}
						items={items}
						setItems={setItems}
					/>
				))}
			</div>
		</DragDropContext>
	);
}
