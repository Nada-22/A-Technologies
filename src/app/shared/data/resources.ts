import { Resource } from '../models/resource';


export const RESOURCES: Resource[] = [
  {
    id: 1,
    name: 'nada',
    booking: "multi",
    bookingMulti: 2,
    image: '',
    resourceType: "during_day",
    fixedTime: 1,
    supplierTime: "fixed",
    supplierAvailable:5,
    type: "month",
    daysOfWeek:[],
    active:false
  },
  {
    id: 2,
    name: 'ali',
    booking: "multi",
    bookingMulti: 2,
    image: '',
    resourceType: "during_day",
    fixedTime: 1,
    supplierAvailable:5,
    supplierTime: "fixed",
    type: "month",
    daysOfWeek:[],
    active:true
  },

];