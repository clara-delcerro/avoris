import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgStyle, CommonModule } from '@angular/common';
import { PriceModalComponent } from "../../../../home/components/price-modal/price-modal.component";

@Component({
  selector: 'app-travel-card',
  standalone: true,
  imports: [NgStyle, CommonModule, PriceModalComponent],
  templateUrl: './travel-card.component.html',
  styleUrls: ['./travel-card.component.scss']
})
export class TravelCardComponent {
  button(opcion: string){
    console.log('opcion :>> ', opcion);
  }

  @Input() image!: string;
  @Input() tag!: string;
  @Input() location!: string;
  @Input() days!: string;
  @Input() title!: string;
  @Input() price!: number;

  isModalOpen = false;

  openLocalModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
