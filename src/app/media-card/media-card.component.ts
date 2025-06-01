import { Component, input, output, signal } from '@angular/core';
import { Trackable } from '../tracked/models/tracked.model';
import { MediaCardFrontComponent } from './front/media-card-front.component';
import { MediaCardBackComponent } from './back/media-card-back.component';

@Component({
  selector: 'app-media-card',
  imports: [MediaCardFrontComponent, MediaCardBackComponent],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss',
})
export class MediaCardComponent {
  media = input.required<Trackable>();
  showFront = signal(true);
  untrack = output<void>();
}
