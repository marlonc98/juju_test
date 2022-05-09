import { ICharacterModel } from "src/app/domain/models/icharacter-model";
import { ICharacterRepository, ICharacterRepositoryResponse } from "src/app/domain/repositories/icharacter-repository";
import { CharacterApiDto } from "../../api/dto/character-api-dto";

export class CharacterApiRepository implements ICharacterRepository {
    getCharacters(page: number, word: String): Promise<ICharacterRepositoryResponse> {
        return fetch("https://rickandmortyapi.com/api/character/?page=" + page + "&name=" + word).then(response => response.json() as any).then(response => {
            let parse: ICharacterRepositoryResponse = {
                characters: response.results.map((character: any): CharacterApiDto => CharacterApiDto.fromJson(character)),
                total: response.info.pages
            };
            return parse;
        }).catch((err) => {
            let parse: ICharacterRepositoryResponse = {
                characters: [],
                total: 0
            }
            return parse;
        });
    }
    getCharacter(id: number): Promise<ICharacterModel | null> {
        return fetch("https://rickandmortyapi.com/api/character/" + id).then(response => response.json() as any).then(response => {
            let parse: ICharacterModel = CharacterApiDto.fromJson(response.results);
            return parse;
        }).catch((err) => {
            return null;
        });
    }
}
