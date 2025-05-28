import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {AuthHttpService} from './auth/services/auth.http.service';
import {HttpClient, provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes),
    provideHttpClient(),
    {
      provide: AuthHttpService,
      useFactory: (http: HttpClient) => new AuthHttpService(http),
      deps: [HttpClient]
    }
  ]
};
