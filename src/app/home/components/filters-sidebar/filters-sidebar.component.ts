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

    if (window.innerWidth < 744) {
      document.body.style.overflow = '';
    }
  }

  open() {
    this.isOpen = true;

    if (window.innerWidth < 744) {
      document.body.style.overflow = 'hidden';
    }
  }

  toggleSection(section: string) {
    this.openSections[section] = !this.openSections[section];
  }

  openSections: Record<string, boolean> = {
    destinos: false,
    aventura: true,
    alojamiento: false,
    precio: true
  };

}
