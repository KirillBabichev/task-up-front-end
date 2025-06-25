import { timerService } from '@/services/timer.service';
import { TypeTimerRoundState } from '@/types/timer.types';
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateRound = () => {
	const queryClient = useQueryClient();

	const { mutate: updateRound, isPending: isUpdateRoundPending } = useMutation({
		mutationKey: ['update round'],
		mutationFn: ({ id, data }: { id: string; data: TypeTimerRoundState }) =>
			timerService.updateRound(id, data),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['get today session'] });
		},
	});

	return { updateRound, isUpdateRoundPending };
};
