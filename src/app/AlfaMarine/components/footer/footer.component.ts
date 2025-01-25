import { Component, OnInit } from '@angular/core';
import { MainMenuComponent } from '../navbar/main-menu/main-menu.component';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { MenuItemContent } from 'primeng/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MainMenuComponent, MenuItemContent, Menubar, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent implements OnInit {
  items: MenuItem[] | undefined;



  ngOnInit() {
    window.addEventListener('scroll', this.toggleScrollToTopButton);
    this.items = [
      // { label: 'Home' ,route:'/home'},
      { label: 'About Us', styleClass: 'lg:col-4 p-0', route: '/about-alfa' },
      { label: 'Vision, Mission ', styleClass: 'lg:col-4 p-0', route: '/mission-and-vision' },
      { label: 'Core Values', styleClass: 'lg:col-4 p-0', route: '/core-values' },
      { label: 'Sustainability ', styleClass: 'lg:col-4 p-0', route: '/environmental-responsibility' },
      { label: 'Accreditations  ', styleClass: 'lg:col-4 p-0', route: '/accreditations' },
      { label: 'Ethics & Compliance', styleClass: 'lg:col-4 p-0', route: '/ethics-and-compliance' },
      { label: 'Environmental Responsibility', styleClass: 'lg:col-4 p-0', route: '/environmental-responsibility' },
      { label: 'HSE Policy', styleClass: 'lg:col-4 p-0', route: '/health-safety-environmental-policy' },
      { label: 'Contact us', styleClass: 'lg:col-4 p-0', route: '/contact-us' },
      { label: 'Join Our Team', styleClass: 'lg:col-4 p-0', route: '/careers' },
      { label: 'Download Center', styleClass: 'lg:col-4 p-0', route: '/downloads' },
    ];
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.toggleScrollToTopButton);
  }
  toggleScrollToTopButton() {
    const scrollToTopButton = document.getElementById('scrollToTopButton');
    if (window.scrollY > 150) {
      scrollToTopButton!.style.display = 'block';
    } else {
      scrollToTopButton!.style.display = 'none';
    }
  }
}