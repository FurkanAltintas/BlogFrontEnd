import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticlePg } from '../models/article-pg';
import { tap } from 'rxjs/operators';

@Injectable({ // Servisimizi tüm componentlerden erişebilir kılmak için işaretliyoruz.
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient:HttpClient) { }

  public loading:boolean = true;
  private apiUrl:string = "https://localhost:7253/api/articles";

  getArticle(page:number, pageSize:number) {
    let api = `${this.apiUrl}/${page}/${pageSize}`;

    return this.httpClient.get<ArticlePg>(api).pipe(tap(x => {
      // x=> bizim datamız oluyor
      this.loading = false; // data başarıyla gelmiş demektir
    }))
    // pipe => ek bir işlem yapmak istiyorsak kullanılır
    // tap => ek bir işlem yapmak istediğinizde kullanabileceğiniz bir metottur.
  }
}
