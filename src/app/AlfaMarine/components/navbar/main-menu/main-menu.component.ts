
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { MenuItemContent } from 'primeng/menu';

import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [MenuItemContent, Menubar, MainMenuComponent,
    Menubar, Ripple, CommonModule],
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
            { label: 'About ALFA	' },
            { label: 'Mission and Vision' },
            { label: 'Core Values' },
            { label: 'Leadership' },
            { label: 'Our Culture' },
            { label: 'Our Strategy ' },
            { label: 'Ethics and Compliance ' },
            { label: 'Accreditations  ' },
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
                  { label: ' Modular buildings solutions' },
                  { label: 'Living Quarters Refurbishment, Upgrade & Conversion solutions ' },
                  { label: ' Repair & Maintenance of HVAC, Piping & Electrical Systems' },
                  { label: '  Rig & Ship Repair solutions' },
                ]
            },
            {
              label: 'Our Core Services',
              items:
                [
                  { label: '  Welding And Fabrication Services' },
                  { label: ' Abrasive Blasting and Painting Services  ' },
                  { label: ' Architectural, HVAC, Electrical, Plumbing, & Carpentry' },
                  { label: ' Thermal And Acoustic Insulation Services ' },
                ]
            },
            { label: 'Our Product / Supplies' },
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
