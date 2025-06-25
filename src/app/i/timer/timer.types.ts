import { ITimerRoundResponse } from '@/types/timer.types'
import type { Dispatch, SetStateAction } from 'react'


export type TTimerState = {
	isRunning: boolean;
	secondsLeft: number;
	activeRound?: ITimerRoundResponse;

	setIsRunning: Dispatch<SetStateAction<boolean>>;
	setSecondsLeft: Dispatch<SetStateAction<number>>;
	setActiveRound: Dispatch<SetStateAction<ITimerRoundResponse | undefined>>;
};
