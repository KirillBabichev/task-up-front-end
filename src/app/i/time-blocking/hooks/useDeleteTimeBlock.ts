import { useMutation, useQueryClient } from '@tanstack/react-query'

import { timeBlockService } from '@/services/time-block.service'

export const useDeleteTimeBlock = (itemId: string) => {
	const queryClient = useQueryClient();

	const { mutate: deleteTimeBlock, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete time-block', itemId],
		mutationFn: () => timeBlockService.deleteTimeBlock(itemId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['time-blocks']
			});
		},
	});

	return { deleteTimeBlock, isDeletePending };
};
