import { Injectable } from '@angular/core';

import { Resource } from '../shared/models/resource';

import { Store } from '@ngrx/store';
import { AppState } from '../store';
import * as ResourceActions from '../store/actions/resource.action';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private store: Store<AppState>) {}

  addResource(resource: Resource) {
    this.store.dispatch(ResourceActions.addResource({ resource }));
  }

  updateResource(resource: Resource) {
    this.store.dispatch(ResourceActions.updateResource({ resource }));
  }

  deleteResource(id: number) {
    this.store.dispatch(ResourceActions.deleteResource({ id }));
  }
}
