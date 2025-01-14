import { Component, OnInit } from '@angular/core';
import { MainMenuComponent } from '../navbar/main-menu/main-menu.component';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { MenuItemContent } from 'primeng/menu';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MainMenuComponent, MenuItemContent, Menubar,],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent implements OnInit {
  items: MenuItem[] | undefined;
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit() {
    this.items = [
      // { label: 'Home' ,route:'/home'},
      { label: 'Who we are (About Us)', styleClass: 'lg:col-4 p-0' },
      { label: 'Vision, Mission ', styleClass: 'lg:col-4 p-0' },
      { label: 'Core Values', styleClass: 'lg:col-4 p-0' },
      { label: 'Sustainability ', styleClass: 'lg:col-4 p-0', },
      { label: 'Accreditations  ', styleClass: 'lg:col-4 p-0', },
      { label: 'Ethics & Compliance', styleClass: 'lg:col-4 p-0', route: '/contact-us' },
      { label: 'Environmental Responsibility', styleClass: 'lg:col-4 p-0', route: '/contact-us' },
      { label: 'HSE Policy', styleClass: 'lg:col-4 p-0', route: '/contact-us' },
      { label: 'Contact us', styleClass: 'lg:col-4 p-0', route: '/contact-us' },
      { label: 'Join Our Team (Career)', styleClass: 'lg:col-4 p-0', route: '/contact-us' },
      { label: 'Download Center', styleClass: 'lg:col-4 p-0', route: '/contact-us' },
    ];
  }
}