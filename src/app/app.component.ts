import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNgModule } from './shared/prime-ng/prime-ng.module';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NavbarComponent } from './AlfaMarine/components/navbar/navbar.component';
import { FooterComponent } from './AlfaMarine/components/footer/footer.component';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeNgModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class AppComponent {



  title = 'alfa-marine ';
  visible: boolean = true;
  constructor(public dialogService: DialogService) { }

  ngOnInit() {


  }

  ref: DynamicDialogRef | undefined;




  // addContractDialog() {
  //   this.ref = this.dialogService.open(NewContractDialogComponent, {
  //     header: 'Add New Contract',
  //     width: '30%',
  //     contentStyle: { overflow: 'auto' },
  //     styleClass: 'png-dialogbox',
  //     baseZIndex: 10000,
  //     closable: true,
  //     modal: true,
  //     footer: '.'
  //   });
  // }
}
