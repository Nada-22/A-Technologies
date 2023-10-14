import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Resource } from '../shared/models/resource';
import { RESOURCES } from '../shared/data/resources';
@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor() { }
  private resources: Resource[] = RESOURCES;

  getResources(): Observable<Resource[]> {
    return of(this.resources);
  }

  addResource(resource: Resource): Observable<Resource> {
    
    const newId = this.resources.length + 1;
    console.log(resource,newId);
    // resource.id = newId;
    let newResource ={...resource,id:newId}
    this.resources.push(newResource);
    return of(newResource);
  }

  updateResource(resource: Resource): Observable<Resource> {
    const existingResource = this.resources.find((t) => t.id === resource.id);
    if (existingResource) {
      Object.assign(existingResource, resource);
    }
    return of(resource);
  }

  deleteResource(id: number): Observable<void> {
    const index = this.resources.findIndex((resource) => resource.id === id);
    if (index !== -1) {
      this.resources.splice(index, 1);
    }
    return of(undefined);
  }
}
