import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterInfoPageComponent } from './presentation/pages/character-info-page/character-info-page.component';
import { HomePageComponent } from './presentation/pages/home-page/home-page.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'character/:id', component: CharacterInfoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
