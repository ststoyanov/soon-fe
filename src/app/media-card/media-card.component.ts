import { Component, input, output, signal } from '@angular/core';
import { Trackable } from '../tracked/trackable';
import { MediaCardFrontComponent } from './front/media-card-front.component';
import { MediaCardBackComponent } from './back/media-card-back.component';

@Component({
  selector: 'app-media-card',
  imports: [MediaCardFrontComponent, MediaCardBackComponent],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss',
})
export class MediaCardComponent {
  private isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  media = input.required<Trackable>();
  showFront = signal(true);
  untrack = output<void>();
  track = output<void>();
  markWatched = output<void>();
  recentlyTracked = signal(false);

  onMouseLeave() {
    if (!this.isTouchDevice) {
      this.showFront.set(true);
    }
  }

  onMouseEnter() {
    if (!this.isTouchDevice) {
      this.showFront.set(false);
    }
  }

  toggleCard() {
    this.showFront.update(value => !value);
  }

  toggleTracked(tracked: boolean) {
    if (tracked) {
      this.track.emit();
      this.recentlyTracked.set(true);
    } else {
      this.untrack.emit();
    }
  }
}
