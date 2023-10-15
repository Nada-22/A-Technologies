import  Swal  from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { Store } from '@ngrx/store';
import { addResource } from 'src/app/store/actions/resource.action';
import { AvailableDaysComponent } from './available-days/available-days.component';
import { Resource } from 'src/app/shared/models/resource';
import { ResourceService } from 'src/app/services/resource.service';
import * as ResourceSelectors from '../../../store/selectors/resource.selector';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-resource-manage',
  templateUrl: './resource-manage.component.html',
  styleUrls: ['./resource-manage.component.scss']
})
export class ResourceManageComponent implements OnInit {
  active = true;
  resource !: Resource;
  resourceID = 0;
  resource$!: Observable<Resource | null>;

  @ViewChild(SupplierDetailsComponent) SupplierDetails!: SupplierDetailsComponent;
  @ViewChild(AvailableDaysComponent) AvailableDays!: AvailableDaysComponent;
  constructor(private store: Store,
    private resourceService: ResourceService,
    private route: ActivatedRoute,
    private _translate: TranslateService) {

    this.resourceID = Number(this.route.snapshot.paramMap.get('id'))
    console.log(this.resourceID);

  }

  ngOnInit(): void {
    this.resource$ = this.store.select(ResourceSelectors.selectResourceById(this.resourceID));
    this.resource$.subscribe({
      next: (res: any) => {

        if (res) {

          this.resource = res;
          this.active = res.active
        }
      }
    })
  }


  saveChanges() {
    this.resource = {
      ...this.SupplierDetails.supplierForm.value,
      ...this.AvailableDays.workDaysForm.value, active: this.active, id: this.resourceID
    }
    console.log(this.resource);

    if (this.resourceID) {
      this.resourceService.updateResource(this.resource)
    } else {

      this.resourceService.addResource(this.resource)
    }
    console.log(this.resource);

  }
  deleteResource() {

    //swal confirm
    
    Swal.fire({
      title: this._translate.instant('GENERAL.CONFIRM_DELETE'),
      text: this._translate.instant('GENERAL.YOU_WON/T_BE_ABLE_TO_REVERT_THIS'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: this._translate.instant('GENERAL.YES_DELETE_IT'),
       cancelButtonText: this._translate.instant('GENERAL.NO')
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed){
          if (this.resourceID) {
            
            this.resourceService.deleteResource(this.resourceID)
          }else{
            Swal.fire(
              this._translate.instant('GENERAL.NOT_DELETED'),
              this._translate.instant('GENERAL.NO_RESOURCE_FOUNDED'),
                'error'
                );
          }
         
            }
            })

  }
}
