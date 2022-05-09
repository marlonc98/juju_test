import { ICharacterModel } from "../models/icharacter-model";
import { IEpisodeModel } from "../models/iepisode-model";
import { ILocationModel } from "../models/ilocation-model";
import { ICharacterRepository } from "../repositories/icharacter-repository";
import { IEpisodeRepository } from "../repositories/iepisode-repository";
import { ILocationRepository } from "../repositories/ilocation-repository";

export interface CharacterWithEpisodeAndLocation {
    character: ICharacterModel;
    episode: IEpisodeModel|null;
    location: ILocationModel|null;
}

export class GetFullUserByIdUseCase {
    private characterRepository: ICharacterRepository;
    private episodeRepository: IEpisodeRepository;
    private locationRepository: ILocationRepository;

    constructor(characterRepository: ICharacterRepository, episodeRepository: IEpisodeRepository, locationRepository: ILocationRepository) {
        this.characterRepository = characterRepository;
        this.episodeRepository = episodeRepository;
        this.locationRepository = locationRepository;
    }


    public async execute(id: number): Promise<CharacterWithEpisodeAndLocation | null> {
        const character = await this.characterRepository.getById(id);
        if(character == null) return null;
        const episode = await this.episodeRepository.getById(character.firstEpisodeId);
        const location = await this.locationRepository.getById(character.lastLocationId);
        return {
            character: character,
            episode: episode,
            location: location
        }
    }
}
