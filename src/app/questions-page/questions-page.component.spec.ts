import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MaterialsModule } from '../materials/materials.module';
import { MockQuestionService } from '../mocks/questionService';

import { QuestionsPageComponent } from './questions-page.component';

describe('QuestionsPageComponent', () => {
  let component: QuestionsPageComponent;
  let fixture: ComponentFixture<QuestionsPageComponent>;
  let mockService = new MockQuestionService();
  let matDialog: MatDialog

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsPageComponent ],
      imports: [MaterialsModule ],
      providers: [
        {provide: MockQuestionService, useValue: mockService},
        {provide: MatDialog, useValue: matDialog},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('questions length should be 10', () => {
    expect(component.questions.length).toEqual(10);
  });

});
