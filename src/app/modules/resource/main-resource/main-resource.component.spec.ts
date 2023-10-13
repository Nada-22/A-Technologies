import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainResourceComponent } from './main-resource.component';

describe('MainResourceComponent', () => {
  let component: MainResourceComponent;
  let fixture: ComponentFixture<MainResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
