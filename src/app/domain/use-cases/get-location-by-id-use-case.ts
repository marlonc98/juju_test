import { Injectable } from '@angular/core';
import { ILocationModel } from '../models/ilocation-model';
import { ILocationRepository } from '../repositories/ilocation-repository';

export class GetLocationByIdUseCaseService {
  private locationRepository: ILocationRepository
  constructor(locationRepository: ILocationRepository) {
      this.locationRepository = locationRepository;
  }
  public execute(id: number): Promise<ILocationModel|null> {
      return this.locationRepository.getById(id);
  }
}
