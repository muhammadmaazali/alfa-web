import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './AlfaMarine/components/home/home.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'home', component: HomeComponent },
];
