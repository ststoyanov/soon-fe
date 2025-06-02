import { Component, signal } from '@angular/core';
import { TrackedHttpService } from '../../services/tracked.http.service';
import { Trackable } from '../../models/tracked.model';
import { MediaCardComponent } from '../../../media-card/media-card.component';

@Component({
  selector: 'app-tracked',
  imports: [MediaCardComponent],
  templateUrl: './tracked.component.html',
  styleUrl: './tracked.component.scss',
})
export class TrackedComponent {
  tracked = signal<Trackable[]>([]);

  constructor(private trackedService: TrackedHttpService) {
    this.trackedService
      .getTracked()
      .subscribe(tracked => this.tracked.set(tracked.sort((a, b) => Date.parse(a.releaseDate) - Date.parse(b.releaseDate))));
  }

  untrack(id: string) {
    this.trackedService.untrack(id).subscribe();
  }
}
