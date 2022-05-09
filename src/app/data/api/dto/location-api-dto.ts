import { ILocationModel } from "src/app/domain/models/ilocation-model";

export class LocationApiDto {
    static fromJson(json:any): ILocationModel {
        return {
            id: json.id,
            name: json.name,
            type: json.type,
            dimension: json.dimension,
        }
    }
}
