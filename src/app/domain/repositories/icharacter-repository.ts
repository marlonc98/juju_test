import { ICharacterModel } from "../models/icharacter-model";

export interface ICharacterRepositoryResponse {
    pages: number;
    total: number;
}

export interface ICharacterRepository {
    getCharacters(page:number, word:String): Promise<ICharacterRepositoryResponse>;
    getCharacter(id:number): Promise<ICharacterModel|null>;
}
