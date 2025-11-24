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
          days: 9,
          title: 'Descubre Bangkok con Iberojjet',
          price: 248
        },
        {
          image: '../../../assets/img/card-img_02.png',
          tag: 'Parapente',
          location: 'Egipto, África',
          days: 7,
          title: 'Ruta por el desierto',
          price: 320
        },
        {
          image: '../../../assets/img/card-img_03.png',
          tag: 'Surf',
          location: 'Indonesia, Asia',
          days: 12,
          title: 'Bali como nunca antes',
          price: 680
        },
        {
          image: '../../../assets/img/card-img_01.png',
          tag: 'Parapente',
          location: 'Egipto, África',
          days: 7,
          title: 'Ruta por el desierto',
          price: 320
        },
        {
          image: '../../../assets/img/card-img_02.png',
          tag: 'Parapente',
          location: 'Egipto, África',
          days: 7,
          title: 'Ruta por el desierto',
          price: 320
        },
        {
          image: '../../../assets/img/card-img_03.png',
          tag: 'Parapente',
          location: 'Egipto, África',
          days: 7,
          title: 'Ruta por el desierto',
          price: 320
        }
      ]
    },
    {
      title: 'Asiaz',
      cards: [
        {
          image: '../../../assets/img/card-img_01.png',
          tag: 'Quads',
          location: 'Marruecos, África',
          days: 9,
          title: 'Descubre Bangkok con Iberojjet',
          price: 248
        },
        {
          image: '../../../assets/img/card-img_02.png',
          tag: 'Parapente',
          location: 'Egipto, África',
          days: 7,
          title: 'Ruta por el desierto',
          price: 320
        },
        {
          image: '../../../assets/img/card-img_03.png',
          tag: 'Surf',
          location: 'Indonesia, Asia',
          days: 12,
          title: 'Bali como nunca antes',
          price: 680
        }
      ]
    }
  ];
}
