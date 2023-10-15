import { reducers } from './../../../../store/index';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-available-days',
  templateUrl: './available-days.component.html',
  styleUrls: ['./available-days.component.scss']
})
export class AvailableDaysComponent implements OnInit {


  errorMessage = '';
  submitted = false;
  workDaysForm!: FormGroup;
  @Input()resource:any;

  workDays = [
    { name: 'SATURDAY', active: false },
    { name: 'SUNDAY', active: true },
    { name: 'MONDAY', active: true },
    { name: 'TUESDAY', active: true },
    { name: 'WEDNESDAY', active: true },
    { name: 'THURSDAY', active: true },
    { name: 'FRIDAY', active: false },
  ]
  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {

    this.workDaysForm = this.fb.group({
      daysOfWeek: this.fb.array([]),
    });

    this.workDays.forEach((day) => {
      this.addDay(day.name, day.active)
    })
    if (this.resource) {

      console.log(this.resource);
      
      this.workDaysForm.patchValue({...this.resource})
      console.log(this.workDaysForm.value);
      
    }
  }
  get daysOfWeek(): FormArray {
    return this.workDaysForm.get('daysOfWeek') as FormArray;
  }
  addDay(name: string, active: boolean) {
    const newDay = this.fb.group({
      name: name,
      active: active,
      workHours: this.fb.array([this.fb.group({
        from: ['', [Validators.required]],
        to: ['', [Validators.required]],
      })]),
    });

    this.daysOfWeek.push(newDay);


    //  for (let item of this.daysOfWeek.controls) {
    //   console.log(item.get('workHours')?.value);
    //   this.addWorkHour(item)

    //  }

  }

  addWorkHour(day: any) {
    const workHours = day.get('workHours') as FormArray;
    if (workHours.invalid) {
      return
    }
    workHours.push(this.fb.group({
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
    }));
  }


  removeWorkHour(item: any, i: number) {

    if (confirm('Are you sure you want to delete this element?')) {
      let workHours = item.get('workHours') as FormArray;
      workHours.removeAt(i)

    }
  }


  changeDayStatus(item: AbstractControl, event: any) {
    item.get('active')?.setValue(event.checked)
    console.log(this.workDaysForm.value);

  }
}
