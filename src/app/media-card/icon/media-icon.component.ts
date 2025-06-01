import { Component, input } from '@angular/core';
import { MediaType } from '../../tracked/models/tracked.model';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-media-icon',
  imports: [MatIcon],
  templateUrl: './media-icon.component.html',
  styleUrl: './media-icon.component.scss',
})
export class MediaIconComponent {
  mediaType = input.required<MediaType>();
}
