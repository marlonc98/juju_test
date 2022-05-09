import { IEpisodeModel } from "src/app/domain/models/iepisode-model";
import { IEpisodeRepository } from "src/app/domain/repositories/iepisode-repository";
import { EpisodeApiDto } from "../../api/dto/episode-api-dto";

export class EpisodeApiRepository implements IEpisodeRepository {
    async getById(id: number): Promise<IEpisodeModel | null> {
        return fetch("https://rickandmortyapi.com/api/episode/" + id).then(response => response.json() as any).then(response => {
            let parse: IEpisodeModel = EpisodeApiDto.fromJson(response);
            return parse;
        }).catch((err) => {
            return null;
        });
    }
}
