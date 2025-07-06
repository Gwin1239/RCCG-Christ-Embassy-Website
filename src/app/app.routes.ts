import { Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { GiveComponent } from './give/give.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [{ path: '', component: HomeComponent },
  { path: 'give',  component: GiveComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutComponent },
];
