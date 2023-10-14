import { createAction, props } from '@ngrx/store';
import { Resource } from '../../shared/models/resource';

// Load Resources
export const loadResources = createAction('[Resource] Load Resources');
export const loadResourcesSuccess = createAction('[Resource] Load Resources Success',
 props<{ resources: Resource[] }>());
export const loadResourcesFailure = createAction('[Resource] Load Resources Failure',
 props<{ error: any }>());

// Add Resource
export const addResource = createAction('[Resource] Add Resource', props<{ resource: Resource }>());
export const addResourceSuccess = createAction('[Resource] Add Resource Success', props<{ resource: Resource }>());
export const addResourceFailure = createAction('[Resource] Add Resource Failure', props<{ error: any }>());

// Update Resource
export const updateResource = createAction('[Resource] Update Resource', props<{ resource: Resource }>());
export const updateResourceSuccess = createAction('[Resource] Update Resource Success', props<{ resource: Resource }>());
export const updateResourceFailure = createAction('[Resource] Update Resource Failure', props<{ error: any }>());

// Delete Resource
export const deleteResource = createAction('[Resource] Delete Resource', props<{ id: number }>());
export const deleteResourceSuccess = createAction('[Resource] Delete Resource Success', props<{ id: number }>());
export const deleteResourceFailure = createAction('[Resource] Delete Resource Failure', props<{ error: any }>());
