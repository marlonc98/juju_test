import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './presentation/pages/home-page/home-page.component';
import { CharacterCardComponent } from './presentation/components/character-card/character-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharacterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
