import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'storybook-testing-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  constructor() {
    debugger;
  }
}
