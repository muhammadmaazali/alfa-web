
import { Component } from '@angular/core';
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
  imports: [MenuItemContent, Menubar, MainMenuComponent,
    Menubar, Ripple, CommonModule, RouterModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home' },
      {
        label: 'Who We Are ',
        items:
          [
            { label: 'About ALFA	', route: '/about-alfa' },
            { label: 'Mission and Vision', route: '/mission-and-vision' },
            { label: 'Core Values', route: '/core-values' },
            { label: 'Leadership', route: '/leadership' },
            { label: 'Our Culture', route: '/our-culture' },
            { label: 'Our Strategy ', route: '/our-strategy' },
            { label: 'Ethics and Compliance ', route: '/ethics-and-compliance' },
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
                  { label: ' Modular buildings solutions', route: '/modular-buildings-solutions'  },
                  { label: 'Living Quarters Refurbishment, Upgrade & Conversion solutions ', route: '/living-quarters-refurbishment' },
                  { label: ' Repair & Maintenance of HVAC, Piping & Electrical Systems', route: '/repair-and-maintenance-of-hvac' },
                  { label: '  Rig & Ship Repair solutions', route: '/rig-and-ship-repair-solutions' },
                ]
            },
            {
              label: 'Our Core Services',
              items:
                [
                  { label: '  Welding And Fabrication Services', route: '/welding-and-fabrication-services' },
                  { label: ' Abrasive Blasting and Painting Services  ', route: '/abrasive-blasting-and-painting-services' },
                  { label: ' Architectural, HVAC, Electrical, Plumbing, & Carpentry', route: '/architectural-hvac-electrical' },
                  { label: ' Thermal And Acoustic Insulation Services ', route: '/thermal-and-acoustic-insulation-services' },
                ]
            },
            { label: 'Our Product / Supplies' ,route:'/our-oroduct-or-supplies' },
          ],
      },
      {
        label: 'Sustainability ',
        items:
          [
            { label: 'Environmental Responsibility' },
            { label: 'Health, Safety & Environmental Policy ' },
            { label: 'Quality Assurance Policy' },
          ]
      },
      {
        label: 'Media Center  ',
        items:
          [
            { label: 'News' },
            { label: 'Gallery ' },
            { label: 'Download' },
          ]
      },
      {
        label: 'Contact us ',
        items:
          [
            { label: 'Commercial Inquiries' },
            { label: 'Careers ' },
            { label: 'Become a Supplier' },
            { label: 'Speak UP' },
          ]
      },
    ];
  }
}
