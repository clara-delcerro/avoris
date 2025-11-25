import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-price-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './price-modal.component.html',
  styleUrls: ['./price-modal.component.scss']
})
export class PriceModalComponent {
  @Input() location = '';
  @Input() days = '';
  @Input() isOpen = false;

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
