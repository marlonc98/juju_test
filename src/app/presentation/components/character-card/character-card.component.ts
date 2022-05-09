import { Component, Input, OnInit } from '@angular/core';
import { LocationApiRepository } from 'src/app/data/repository/location/location-api-repository';
import { ICharacterModel } from 'src/app/domain/models/icharacter-model';
import { ILocationModel } from 'src/app/domain/models/ilocation-model';
import { ILocationRepository } from 'src/app/domain/repositories/ilocation-repository';
import { GetLocationByIdUseCaseService } from 'src/app/domain/use-cases/get-location-by-id-use-case';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  @Input() character: ICharacterModel | undefined;
  currentLocation: ILocationModel|null = null;

  constructor() {

  }

  private async _getLocation(id: number): Promise<ILocationModel | null> {
    if(this.currentLocation != null) return this.currentLocation;
    let locationRepository: ILocationRepository = new LocationApiRepository();
    let response = await new GetLocationByIdUseCaseService(locationRepository).execute(id);
    return this.currentLocation = response;
  }

  public async openModal(): Promise<void> {
    let location = await this._getLocation(this.character!.lastLocationId);
    this.currentLocation = location;
  }

  ngOnInit(): void {
  }

}
