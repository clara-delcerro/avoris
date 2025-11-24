import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})


export class HeroComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    new Swiper('.hero__slider', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.hero__arrow--next',
        prevEl: '.hero__arrow--prev'
      }
    });
  }
}
