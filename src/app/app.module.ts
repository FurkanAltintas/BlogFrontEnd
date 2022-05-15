import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './pages/main.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';


import { AdminNavComponent } from './nav/admin-nav/admin-nav.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AdminNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent], // Uygulamanın ilk çalıştığı zaman hangi component ile başlıyacağını belirtiyoruz.
})
export class AppModule {}

// Mümkün olduğunca burayı temiz tutmalıyız.
