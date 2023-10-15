import { resourceReducer } from 'src/app/store/reducers/resource.reducer';
// src/app/store/index.ts
import { ActionReducerMap } from '@ngrx/store';
import { Resource } from '../shared/models/resource';


export interface AppState {
  resources: Resource[];
}

export const reducers: ActionReducerMap<AppState> = {
  resources: resourceReducer,
};
