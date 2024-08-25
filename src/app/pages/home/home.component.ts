import { Component, inject, signal } from '@angular/core';
import { GetCategoriesService } from '../../services/Categories/GetCategories/get-categories.service';
import { CategoriesList } from '../../interfaces/categories-list';
import { QuizCardComponent } from './quiz-card/quiz-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuizCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  categoriesList = signal<CategoriesList[]>([]);
  private GetCategoriesService = inject(GetCategoriesService);


  ngOnInit() {
    this.GetCategoriesService.getCategoriesList().subscribe({
      next: (resData) => {
        for (let i = resData.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [resData[i], resData[j]] = [resData[j], resData[i]];
        }
        this.categoriesList.set(resData.slice(0, 10)) 
      },
      complete: () => {
        console.log(this.categoriesList())
      }
    })
  }
}
