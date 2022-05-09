import { IEpisodeModel } from "src/app/domain/models/iepisode-model";

export class EpisodeApiDto {
    static fromJson(json:any): IEpisodeModel {
        return {
            id: json.id,
            name: json.name,
            airDate: json.air_date,
            episode: json.episode
        }
    }
}
