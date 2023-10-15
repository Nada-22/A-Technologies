import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class SupplierDetailsComponent implements OnInit {

  count: number = 0;
  supplierForm!: FormGroup;
  @Input()resource:any;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.supplierForm=this.fb.group({

      // id:[''],
      name:['',Validators.required],
      image:[],
      resourceType:['during_day',Validators.required],
      supplierAvailable:[1,Validators.required],
      type:['month',Validators.required],
      supplierTime:['fixed',Validators.required],
      fixedTime:[1,Validators.required],
      booking:['multi',Validators.required],
      bookingMulti:[2,Validators.required],


    })
    if (this.resource) {
      this.supplierForm.patchValue({...this.resource})
    }
  }
  get f(){
    return this.supplierForm.controls;
  }


  increment() {
    this.count++;
    this.supplierForm.patchValue({fixedTime:this.supplierForm.value.fixedTime+1})

  }

  decrement() {
    if (this.supplierForm.value.fixedTime > 1) {
      this.supplierForm.patchValue({fixedTime:this.supplierForm.value.fixedTime-1})
      // this.count--;
    }
  }

  imageData: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imageData = reader.result;
        this.supplierForm.patchValue({image:this.imageData})
        console.log(this.supplierForm.value);
      };
      reader.readAsDataURL(file);
      
      
    }
  }
}
