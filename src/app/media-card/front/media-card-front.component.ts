import { Component, input, output } from '@angular/core';
import { MatCard, MatCardContent, MatCardImage } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { Trackable } from '../../tracked/models/tracked.model';
import { MediaImagePipe } from '../../shared/pipes/image-pipes';
import { MediaIconComponent } from '../icon/media-icon.component';

@Component({
  selector: 'app-media-card-front',
  imports: [MatCard, MatCardContent, MatCardImage, DatePipe, MediaImagePipe, MediaIconComponent, MediaIconComponent],
  templateUrl: './media-card-front.component.html',
  styleUrl: './media-card-front.component.scss',
})
export class MediaCardFrontComponent {
  media = input.required<Trackable>();
  toggleCard = output<void>();
}
