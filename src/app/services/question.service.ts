import { Injectable } from '@angular/core';
import { trivias } from '../constants';
import { IQuestion } from '../models/iQuestion';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() {
    this.trivias = <IQuestion[]> trivias; //Cast json questions to IQuestion model
   }

  private trivias: IQuestion[] = [];
  

  //Generates 10 questions randomly when called
  //Ensures there's no duplicate question by comparing IDs of each question
  public getRandomQuestions(): IQuestion[]{
    const questions: IQuestion[] = [];
    let i = 1;
    questions[0] = this.trivias[Math.floor(Math.random() * 39)];
    questions[0].index = 1;
    while(i < 10){
    const questionToAdd = this.trivias[Math.floor(Math.random() * 39)];
    if((questions.find(x => questionToAdd.id == x.id))){
      // console.log("Duplicate")
    } else {
      questions[i] = questionToAdd;
      questions[i].index=i+1;
      i++;
    } 
    }
    return questions;
  }
}
