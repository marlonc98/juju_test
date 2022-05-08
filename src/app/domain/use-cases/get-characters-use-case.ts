import { ICharacterRepository, ICharacterRepositoryResponse } from "../repositories/icharacter-repository";

export class GetCharactersUseCase {
    private characterRepository: ICharacterRepository
    constructor(characterRepository: ICharacterRepository) {
        this.characterRepository = characterRepository;
    }
    public execute(page: number, word: string): Promise<ICharacterRepositoryResponse> {
        return this.characterRepository.getCharacters(page, word);
    }
}
