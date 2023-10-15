// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { of } from 'rxjs';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import * as ResourceActions from '../actions/resource.action';
// import { ResourceService } from 'src/app/services/resource.service';

// @Injectable()
// export class ResourceEffects {
//   constructor(private actions$: Actions, private resourceService: ResourceService) {}

//   loadResources$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(ResourceActions.loadResources),
//       mergeMap(() =>
//         this.resourceService.getResources().pipe(
//           map((resources) => ResourceActions.loadResourcesSuccess({ resources })),
//           catchError((error) => of(ResourceActions.loadResourcesFailure({ error })))
//         )
//       )
//     )
//   );

//   addResource$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(ResourceActions.addResource),
//       mergeMap((action) =>{
//         console.log(action);
        
//          return this.resourceService.addResource(action.resource).pipe(
//           map((resource) => {
//             alert('added')
//             return ResourceActions.addResourceSuccess({ resource })
//           }),
//           catchError((error) => of(ResourceActions.addResourceFailure({ error })))
//         );}
//       )
//     )
//   );

//   updateResource$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(ResourceActions.updateResource),
//       mergeMap((action) =>
//         this.resourceService.updateResource(action.resource).pipe(
//           map((resource) => ResourceActions.updateResourceSuccess({ resource })),
//           catchError((error) => of(ResourceActions.updateResourceFailure({ error })))
//         )
//       )
//     )
//   );

//   deleteResource$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(ResourceActions.deleteResource),
//       mergeMap((action) =>
//         this.resourceService.deleteResource(action.id).pipe(
//           map(() => ResourceActions.deleteResourceSuccess({ id: action.id })),
//           catchError((error) => of(ResourceActions.deleteResourceFailure({ error })))
//         )
//       )
//     )
//   );
// }
