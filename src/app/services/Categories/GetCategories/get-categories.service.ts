import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CategoriesRequest } from '../../../interfaces/categories-request';

@Injectable({
  providedIn: 'root'
})
export class GetCategoriesService {
  private http = inject(HttpClient)

  getCategoriesList() {
    return this.http.get<CategoriesRequest>("https://opentdb.com/api_category.php")
    .pipe(
      map((resData) => resData.trivia_categories)
    )
  }
}
 