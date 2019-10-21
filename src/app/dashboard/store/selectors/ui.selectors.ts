import { createSelector, createFeatureSelector } from '@ngrx/store';
import { DashboardState } from '../reducers/index.reducer';
import { UiState } from '../reducers/ui/ui.reducer';
import { AppState } from 'src/app/store/reducers/index.reducer';

// FEATURE SELECTOR.
export const selectDashboard = createFeatureSelector<DashboardState>(
    'dashboard'
);

// FEATURE UI REDUCER SELECTOR.
export const selectUi = createSelector(
    selectDashboard,
    state => state.ui
);

// Sidenav Selector.
export const selectUiSidenav = createSelector(
    selectUi,
    state => state.sidenav
)
