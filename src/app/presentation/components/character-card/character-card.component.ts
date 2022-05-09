import { Component, Input, OnInit } from '@angular/core';
import { ICharacterModel } from 'src/app/domain/models/icharacter-model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  @Input() character: ICharacterModel|undefined;

  constructor() {

   }

  ngOnInit(): void {
  }

}
