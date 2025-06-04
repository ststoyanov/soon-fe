import { Component, signal, inject } from '@angular/core';
import { TrackedHttpClient } from '../../services/tracked-http-client';
import { Trackable } from '../../models/tracked.model';
import { MediaCardComponent } from '../../../media-card/media-card.component';

@Component({
  selector: 'app-tracked',
  imports: [MediaCardComponent],
  templateUrl: './tracked.component.html',
  styleUrl: './tracked.component.scss',
})
export class TrackedComponent {
  private trackedService = inject(TrackedHttpClient);

  tracked = signal<Trackable[]>([]);

  constructor() {
    this.trackedService.getTracked().subscribe(tracked => this.tracked.set(tracked));
  }

  untrack(media: Trackable) {
    this.trackedService.untrack(media.id, media.mediaType).subscribe();
  }
}
