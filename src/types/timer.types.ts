import type { TBase } from './root.types'

export interface ITimerRoundResponse extends TBase {
    isCompleted?: boolean
    totalSeconds: number
}

export interface ITimerSessionResponse extends TBase {
    isCompleted?: boolean
    rounds?: ITimerRoundResponse[]
}

export type TypeTimerSessionState = Partial<
    Omit<ITimerSessionResponse, 'id' | 'createdAt' | 'updatedAt'>
>

export type TypeTimerRoundState = Partial<
    Omit<ITimerRoundResponse, 'id' | 'createdAt' | 'updatedAt'>
>
