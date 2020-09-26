import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IQuestion } from 'src/app/models/iQuestion';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output('selectedAnswer') answerSelected : EventEmitter<string> = new EventEmitter();

  @Input('question') question: IQuestion;

  
  public onSelect(option: string): void{
    this.answerSelected.emit(option);
  }
  
}
