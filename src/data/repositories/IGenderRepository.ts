import { IGenderModel } from "../models/IGenderModel";

export interface IGenderRepository {
	findAll(): Promise<IGenderModel[]>;
	findById(id: string): Promise<IGenderModel>;
	create(gender: IGenderModel): Promise<IGenderModel>;
	update(gender: IGenderModel): Promise<IGenderModel>;
	delete(id: string): Promise<IGenderModel>;
}
