import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  page:number = 1;
  articles:Article[];
  totalCount:number;
  pageSize:number = 5;

  constructor(private articleService:ArticleService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      if(params.get("page")) { // page değeri null değil ise
        this.page = Number(params.get("page"));
      }
      this.articles=[]; // ilk 5 makaleyi sıfırlamak için boş bir nesne veriyoruz
      this.totalCount = 0;
      this.articleService.getArticle(this.page, this.pageSize).subscribe(data => {
        console.log(data)
        this.articles = data.articles;
        this.totalCount = data.totalCount;
      });

    })

  }

}
