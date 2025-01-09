import { Component } from '@angular/core';
import { MainMenuComponent } from '../navbar/main-menu/main-menu.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MainMenuComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
