import { HttpClient } from '@angular/common/http';
import { MediaType, Trackable } from '../models/tracked.model';
import { BehaviorSubject, switchMap, tap } from 'rxjs';

export class TrackedHttpClient {
  trackedChanged$ = new BehaviorSubject<void>(undefined);

  constructor(private httpClient: HttpClient) {}

  getTracked() {
    return this.trackedChanged$.pipe(switchMap(() => this.httpClient.get<Trackable[]>('/api/v1/media/tracked')));
  }

  untrack(id: string, mediaType: MediaType) {
    return this.httpClient
      .post<Trackable[]>(`/api/v1/${mediaType.toLowerCase()}/${id}/untrack`, {})
      .pipe(tap(() => this.trackedChanged$.next()));
  }
}
