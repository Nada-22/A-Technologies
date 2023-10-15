import { createAction, props } from '@ngrx/store';
import { Resource } from '../../shared/models/resource';

// Load Resources
// export const loadResources = createAction('[Resource] Load Resources');

// Add Resource
export const addResource = createAction('[Resource] Add Resource', props<{ resource: Resource }>());

// Update Resource
export const updateResource = createAction('[Resource] Update Resource', props<{ resource: Resource }>());

// Delete Resource
export const deleteResource = createAction('[Resource] Delete Resource', props<{ id: number }>());
