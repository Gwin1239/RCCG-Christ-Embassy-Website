import { Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [{ path: '', component: HomeComponent },
  { path: 'contact', component: ContactUsComponent },];
