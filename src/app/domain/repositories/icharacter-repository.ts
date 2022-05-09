import { ICharacterModel } from "../models/icharacter-model";

export interface ICharacterRepositoryResponse {
    characters: ICharacterModel[];
    count: number;
    pages: number;
}

export interface ICharacterRepository {
    getCharacters(page:number, word:String): Promise<ICharacterRepositoryResponse>;
    getById(id:number): Promise<ICharacterModel|null>;
}
