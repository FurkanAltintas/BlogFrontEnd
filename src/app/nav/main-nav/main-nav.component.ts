import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MainPage } from './MainPage';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})

// Componentten hemen sonra classı olmak zorundadır. Bir enum veya class eklemek isterseniz @Component'in üzerine eklemelisiniz

export class MainNavComponent implements OnInit {

  pageActive:MainPage;
  constructor(private router:Router) {

    this.router.events.subscribe(x => {
      if(x instanceof NavigationEnd) { // Sadece navigasyonun bitmiş olanını yakalamaya çalışıyoruz
        if(x.url.indexOf("anasayfa") > 0) { // indexOf => vermiş olduğunuz string bir ifade url kısmında var ise 1 döner yok ise 0 döner
          this.pageActive = MainPage.home
        } else if (x.url.indexOf('hakkimda') > 0) {
          this.pageActive = MainPage.about_me
        } else if (x.url.indexOf('iletisim') > 0) {
          this.pageActive = MainPage.contact
        } else {
          this.pageActive = MainPage.home
        }
      }
    });

  }
  // private verme sebebimiz buradaki router değişkenini sadece bu kod içerisinde erişeceğimizi belirtmiş oluyoruz.

  ngOnInit(): void {
  }

}
