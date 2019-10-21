import { UiState, UiReducer } from './ui/ui.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface DashboardState {
    ui : UiState
};

export const DashboardReducer : ActionReducerMap<DashboardState> = {
    ui : UiReducer
};