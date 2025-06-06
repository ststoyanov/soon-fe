import { Component, inject } from '@angular/core';
import { Trackable } from '../../tracked/trackable';
import { MediaHttpClient } from '../media-http-client';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MediaCardComponent } from '../../media-card/media-card.component';

@Component({
  selector: 'app-discover-page',
  imports: [MatInput, MatLabel, MediaCardComponent, MatFormField],
  templateUrl: './discover-page.html',
  styleUrl: './discover-page.scss',
})
export class DiscoverPage {
  mediaHttpClient = inject(MediaHttpClient);

  protected results: Trackable[] = [];

  search(title: string) {
    this.mediaHttpClient.search(title).subscribe(results => (this.results = results));
  }

  track(media: Trackable) {
    this.mediaHttpClient.trackExternal(media).subscribe();
  }
}
