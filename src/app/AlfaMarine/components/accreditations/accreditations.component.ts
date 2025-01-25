import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-accreditations',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './accreditations.component.html',
  styleUrl: './accreditations.component.scss'
})
export class AccreditationsComponent {
  items = [
    { image: 'assets/ALFA LOGO/Accreditations-logos/1.png',  },
    { image: 'assets/ALFA LOGO/Accreditations-logos/2.png',  },
    { image: 'assets/ALFA LOGO/Accreditations-logos/3.png',  },
    { image: 'assets/ALFA LOGO/Accreditations-logos/4.png',  },
    { image: 'assets/ALFA LOGO/Accreditations-logos/5.png',  },
    { image: 'assets/ALFA LOGO/Accreditations-logos/6.png',  },
    { image: 'assets/ALFA LOGO/Accreditations-logos/7.png',  },
    { image: 'assets/ALFA LOGO/Accreditations-logos/8.png',  },
    // { image: 'assets/ALFA LOGO/Accreditations-logos/9.png',  },
    // { image: 'assets/ALFA LOGO/Accreditations-logos/10.png',  },
    // { image: 'assets/ALFA LOGO/Accreditations-logos/11.png',  },
    // { image: 'assets/ALFA LOGO/Accreditations-logos/12.png',  },
    // { image: 'assets/ALFA LOGO/Accreditations-logos/13.png',  },
    // { image: 'assets/ALFA LOGO/Accreditations-logos/14.png',  },
    // { image: 'assets/ALFA LOGO/Accreditations-logos/15.png',  },
    // { image: 'assets/ALFA LOGO/Accreditations-logos/16.png',  },
    // { image: 'assets/ALFA LOGO/Accreditations-logos/17.jpg',  },
    // { image: 'assets/ALFA LOGO/Accreditations-logos/18.png',  },
  ];
  
  carouselOptions = {
    autoplay: false,
    loop: false,
    margin: 15,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    autoplaySpeed: 5000,
    responsive: {
      0: { items: 8 },
      500: { items: 8 }, 
      600: { items: 8 },
      800: { items: 8 },
      1200: { items: 8 } 
    }
  };
}
