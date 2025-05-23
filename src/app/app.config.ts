import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PokemonService } from './pokemon/pokemon.service';
import { InMemoryDataService } from './in-memory-data.service';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AuthService } from './auth.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideHttpClient(withInterceptorsFromDi()),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService).providers!,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
    //   delay: 500,
    //   apiBase: 'api/'
    // }).providers!,
    PokemonService,
    AuthService
  ]
};
