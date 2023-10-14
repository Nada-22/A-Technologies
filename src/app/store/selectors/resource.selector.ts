import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Resource } from 'src/app/shared/models/resource';


export const selectResources = createFeatureSelector<Resource[]>('resources');