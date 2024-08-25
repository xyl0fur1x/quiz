// import { QuestionsList } from "../interfaces/questions-list";

export class Question {
    type: string | undefined;
    difficulty: string | undefined;
    category: string| undefined;
    question: string| undefined;
    correct_answer: string| undefined;
    incorrect_answers: string[]| undefined;
  constructor(options: {
        type: string,
        difficulty: string,
        category: string,
        question: string,
        correct_answer: string,
        incorrect_answers: string[]
    }) {
    Object.assign(this, options);
  }
}
