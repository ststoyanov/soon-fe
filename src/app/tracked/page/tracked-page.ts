import { Component, computed, inject, signal } from '@angular/core';
import { Trackable } from '../trackable';
import { MediaHttpClient } from '../../discover/media-http-client';
import { take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CollectionComponent } from '../collection/collection.component';

@Component({
  selector: 'app-tracked',
  imports: [CollectionComponent],
  templateUrl: './tracked-page.html',
  styleUrl: './tracked-page.scss',
})
export class TrackedPage {
  private mediaHttpClient = inject(MediaHttpClient);

  tracked = signal<Trackable[]>([]);
  showReleased = signal<boolean>(true);
  showUnreleased = signal<boolean>(true);
  released = computed(() => this.tracked().filter(media => this.hasReleased(media)));
  unreleased = computed(() => this.tracked().filter(media => !this.hasReleased(media)));

  constructor() {
    this.mediaHttpClient
      .getTracked()
      .pipe(takeUntilDestroyed())
      .subscribe(tracked => this.tracked.set(tracked));
  }

  untrack(media: Trackable) {
    this.mediaHttpClient.untrack(media).pipe(take(1)).subscribe();
  }

  private hasReleased(media: Trackable): boolean {
    const now = new Date();

    if (media.mediaType === 'MOVIE' || media.mediaType === 'GAME') {
      return !!media.releaseDate && new Date(media.releaseDate) <= now;
    } else {
      return !!media.lastReleased && !!media.lastWatchedAt && media.lastWatchedAt < media.lastReleased;
    }
  }

  toggleShowReleased() {
    this.showReleased.update(value => !value);
  }

  toggleShowUnreleased() {
    this.showUnreleased.update(value => !value);
  }

  markWatched(media: Trackable) {
    this.mediaHttpClient.markWatched(media).pipe(take(1)).subscribe();
  }
}
