import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogNavComponent } from './blog-nav/blog-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCheckboxModule,
  MatChipsModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ArticleComponent } from './article/article.component';
import { AppRouterModule } from './app-router.module';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { TagsListComponent } from './tags-list/tags-list.component';
import { TagComponent } from './tag/tag.component';
import { AuthorComponent } from './author/author.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ApiService } from './api.service';
import { NgxMdModule } from 'ngx-md';

@NgModule({
  declarations: [
    AppComponent,
    BlogNavComponent,
    ArticleComponent,
    AuthorsListComponent,
    TagsListComponent,
    TagComponent,
    AuthorComponent,
    ArticlesListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatChipsModule,
    FlexLayoutModule,
    AppRouterModule,
    HttpClientModule,
    NgxMdModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
