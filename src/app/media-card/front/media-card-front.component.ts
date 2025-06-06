import { Component, input } from '@angular/core';
import { MatCard, MatCardContent, MatCardImage, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { Trackable } from '../../tracked/trackable';
import { MediaImagePipe } from '../../shared/pipes/image-pipe';
import { MediaIconComponent } from '../icon/media-icon.component';

@Component({
  selector: 'app-media-card-front',
  imports: [
    MatCard,
    MatCardContent,
    MatCardImage,
    DatePipe,
    MediaImagePipe,
    MediaIconComponent,
    MediaIconComponent,
    MatCardTitle,
    MatCardSubtitle,
  ],
  templateUrl: './media-card-front.component.html',
  styleUrl: './media-card-front.component.scss',
})
export class MediaCardFrontComponent {
  media = input.required<Trackable>();
}
