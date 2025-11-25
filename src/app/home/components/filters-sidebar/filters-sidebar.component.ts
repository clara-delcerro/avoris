import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filters-sidebar.component.html',
  styleUrls: ['./filters-sidebar.component.scss']
})
export class FiltersSidebarComponent {

  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  close() {
    this.isOpen = false;
  }

  open() {
    this.isOpen = true;
  }

  toggleSection(section: string) {
    this.openSections[section] = !this.openSections[section];
  }

  openSections: Record<string, boolean> = {
    destinos: true,
    aventura: true,
    alojamiento: true,
    precio: true
  };

}
