import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  eenableProdMode();
}

export { AppServerModule } from './app/app.server.module';
