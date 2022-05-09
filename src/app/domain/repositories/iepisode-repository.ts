import { IEpisodeModel } from "../models/iepisode-model";

export interface IEpisodeRepository {
    getById(id: number): Promise<IEpisodeModel|null>;
}
