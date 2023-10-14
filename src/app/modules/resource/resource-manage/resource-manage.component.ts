import { Component, OnInit, ViewChild } from '@angular/core';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { Store } from '@ngrx/store';
import { addResource } from 'src/app/store/actions/resource.action';
import { AvailableDaysComponent } from './available-days/available-days.component';
import { Resource } from 'src/app/shared/models/resource';

@Component({
  selector: 'app-resource-manage',
  templateUrl: './resource-manage.component.html',
  styleUrls: ['./resource-manage.component.scss']
})
export class ResourceManageComponent implements OnInit {

  @ViewChild(SupplierDetailsComponent) SupplierDetails!: SupplierDetailsComponent;
  @ViewChild(AvailableDaysComponent) AvailableDays!: AvailableDaysComponent;
  constructor(private store: Store) { }

  ngOnInit(): void {
  }
   resource !:Resource;

  saveChanges(){
    console.log({...this.SupplierDetails.supplierForm.value,
      ...this.AvailableDays.workDaysForm.value});
      this.resource={...this.SupplierDetails.supplierForm.value,...this.AvailableDays.workDaysForm.value}
    this.store.dispatch(addResource({ resource: this.resource }))
    
  }
}
