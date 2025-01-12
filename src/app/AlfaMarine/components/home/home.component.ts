import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { LatestProjectsComponent } from './latest-projects/latest-projects.component';
import { BusinessSectionComponent } from './business-section/business-section.component';
import { CareersSectionComponent } from './careers-section/careers-section.component';
import { QhseWorldSectionComponent } from './qhse-world-section/qhse-world-section.component';
import { NewsLatestSectionComponent } from './news-latest-section/news-latest-section.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { RouterModule } from '@angular/router';
import { OurClientsComponent } from '../our-clients/our-clients.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, TabsModule, BusinessSectionComponent, LatestProjectsComponent,
    CareersSectionComponent, QhseWorldSectionComponent, NewsLatestSectionComponent,OurClientsComponent,RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent {

}
