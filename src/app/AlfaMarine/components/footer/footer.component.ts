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
      {
        label: 'Who we are (About Us)',
        // items:
        //   [
        //     { label: 'About Us	', route: '/about-alfa' },
        //     { label: 'Mission and Vision', route: '/mission-and-vision' },
        //     { label: 'Core Values', route: '/core-values' },
        //     { label: 'Leadership', route: '/leadership' },
        //     { label: 'Our Culture', route: '/our-culture' },
        //     { label: 'Our Strategy ', route: '/our-strategy' },
        //     { label: 'Our clients ', route: '/our-clients' },
        //     { label: 'Ethics and Compliance ', route: '/ethics-and-compliance' },
        //     { label: 'Accreditations  ', route: '/accreditations' },
        //   ]
      },
      {
        label: 'Vision, Mission ',
        // items:
        //   [
        //     {
        //       label: 'Our Solutions',
        //       items:
        //         [
        //           { label: ' Modular buildings solutions', route: '/modular-buildings-solutions'  },
        //           { label: 'Living Quarters Refurbishment, Upgrade & Conversion solutions ', route: '/living-quarters-refurbishment' },
        //           { label: ' Repair & Maintenance of HVAC, Piping & Electrical Systems', route: '/repair-and-maintenance-of-hvac' },
        //           { label: '  Rig & Ship Repair solutions', route: '/rig-and-ship-repair-solutions' },
        //         ]
        //     },
        //     {
        //       label: 'Our Core Services',
        //       items:
        //         [
        //           { label: '  Welding And Fabrication Services', route: '/welding-and-fabrication-services' },
        //           { label: ' Abrasive Blasting and Painting Services  ', route: '/abrasive-blasting-and-painting-services' },
        //           { label: ' Architectural, HVAC, Electrical, Plumbing, & Carpentry', route: '/architectural-hvac-electrical' },
        //           { label: ' Thermal And Acoustic Insulation Services ', route: '/thermal-and-acoustic-insulation-services' },
        //         ]
        //     },
        //     { label: 'Our Product / Supplies' ,route:'/our-product-or-supplies' },
        //   ],
      },
      { label: 'Core Values' },
      {
        label: 'Sustainability ',
        // items:
        //   [
        //     { label: 'Environmental Responsibility',route:'/environmental-responsibility' },
        //     { label: 'Health, Safety & Environmental Policy ',route:'/health-safety-environmental-policy' },
        //     { label: 'Quality Assurance Policy', route:'/quality-assurance-policy' },
        //   ]
      },
      {
        label: 'Accreditations  ',
        // items:
        //   [
        //     { label: 'News' },
        //     { label: 'Gallery ' },
        //     { label: 'Downloads', route:'/downloads' },
        //   ]
      },
      {label: 'Ethics & Compliance',route: '/contact-us'},
      {label: 'Environmental Responsibility',route: '/contact-us'},
      {label: 'HSE Policy',route: '/contact-us'},
      {label: 'Contact us',route: '/contact-us'},
      {label: 'Join Our Team (Career)',route: '/contact-us'},
      {label: 'Download Center',route: '/contact-us'},
    ];
  }
}