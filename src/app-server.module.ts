import { AppModule } from './app.module';
import { ServerModule } from '@angular/platform-server';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
