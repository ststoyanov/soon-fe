import { Component, effect, input, model, output, signal } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatButton, MatIconButton } from '@angular/material/button';
import { Trackable } from '../../tracked/trackable';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { MediaImagePipe } from '../../shared/pipes/image-pipe';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-media-card-back',
  imports: [
    MatCard,
    MatCardContent,
    MatCardActions,
    MatButton,
    DatePipe,
    MediaImagePipe,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCardFooter,
    NgOptimizedImage,
    MatIconButton,
    MatIcon,
    MatTooltip,
  ],
  templateUrl: './media-card-back.component.html',
  styleUrl: './media-card-back.component.scss',
})
export class MediaCardBackComponent {
  media = input.required<Trackable>();
  isTracked = signal<boolean>(false);
  trackedChange = output<boolean>();
  recentlyTracked = model<boolean>(false);

  constructor() {
    effect(() => {
      this.isTracked.set(!!this.media().lastWatchedAt);
    });
  }

  toggleTracked(value = !this.isTracked()) {
    this.trackedChange.emit(value);
  }
}
