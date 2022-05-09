import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterApiRepository } from 'src/app/data/repository/character/character-api-repository';
import { EpisodeApiRepository } from 'src/app/data/repository/episode/episode-api-repository';
import { LocationApiRepository } from 'src/app/data/repository/location/location-api-repository';
import { ICharacterModel } from 'src/app/domain/models/icharacter-model';
import { IEpisodeModel } from 'src/app/domain/models/iepisode-model';
import { ILocationModel } from 'src/app/domain/models/ilocation-model';
import { ICharacterRepository } from 'src/app/domain/repositories/icharacter-repository';
import { IEpisodeRepository } from 'src/app/domain/repositories/iepisode-repository';
import { ILocationRepository } from 'src/app/domain/repositories/ilocation-repository';
import { CharacterWithEpisodeAndLocation, GetFullUserByIdUseCase } from 'src/app/domain/use-cases/get-full-user-by-id-use-case';

@Component({
  selector: 'app-character-info-page',
  templateUrl: './character-info-page.component.html',
  styleUrls: ['./character-info-page.component.css']
})
export class CharacterInfoPageComponent implements OnInit {
  character: ICharacterModel | null | undefined;
  episode: IEpisodeModel | null | undefined;
  location: ILocationModel | null | undefined;

  constructor(private activatedRoute: ActivatedRoute) { }
  private async _getCharacter(id: number): Promise<void> {
    let characterRepository: ICharacterRepository = new CharacterApiRepository();
    let episodeRepository: IEpisodeRepository = new EpisodeApiRepository();
    let locationRepository: ILocationRepository = new LocationApiRepository();
    let response: CharacterWithEpisodeAndLocation | null = await new GetFullUserByIdUseCase(characterRepository, episodeRepository, locationRepository).execute(id);
    if (response == null) {
      this._clear();
      return;
    }else{
      this.character = response.character;
      this.episode = response.episode;
      this.location = response.location;
    }
  }
  private _clear(): void {
    this.character = null;
    this.episode = null;
    this.location = null;
  }
  ngOnInit(): void {
    //Subscription Method
    this.activatedRoute.paramMap.subscribe(params => {
      try {
        let productid = params.get('id');
        this._getCharacter(parseInt(productid!));

      } catch (error) {
        this._clear();
        return;
      }
    });
  }
}
