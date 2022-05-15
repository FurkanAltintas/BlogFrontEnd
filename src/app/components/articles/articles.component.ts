import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() totalCount:number;
  @Input() articles:Article[];
  @Input() page:number;
  @Input() pageSize:number;

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

    pageChanged(event:number):void { // event olarak 5 geldiğinde
      this.page = event; // page değerine 5 aktarılıyor. Yani sayfa 5'e git olmuş olucak
      this.router.navigateByUrl(`/sayfa/${this.page}`); // url değiştiriyoruz ( /sayfa/5 )
  }

}
