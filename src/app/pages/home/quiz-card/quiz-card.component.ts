import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PrimaryButtonComponent } from '../../../shared-components/ui/primary-button/primary-button.component';

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [RouterLink, PrimaryButtonComponent],
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.scss'
})
export class QuizCardComponent {

  name = input<string>();
  amount = signal<number>(Math.floor(Math.random() *  (16-5) + 5));
  categoryID = input<number>();
}
