import { createReducer, on } from '@ngrx/store';
import * as ResourceActions from '../actions/resource.action';
import { Resource } from 'src/app/shared/models/resource';

export const initialState: Resource[] = [];

export const resourceReducer = createReducer(
  initialState,
  on(ResourceActions.loadResourcesSuccess, (state, { resources }) => resources),
  on(ResourceActions.addResourceSuccess, (state, { resource }) => [...state, resource]),
  on(ResourceActions.updateResourceSuccess, (state, { resource }) =>
    state.map((t) => (t.id === resource.id ? { ...t, ...resource } : t))
  ),
  on(ResourceActions.deleteResourceSuccess, (state, { id }) => state.filter((resource) => resource.id !== id))
);
