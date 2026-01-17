import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayersDashhComponent } from './players-dashh/players-dashh.component';
import { PlayersFormComponent } from './players-form/players-form.component';
import { PlayersListComponent } from './players-list/players-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersDashhComponent,
    PlayersFormComponent,
    PlayersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
