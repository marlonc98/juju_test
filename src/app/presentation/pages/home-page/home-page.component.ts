import { Component, OnInit } from '@angular/core';
import { CharacterApiRepository } from 'src/app/data/repository/character/character-api-repository';
import { ICharacterModel } from 'src/app/domain/models/icharacter-model';
import { ICharacterRepository, ICharacterRepositoryResponse } from 'src/app/domain/repositories/icharacter-repository';
import { GetCharactersUseCase } from 'src/app/domain/use-cases/get-characters-use-case';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  characters: ICharacterModel[] = [];
  currentPage: number = 1;
  totalPages: number|null = null;
  word:string = "";
  constructor() { }

  private async _getCharacteres(page: number): Promise<void> {
    let characterRepository: ICharacterRepository = new CharacterApiRepository();
    let response = await new GetCharactersUseCase(characterRepository).execute(page, this.word);
    console.log("response", response);
    this.totalPages = response.total;
    this.characters = response.characters;
  }
  ngOnInit(): void {
    this._getCharacteres(1);
  }

}
