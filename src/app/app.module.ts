import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { UnlessDirective } from './directive/unless.directive';
import { BlurDirective } from './directive/blur.directive';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UnlessDirective,
    BlurDirective,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
