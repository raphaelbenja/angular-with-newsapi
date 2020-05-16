import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { map } from "rxjs/operators";
import { NewsApiService } from "src/app/services/news-api.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"],
})
export class BooksComponent implements OnInit {
  mArticles: Array<any>;
  mSources: Array<any>;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private newsapi: NewsApiService
  ) {}

  ngOnInit(): void {
    //load articles
    this.newsapi
      .initArticles()
      .subscribe((data) => (this.mArticles = data["articles"]));
    //load news sources
    this.newsapi
      .initSources()
      .subscribe((data) => (this.mSources = data["sources"]));
  }

  searchArticles(source) {
    console.log("selected source is: " + source);
    this.newsapi
      .getArticlesByID(source)
      .subscribe((data) => (this.mArticles = data["articles"]));
  }
}
