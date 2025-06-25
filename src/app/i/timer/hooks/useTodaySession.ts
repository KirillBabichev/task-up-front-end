import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import type { TTimerState } from '../timer.types'

import { useLoadSettings } from './useLoadSettings'
import { timerService } from '@/services/timer.service'

export const useTodaySession = ({
	setActiveRound,
	setSecondsLeft
}: TTimerState) => {
	const { workInterval } = useLoadSettings();

	const {
		data: sessionsResponse,
		isLoading,
		isSuccess,
	} = useQuery({
		queryKey: ['get today session'],
		queryFn: () => timerService.getTodaySession(),
	});

	const rounds = sessionsResponse?.data.rounds;

	useEffect(() => {
		if (isSuccess && rounds) {
			const activeRound = rounds.find(round => !round.isCompleted)
			setActiveRound(activeRound)

			if (activeRound && activeRound?.totalSeconds !== 0) {
				setSecondsLeft(activeRound.totalSeconds)
			}
		}
	}, [isSuccess, rounds]);

	return { sessionsResponse, isLoading, workInterval };
};
