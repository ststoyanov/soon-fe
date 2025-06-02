import { HttpClient } from '@angular/common/http';
import { Trackable } from '../models/tracked.model';
import { BehaviorSubject, switchMap, tap } from 'rxjs';

export class TrackedHttpService {
  trackedChanged$ = new BehaviorSubject<void>(undefined);

  constructor(private httpClient: HttpClient) {}

  getTracked() {
    return this.trackedChanged$.pipe(switchMap(() => this.httpClient.get<Trackable[]>('/api/v1/tracked')));
  }

  untrack(id: string) {
    return this.httpClient.post<Trackable[]>(`/api/v1/tracked/${id}/untrack`, {}).pipe(tap(() => this.trackedChanged$.next()));
  }
}
