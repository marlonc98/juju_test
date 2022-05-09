import { ILocationModel } from "src/app/domain/models/ilocation-model";
import { ILocationRepository } from "src/app/domain/repositories/ilocation-repository";
import { LocationApiDto } from "../../api/dto/location-api-dto";

export class LocationApiRepository implements ILocationRepository {
    getById(id: number): Promise<ILocationModel | null> {
        return fetch("https://rickandmortyapi.com/api/location/" + id).then(response => response.json() as any).then(response => {
            if(response == null) return null;
            let parse: ILocationModel = LocationApiDto.fromJson(response);
            return parse;
        }).catch((err) => {
            console.log("err", err);
            return null;
        });
    }

}
