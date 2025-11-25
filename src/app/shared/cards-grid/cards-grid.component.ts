import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelCardComponent } from './components/travel-card/travel-card.component';

@Component({
  selector: 'app-cards-grid',
  standalone: true,
  imports: [CommonModule, TravelCardComponent],
  templateUrl: './cards-grid.component.html',
  styleUrls: ['./cards-grid.component.scss']
})
export class CardsGridComponent {
  sections = [
    {
      title: 'Asia',
      cards: [
        {
          image: '../../../assets/img/card-img_01.png',
          tag: 'Quads',
          location: 'Marruecos, África',
          days: '9',
          title: 'Descubre Bangkok con Iberojjet',
          price: 248
        },
        {
          image: '../../../assets/img/card-img_02.png',
          tag: 'Quads',
          location: 'Marruecos, África',
          days: '9',
          title: 'Descubre Bangkok con Iberojet',
          price: 248
        },
        {
          image: '../../../assets/img/card-img_03.png',
          tag: 'Quads',
          location: 'Marruecos, África',
          days: '9',
          title: 'Descubre Bangkok con Iberojet',
          price: 248
        }
      ]
    },
    {
      title: 'Asia',
      cards: [
        {
          image: '../../../assets/img/card-img_01.png',
          tag: 'Quads',
          location: 'Marruecos, África',
          days: '9',
          title: 'Descubre Bangkok con Iberojjet',
          price: 248
        },
        {
          image: '../../../assets/img/card-img_02.png',
          tag: 'Quads',
          location: 'Marruecos, África',
          days: '9',
          title: 'Descubre Bangkok con Iberojet',
          price: 248
        },
        {
          image: '../../../assets/img/card-img_03.png',
          tag: 'Quads',
          location: 'Marruecos, África',
          days: '9',
          title: 'Descubre Bangkok con Iberojet',
          price: 248
        },
        {
          image: '../../../assets/img/card-img_01.png',
          tag: 'Quads',
          location: 'Marruecos, África',
          days: '9',
          title: 'Descubre Bangkok con Iberojet',
          price: 248
        },
        {
          image: '../../../assets/img/card-img_02.png',
          tag: 'Quads',
          location: 'Marruecos, África',
          days: '9',
          title: 'Descubre Bangkok con Iberojet',
          price: 248
        },
        {
          image: '../../../assets/img/card-img_03.png',
          tag: 'Quads',
          location: 'Marruecos, África',
          days: '9',
          title: 'Descubre Bangkok con Iberojet',
          price: 248
        }
      ]
    }
  ];
}
