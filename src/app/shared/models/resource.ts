export interface Resource {
  id: any,
  name: string,
  booking: string,
  bookingMulti: 2,
  image: string,
  resourceType: string,
  fixedTime: number,
  supplierTime: string,
  type: string,
  supplierAvailable:number,
  daysOfWeek:[],
  active:boolean
  }