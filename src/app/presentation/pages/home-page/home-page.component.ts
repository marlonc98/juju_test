import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  count: number|null = null;
  pageSize: number = 0;
  word:string = "";
  constructor() { }

  private async _getCharacteres(page: number): Promise<void> {
    let characterRepository: ICharacterRepository = new CharacterApiRepository();
    let response = await new GetCharactersUseCase(characterRepository).execute(page, this.word);
    this.totalPages = response.pages;
    this.count = response.count;
    this.characters = response.characters;
    this.pageSize = Math.ceil(response.count!/response.pages!);
    this.currentPage = page;
  }

  public onChangePage(event: PageEvent) {
    this._getCharacteres(event.pageIndex + 1);
  }

  public onChangeWord(event: any): void {
    this.word = event.target.value ?? "";
    this._getCharacteres(1);
  }

  ngOnInit(): void {
    this._getCharacteres(1);
  }

}
