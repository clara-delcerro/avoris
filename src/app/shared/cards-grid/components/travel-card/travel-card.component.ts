import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-travel-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './travel-card.component.html',
  styleUrls: ['./travel-card.component.scss']
})
export class TravelCardComponent {
  @Input() image!: string;
  @Input() tag!: string;
  @Input() location!: string;
  @Input() days!: number;
  @Input() title!: string;
  @Input() price!: number;
}
