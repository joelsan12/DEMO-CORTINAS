import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  standalone: false,
})
export class HeroSectionComponent {
  @Input() brandName = '';
  @Input() heroImage = '';

  @Output() catalogRequested = new EventEmitter<void>();
  @Output() quoteRequested = new EventEmitter<void>();
}
