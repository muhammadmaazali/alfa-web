import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FooterComponent, MainMenuComponent,RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
