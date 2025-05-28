import {Component, input} from '@angular/core';
import {DatePipe} from '@angular/common';
import {MatCard, MatCardContent, MatCardImage} from '@angular/material/card';
import {Trackable} from '../../tracked/models/tracked.model';

@Component({
  selector: 'app-media-card',
  imports: [
    DatePipe,
    MatCard,
    MatCardContent,
    MatCardImage
  ],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss'
})
export class MediaCardComponent {
  media = input.required<Trackable>();
  urlPrefix = input<string>();
}
