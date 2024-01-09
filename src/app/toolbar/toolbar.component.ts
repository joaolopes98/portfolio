import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  selectedTopic: number = 0;

  selectTopic(index: number): void {
    this.selectedTopic = index;
    // You can perform additional actions when a topic is selected if needed
  }
}
