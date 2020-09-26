import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IQuestion } from '../models/iQuestion';
import { IResult } from '../models/iResult';
import { QuestionService } from '../services/question.service';
import { LoginComponent } from '../widgets/login/login.component';
import { ResultDisplayerModalComponent } from '../widgets/result-displayer-modal/result-displayer-modal.component';

@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.scss']
})
export class QuestionsPageComponent implements OnInit {

  constructor(
    private questionService: QuestionService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getQuestions();
  }


  public getQuestions(): void {
    this.questions = this.questionService.getRandomQuestions();
  }

  public onAnswerSelected(id: number, option: any){
    const selectedOption = option.value;
    if(this.questions.find(x => x.answer == selectedOption && x.id == id)){
      this.totalScore++;
    }
  }

  public displayResult(): void{
    const user = JSON.parse(localStorage.getItem("activeUser")); //gets user details from local storage
    const result: IResult = {
      userName: user.name,
      id: user.id,
      mark: this.totalScore*10 //mark in percentage
    }
    this.dialog.open(ResultDisplayerModalComponent, {
      data: result,
      disableClose: true
    });
    console.log(this.totalScore);
  }

  public timeOver(v): void{
    this.displayResult();
  }

  public totalScore = 0;

  public questions: IQuestion[] = []; //Empty questions on initialization


}
