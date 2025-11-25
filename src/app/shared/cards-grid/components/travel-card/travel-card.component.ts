import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-travel-card',
  standalone: true,
  imports: [NgStyle],
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

  @Output() breakdownClick = new EventEmitter<{ location: string; days: string }>();

  onBreakdownClick() {
    this.breakdownClick.emit({
      location: this.location,
      days: this.days
    });
  }

  @Output() openBreakdown = new EventEmitter<any>();

  openModal(cardData: any, cardElement: HTMLElement) {
    this.openBreakdown.emit({
      ...cardData,
      element: cardElement
    });
  }
}
