import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { MediaType, Trackable } from '../tracked/trackable';

const mediaTypePaths: Record<MediaType, string> = {
  MOVIE: 'movies',
  MANGA: 'manga',
  TV_SERIES: 'series',
  GAME: 'games',
};

export class MediaHttpClient {
  private httpClient = inject(HttpClient);

  private trackedChanged$ = new BehaviorSubject<void>(void 0);

  search(title: string): Observable<Trackable[]> {
    return this.httpClient.get<Trackable[]>(`/api/v1/media`, { params: { title } });
  }

  trackExternal(media: Trackable) {
    const mediaPath = mediaTypePaths[media.mediaType];

    return this.httpClient.get<Trackable>(`/api/v1/${mediaPath}/external/${media.externalId}`).pipe(
      switchMap(internalMedia => this.httpClient.post<void>(`/api/v1/${mediaPath}/${internalMedia.id}/track`, {})),
      tap(() => this.trackedChanged$.next())
    );
  }

  untrack(media: Trackable) {
    const mediaPath = mediaTypePaths[media.mediaType];

    return this.httpClient.post(`/api/v1/${mediaPath}/${media.id}/untrack`, {}).pipe(tap(() => this.trackedChanged$.next()));
  }

  getTracked() {
    return this.trackedChanged$.pipe(switchMap(() => this.httpClient.get<Trackable[]>('/api/v1/media/tracked')));
  }

  markWatched(media: Trackable) {
    const mediaPath = mediaTypePaths[media.mediaType];

    return this.httpClient.post(`/api/v1/${mediaPath}/${media.id}/watched`, {}).pipe(tap(() => this.trackedChanged$.next()));
  }
}
