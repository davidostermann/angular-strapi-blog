import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { TagsListComponent } from './tags-list/tags-list.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { TagComponent } from './tag/tag.component';
import { AuthorComponent } from './author/author.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';

const routes: Routes = [
  { path: 'articles', component: ArticlesListComponent },
  { path: 'tags', component: TagsListComponent },
  { path: 'authors', component: AuthorsListComponent },
  { path: 'articles/:id', component: ArticleComponent },
  { path: 'tags/:id', component: TagComponent },
  { path: 'authors/:id', component: AuthorComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: '**', component: ArticlesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
