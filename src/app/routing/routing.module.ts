import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../pages/home/home.component';
import { ContactUsComponent } from '../pages/contact-us/contact-us.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'home', component: HomeComponent },
  { path: '',  redirectTo:'/home', pathMatch:'full' }
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

})
export class RoutingModule { }