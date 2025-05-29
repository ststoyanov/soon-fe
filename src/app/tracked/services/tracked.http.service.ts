import { HttpClient } from '@angular/common/http';
import { Tracked } from '../models/tracked.model';
import { tap } from 'rxjs';

export class TrackedHttpService {
  constructor(private httpClient: HttpClient) {}

  getTracked() {
    return this.httpClient.get<Tracked>('/api/v1/tracked').pipe(
      tap(tracked => {
        tracked.movies.forEach(movie => (movie.type = 'MOVIE'));
        tracked.series.forEach(series => (series.type = 'SERIES'));
        tracked.games.forEach(series => (series.type = 'GAME'));
        tracked.mangas.forEach(manga => (manga.type = 'MANGA'));
      })
    );
  }
}
