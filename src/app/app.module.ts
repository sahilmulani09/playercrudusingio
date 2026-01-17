import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayersDashhComponent } from './shared/component/players-dashh/players-dashh.component';
import { PlayersFormComponent } from './shared/component/players-form/players-form.component';
import { PlayersListComponent } from './shared/component/players-list/players-list.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    PlayersDashhComponent,
    PlayersFormComponent,
    PlayersListComponent,  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
