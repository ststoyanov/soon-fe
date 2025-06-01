import { HttpClient } from '@angular/common/http';
import { Trackable } from '../models/tracked.model';

export class TrackedHttpService {
  constructor(private httpClient: HttpClient) {}

  getTracked() {
    return this.httpClient.get<Trackable[]>('/api/v1/tracked');
  }

  untrack(id: string) {
    return this.httpClient.post<Trackable[]>(`/api/v1/tracked/${id}/untrack`, {});
  }
}
