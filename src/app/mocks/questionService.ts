import { IQuestion } from '../models/iQuestion';

export class MockQuestionService{
    public trivias: IQuestion[] = [];

    public getRandomQuestions(): IQuestion[] {
        return [];
    }
}