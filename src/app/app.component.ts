import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNgModule } from './shared/prime-ng/prime-ng.module';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NavbarComponent } from './AlfaMarine/components/navbar/navbar.component';
import { FooterComponent } from './AlfaMarine/components/footer/footer.component';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeNgModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {



  title = 'alfa-marine ';
  visible: boolean = true;
  constructor(public dialogService: DialogService) { }

  ngOnInit() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 120,

    });
  }

  ref: DynamicDialogRef | undefined;
}
