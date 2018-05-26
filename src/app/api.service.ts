import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from './models';

const BASE_PATH = 'http://localhost:1337';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http
      .get<Article[]>(`${BASE_PATH}/article`)
      .pipe(
        map((articles: Article[]) =>
          articles.map(art => ({ ...art, id: art._id }))
        )
      );
  }

  getArticle(id: String): Observable<Article> {
    return this.http.get<Article>(`${BASE_PATH}/article/${id}`).pipe(
      map((art: Article) => ({
        ...art,
        id: art._id,
        image: art.image && `${BASE_PATH}/${art.image['url']}`
      }))
    );
  }
}
