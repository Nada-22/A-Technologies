import { createReducer, on } from '@ngrx/store';
import * as ResourceActions from '../actions/resource.action';
import { Resource } from 'src/app/shared/models/resource';
import { RESOURCES } from 'src/app/shared/data/resources';
import Swal from 'sweetalert2';

export const initialState: Resource[] = RESOURCES;

export const resourceReducer = createReducer(
  initialState,
  on(ResourceActions.addResource, (state, { resource }) => {
    let newResource={...resource}
    newResource.id=state.length+1

    Swal.fire(
      'Added',
      'Resource added successfully',
       'success'
       );
    return [...state, newResource];
  }),
  on(ResourceActions.updateResource, (state, { resource }) => {
    let newState=[...state]
    const updatedResourceIndex = newState.findIndex(t => t.id === resource.id);
    if (updatedResourceIndex === -1) {
      return newState;
    }
    newState[updatedResourceIndex] = resource;
    Swal.fire(
      'Updated',
      'Resource updated successfully',
       'success'
       );


    return [...newState];
  }),
  on(ResourceActions.deleteResource, (state, { id }) => {
    
    Swal.fire(
      'Deleted',
      'Resource deleted successfully',
       'success'
       );
    return  state.filter(resource => resource.id !== id)
  })
);
