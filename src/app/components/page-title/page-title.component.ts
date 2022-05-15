import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  @Input() title:string; // Input keywordu ile component tarafında verdiğimiz değeri yakalayabiliyoruz.

  constructor() { }

  ngOnInit(): void {
  }

}
