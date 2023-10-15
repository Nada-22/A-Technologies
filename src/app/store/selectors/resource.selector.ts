import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Resource } from 'src/app/shared/models/resource';


export const selectResources = createFeatureSelector<Resource[]>('resources');

export const selectAllResources= createSelector(selectResources, (resources) => resources);
export const selectResourceById = (resourceId: number) =>
  createSelector(selectResources, (resources: Resource[]) => {
    var resourceById = resources.filter((_) => _.id == resourceId);
    if (resourceById.length == 0) {
      return null;
    }
    return resourceById[0];
  });