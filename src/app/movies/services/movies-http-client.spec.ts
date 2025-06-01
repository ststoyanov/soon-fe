import { TestBed } from '@angular/core/testing';

import { MoviesHttpClient } from './movies-http-client.service';

describe(MoviesHttpClient.name, () => {
  let service: MoviesHttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesHttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
