import { Component, inject, signal } from '@angular/core';
import { GetQuestionsService } from '../../services/Questions/GetQuestions/get-questions.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [],
  templateUrl: './play.component.html',
  styleUrl: './play.component.scss'
})
export class PlayComponent {
  private GetQuestionsService = inject(GetQuestionsService);
  questionList = signal<Question[]>([]);
  loading = true;
  ngOnInit() {
    this.GetQuestionsService.getQuestions(32, 6).subscribe({
      next: resData => {
        for(let i = 0; i < resData.length; i++) {
          this.questionList.update( x => { return [...x, new Question(resData[i])] } );
        }
        console.log(this.questionList())
      },
      complete: () => {
        console.log(this.questionList()[1].category)
        this.loading = false;
      }
    })
  }
}
