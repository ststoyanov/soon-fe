import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { MediaType, Trackable } from '../tracked/models/tracked.model';

const mediaTypePaths: Record<MediaType, string> = {
  MOVIE: 'movies',
  MANGA: 'mangas',
  TV_SERIES: 'series',
  GAME: 'games',
};

export class MediaHttpClient {
  private http = inject(HttpClient);

  search(title: string): Observable<Trackable[]> {
    return this.http.get<Trackable[]>(`/api/v1/media`, { params: { title } });
  }

  trackExternal(media: Trackable) {
    const mediaPath = mediaTypePaths[media.mediaType];

    return this.http
      .get<Trackable>(`/api/v1/${mediaPath}/external/${media.externalId}`)
      .pipe(switchMap(internalMedia => this.http.post<Trackable[]>(`/api/v1/${mediaPath}/${internalMedia.id}/track`, {})));
  }
}
