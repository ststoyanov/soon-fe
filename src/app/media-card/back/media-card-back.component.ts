import { Component, input, output } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { Trackable } from '../../tracked/models/tracked.model';
import { DatePipe } from '@angular/common';
import { MediaImagePipe } from '../../shared/pipes/image-pipes';

@Component({
  selector: 'app-media-card-back',
  imports: [MatCard, MatCardContent, MatCardActions, MatButton, DatePipe, MediaImagePipe],
  templateUrl: './media-card-back.component.html',
  styleUrl: './media-card-back.component.scss',
})
export class MediaCardBackComponent {
  media = input.required<Trackable>();
  toggleCard = output<void>();
  untrack = output<void>();
}
