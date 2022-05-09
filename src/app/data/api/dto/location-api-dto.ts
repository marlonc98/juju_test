import { ILocationModel } from "src/app/domain/models/ilocation-model";

export class LocationApiDto {
    fromJson(json:any): ILocationModel|null {
        return {
            id: json.id,
            name: json.name,
            type: json.type,
            dimension: json.dimension,
        }
    }
}
