import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleInjectionToken } from '../sample-injection-token';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'storybook-testing-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  constructor(@Inject(SampleInjectionToken) value: BehaviorSubject<string>) {
    console.log({ value: value.value });
  }
}
