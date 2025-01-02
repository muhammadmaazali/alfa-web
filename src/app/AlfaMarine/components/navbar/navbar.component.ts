import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FooterComponent, MainMenuComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
