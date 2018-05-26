import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Article } from '../models';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  constructor(private api: ApiService) {}

  articles: Article[];

  ngOnInit() {
    this.api.getArticles().subscribe( articles => this.articles = articles);
  }
}
