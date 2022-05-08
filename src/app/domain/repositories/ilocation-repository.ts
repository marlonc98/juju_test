import { ILocationModel } from "../models/ilocation-model";

export interface ILocationRepository {
    getById(id:number): Promise<ILocationModel|null>;
}
