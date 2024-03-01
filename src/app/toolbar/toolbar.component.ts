import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const element = document.getElementById('toolbar');

    if (!element) {
      return;
    }

    if (window.scrollY > 50) {
      element.classList.add('toolbar-scrolled');
    } else {
      element.classList.remove('toolbar-scrolled');
    }
  }
}
