import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { PrimeNgModule } from './shared/prime-ng/prime-ng.module';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NavbarComponent } from './AlfaMarine/components/navbar/navbar.component';
import { FooterComponent } from './AlfaMarine/components/footer/footer.component';
import AOS from 'aos';
import { LoaderComponent } from './AlfaMarine/components/loader/loader.component';
import { LoaderService } from './shared/loader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeNgModule, NavbarComponent, FooterComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  // isLoading = true;

  title = 'alfa-marine ';
  visible: boolean = true;
  isLandingPage: boolean = false;

  constructor(public dialogService: DialogService, private router: Router,public loaderService:LoaderService) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is the landing page
        this.isLandingPage = event.url === '/' || event.url === '/landing'; // Adjust based on your landing route
      }
    });
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 120,

    });
    setTimeout(() => {
      this.loaderService.isLoading = false;
    }, 2000);
  }
  ref: DynamicDialogRef | undefined;
}
