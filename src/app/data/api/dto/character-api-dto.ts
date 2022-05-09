import { ICharacterModel } from "src/app/domain/models/icharacter-model";

export class CharacterApiDto {
    static fromJson(json:any): ICharacterModel {
        return {
            id: json.id,
            name: json.name,
            status: json.status,
            firstEpisodeName: null,
            lastLocationName: json.location.name,
            originName: json.origin.name,
            image: json.image,
            lastLocationId: json.location.url.split("/").at(-1)
        }
    }
}
