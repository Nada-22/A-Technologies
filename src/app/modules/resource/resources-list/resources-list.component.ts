import { Component, OnInit } from '@angular/core';
import {RESOURCES} from '../../../shared/data/resources';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss']
})
export class ResourcesListComponent implements OnInit {

  searchTerm='';
  resources=RESOURCES;
  pageSize=4;
  page=1;
  constructor() { }

  ngOnInit(): void {
  }

}
