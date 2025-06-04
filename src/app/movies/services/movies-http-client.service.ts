import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trackable } from '../../tracked/models/tracked.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesHttpClient {
  private http = inject(HttpClient);

  search(title: string): Observable<Trackable[]> {
    return this.http.get<Trackable[]>(`/api/v1/movies/`, { params: { title } });
  }
}
