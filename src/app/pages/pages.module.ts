import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    HomeComponent,
    ContactUsComponent,
  ],
  imports: [
   
    MatInputModule,
    MatIconModule,
  ],
  exports:[ HomeComponent,
    ContactUsComponent],
})
export class PagesModule { }
