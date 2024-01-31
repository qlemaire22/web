/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Leaderboard } from './Leaderboard';
import type { MatchState } from './MatchState';
import type { PlayerMatchResponse } from './PlayerMatchResponse';
export type MatchResponse = {
    match_id: string;
    state?: MatchState | null;
    leaderboard: Leaderboard;
    server: string;
    players: Array<PlayerMatchResponse>;
    created_at: string;
    ended_at?: string | null;
    duration?: number | null;
};

