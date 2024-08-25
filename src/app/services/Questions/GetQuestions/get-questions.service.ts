import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { QuestionsList } from '../../../interfaces/questions-list';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionsService {
  private http = inject(HttpClient);



  getQuestions(categoryID:number, amount:number) {
    return this.http.get<QuestionsList>(`https://opentdb.com/api.php?amount=${amount}&category=${categoryID}`)
    .pipe(map((resData) => resData.results))
  }
  
  constructor() { }
}
