import { FiltersSidebarComponent } from './../../home/filters-sidebar/filters-sidebar.component';
import { HeroComponent } from '../../home/hero/hero.component';
import { PriceModalComponent } from '../../home/price-modal/price-modal.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CardsGridComponent } from '../../shared/cards-grid/cards-grid.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PriceModalComponent, FiltersSidebarComponent, HeroComponent, CardsGridComponent, FooterComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
