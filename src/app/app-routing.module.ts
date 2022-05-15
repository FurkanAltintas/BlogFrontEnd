import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'sayfa/:page', // :page => page kısmına gelen değeri algılayabiliyor olacak.
        component: HomeComponent
      },
      {
        path: 'hakkimda',
        component: AboutMeComponent,
      },
      {
        path: 'iletisim',
        component: ContactComponent,
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent
  }
];

// www.bidibidi.com/
// www.bidibidi.com/hakkimizda
// www.bidibidi.com/admin
// www.bidibidi.com/admin/article/add

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
