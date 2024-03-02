import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  toggleIcon: string = 'heroQueueListSolid';

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

  toggle(event: Event) {
    if (this.toggleIcon === 'heroQueueListSolid') {
      this.toggleIcon = 'heroXMarkSolid';
    } else if (this.toggleIcon === 'heroXMarkSolid') {
      this.toggleIcon = 'heroQueueListSolid';
    }
    const elementNavigation = document.querySelector('.nav-links');
    if (!elementNavigation) {
      return;
    }
    elementNavigation.classList.toggle('active');
    console.log('toggle');
  }

  removeToggle(event: Event) {
    const elementNavigation = document.querySelector('.nav-links');
    if (!elementNavigation) {
      return;
    }
    elementNavigation.classList.remove('active');
    this.toggleIcon = 'heroQueueListSolid';
  }
}
