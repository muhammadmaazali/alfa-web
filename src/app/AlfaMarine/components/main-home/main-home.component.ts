import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { PrimeNgModule } from '../../../shared/prime-ng/prime-ng.module';

@Component({
  selector: 'app-main-home',
  standalone: true,
  imports: [RouterModule,PrimeNgModule,NavbarComponent, FooterComponent],
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.scss'
})
export class MainHomeComponent {

}
