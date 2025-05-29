import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatCard, MatCardContent, MatCardImage } from '@angular/material/card';
import { Trackable } from '../../tracked/models/tracked.model';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-media-card',
  imports: [DatePipe, MatCard, MatCardContent, MatCardImage, MatIcon],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss',
})
export class MediaCardComponent {
  media = input.required<Trackable>();
  urlPrefix = input<string>();

  protected inputIcon(): string {
    switch (this.media().type) {
      case 'MOVIE':
        return 'videocam';
      case 'SERIES':
        return 'tv';
      case 'GAME':
        return 'sports_esports';
      case 'MANGA':
        return 'menu_book';
    }
  }
}
