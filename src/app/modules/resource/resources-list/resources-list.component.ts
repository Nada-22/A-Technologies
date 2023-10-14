import { Component, OnInit } from '@angular/core';
import {RESOURCES} from '../../../shared/data/resources';
import { Store, select } from '@ngrx/store';
import { selectResources } from 'src/app/store/selectors/resource.selector';
import { loadResources } from 'src/app/store/actions/resource.action';

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
  resources$:any;
  constructor(private store: Store) {
    this.resources$ = this.store.pipe(select(selectResources));
  }

  ngOnInit(): void {
    this.store.dispatch(loadResources());
  }

}
