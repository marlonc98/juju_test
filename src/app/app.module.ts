import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './presentation/pages/home-page/home-page.component';
import { CharacterCardComponent } from './presentation/components/character-card/character-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ModalInfoComponent } from './presentation/components/modal-info/modal-info.component';
import { CharacterInfoPageComponent } from './presentation/pages/character-info-page/character-info-page.component';
import { HeaderComponentComponent } from './presentation/components/header-component/header-component.component';
import { FooterComponentComponent } from './presentation/components/footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CharacterCardComponent,
    ModalInfoComponent,
    CharacterInfoPageComponent,
    HeaderComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
