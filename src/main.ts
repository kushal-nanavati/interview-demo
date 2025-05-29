import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './components/app/app.component';
import { appConfig } from './app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) => {
  console.error(err);
});
