import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Article } from '../models';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  article: Article;

  ngOnInit() {
    const id: String = this.route.snapshot.params.id;
    if (id) {
      this.api.getArticle(id).subscribe( d => this.article = d);
    }
  }

}
