import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-price-modal',
  standalone: true,
    imports: [CommonModule,  NgIf],
  templateUrl: './price-modal.component.html',
  styleUrls: ['./price-modal.component.scss']
})
export class PriceModalComponent {

  @Input() isOpen = false;
  @Input() location = '';
  @Input() days = '';

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
