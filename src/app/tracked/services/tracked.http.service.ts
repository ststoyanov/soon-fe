import {HttpClient} from '@angular/common/http';
import {Tracked} from '../models/tracked.model';

export class TrackedHttpService {
  constructor(
    private httpClient: HttpClient
  ) {
  }

  getTracked() {
    return this.httpClient.get<Tracked>('/api/v1/tracked');
  }
}
