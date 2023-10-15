import { createReducer, on } from '@ngrx/store';
import * as ResourceActions from '../actions/resource.action';
import { Resource } from 'src/app/shared/models/resource';
import { RESOURCES } from 'src/app/shared/data/resources';

export const initialState: Resource[] = RESOURCES;

export const resourceReducer = createReducer(
  initialState,
  on(ResourceActions.addResource, (state, { resource }) => {
    let newResource={...resource}
    newResource.id=state.length+1
    console.log(newResource);
    alert("resource added successfully")
    return [...state, newResource];
  }),
  on(ResourceActions.updateResource, (state, { resource }) => {
    let newState=[...state]
    const updatedResourceIndex = newState.findIndex(t => t.id === resource.id);
    if (updatedResourceIndex === -1) {
      return newState;
    }
    newState[updatedResourceIndex] = resource;
    alert("resource updated successfully")

    return [...newState];
  }),
  on(ResourceActions.deleteResource, (state, { id }) => state.filter(resource => resource.id !== id))
);
