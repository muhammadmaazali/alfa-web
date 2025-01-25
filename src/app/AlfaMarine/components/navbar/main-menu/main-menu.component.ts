
import { Component, HostListener } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { MenuItemContent } from 'primeng/menu';

import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [MenuItemContent, Menubar, MainMenuComponent, Ripple, CommonModule, RouterModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent implements OnInit {
  items: MenuItem[] | undefined;
  isFixed: boolean = false;
  isScrolled: boolean = false;
  ngOnInit() {
    this.items = [
      // { label: 'Home' ,route:'/home'},
      {
        label: 'Who We Are ',
        items:
          [
            { label: 'About Us	', route: '/about-alfa' },
            { label: 'Mission and Vision', route: '/mission-and-vision' },
            { label: 'Core Values', route: '/core-values' },
            { label: 'Leadership' },
            { label: 'Our Culture', route: '/our-culture' },
            { label: 'Our Offices and Facilities' },
            { label: 'Our Strategy ', route: '/our-strategy' },
            { label: 'Our clients ', route: '/our-clients' },
            { label: 'Our Milestones',  },
            { label: 'Ethics and Compliance ',  },
            { label: 'Accreditations  ', route: '/accreditations' },
          ]
      },
      {
        label: 'What We Do ',
        items:
          [
            {
              label: 'Our Solutions',
              items:
                [
                  { label: ' Modular buildings solutions', route: '/modular-buildings-solutions' },
                  { label: 'Living Quarters Refurbishment, Upgrade & Conversion solutions ', route: '/living-quarters-refurbishment' },
                  { label: ' Repair & Maintenance of HVAC, Piping & Electrical Systems', route: '/repair-and-maintenance-of-hvac' },
                  { label: '  Rig & Ship Repair solutions', route: '/rig-and-ship-repair-solutions' },
                ]
            },
            {
              label: 'Our Services',
              items:
                [
                  { label: '  Welding And Fabrication Services', route: '/welding-and-fabrication-services' },
                  { label: ' Abrasive Blasting and Painting Services  ', route: '/abrasive-blasting-and-painting-services' },
                  { label: 'Architectural, HVAC, Electrical, Plumbing, & Carpentry Services', route: '/architectural-hvac-electrical' },
                  { label: ' Thermal And Acoustic Insulation Services ', route: '/thermal-and-acoustic-insulation-services' },
                ]
            },
            { label: 'Our Product / Supplies', route: '/our-product-or-supplies' },
          ],
      },
      { label: 'Projects' },
      {
        label: 'Sustainability ',
        items:
          [
            { label: 'Environmental Responsibility', route: '/environmental-responsibility' },
            { label: 'Health, Safety & Environmental Policy ', route: '/health-safety-environmental-policy' },
            { label: 'Quality Assurance Policy', route: '/quality-assurance-policy' },
          ]
      },
      {
        label: 'Media Center  ',
        items:
          [
            { label: 'News' },
            { label: 'Gallery ' },
            { label: 'Downloads', route: '/downloads' },
          ]
      },
      {
        label: 'Contact us ',
        route: '/contact-us',
        items:
          [
            { label: 'Commercial Inquiries', route: '/commercial-inquiries' },
            { label: 'Careers ', route: '/careers' },
            { label: 'Become a Supplier', route: '/become-a-supplier' },
            { label: 'Speak UP', route: '/speak-up' },
          ]
      },
    ];
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop;

    // Toggle the fixed class
    this.isFixed = offset > 0;

    // Add a scrolled class if offset exceeds a certain value
    this.isScrolled = offset > 100; // Adjust the value based on your preference
  }
}
