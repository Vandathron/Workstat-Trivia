import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { ResultDisplayerModalComponent } from './result-displayer-modal.component';

describe('ResultDisplayerModalComponent', () => {
  let component: ResultDisplayerModalComponent;
  let fixture: ComponentFixture<ResultDisplayerModalComponent>;
  let dialog: MatDialog;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultDisplayerModalComponent ],
      imports: [MAT_DIALOG_DATA],
      providers: [
        {
          provide: MatDialog, useValue: dialog,
        },
        {
          privide: Router, useValue: router
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultDisplayerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
