import { IGenderModel } from "../../data/models/IGenderModel";
import { IGenderRepository } from "../../data/repositories/IGenderRepository";

export class GenderRepository implements IGenderRepository {
	async findAll(): Promise<IGenderModel[]> {
		throw new Error("Method not implemented.");
	}
	findById(id: string): Promise<IGenderModel> {
		throw new Error("Method not implemented.");
	}
	create(game: IGenderModel): Promise<IGenderModel> {
		throw new Error("Method not implemented.");
	}
	update(game: IGenderModel): Promise<IGenderModel> {
		throw new Error("Method not implemented.");
	}
	delete(id: string): Promise<IGenderModel> {
		throw new Error("Method not implemented.");
	}
}
