import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let formBuilder: FormBuilder = new FormBuilder();
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, ReactiveFormsModule, RouterModule],
      providers: [
        {provide: FormBuilder, useValue: formBuilder},
        {provide: Router, useValue: router}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.userDetails = formBuilder.group({
      name: ['', [Validators.required]],
      id: [0, [Validators.required]]
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not login if user details is not valid', () => {
      
  });

  it('should save to local storage when save is clicked', () => {
    
  })
});
