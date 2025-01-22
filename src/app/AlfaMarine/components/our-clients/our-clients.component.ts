import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-our-clients',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './our-clients.component.html',
  styleUrl: './our-clients.component.scss'
})
export class OurClientsComponent {
  items = [
    { image: 'assets/ALFA LOGO/Client Logos/1.png',  },
    { image: 'assets/ALFA LOGO/Client Logos/2.png',  },
    { image: 'assets/ALFA LOGO/Client Logos/3.png',  },
    { image: 'assets/ALFA LOGO/Client Logos/4.png',  },
    { image: 'assets/ALFA LOGO/Client Logos/5.png',  },
    { image: 'assets/ALFA LOGO/Client Logos/6.png',  },
    { image: 'assets/ALFA LOGO/Client Logos/7.png',  },
    { image: 'assets/ALFA LOGO/Client Logos/8.png',  },
    { image: 'assets/ALFA LOGO/Client Logos/9.png',  },
    { image: 'assets/ALFA LOGO/Client Logos/10.png',  },
    { image: 'assets/ALFA LOGO/Client Logos/11.png',  },
    { image: 'assets/ALFA LOGO/Client Logos/12.png',  },
    { image: 'assets/ALFA LOGO/Client Logos/13.png',  },
    { image: 'assets/ALFA LOGO/Client Logos/14.png',  },
    { image: 'assets/ALFA LOGO/Client Logos/15.png',  },
    { image: 'assets/ALFA LOGO/Client Logos/16.png',  },
    { image: 'assets/ALFA LOGO/Client Logos/17.jpg',  },
    { image: 'assets/ALFA LOGO/Client Logos/18.png',  },
  ];
  
  carouselOptions = {
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 1,
    autoplayHoverPause: false,
    autoplaySpeed: 4500,
    responsive: {
      0: { items: 1 }, // Small screens
      500: { items: 2 }, // Slightly larger screens
      600: { items: 3 },
      800: { items: 4 },
      1200: { items: 4 }
    }
  };
}
