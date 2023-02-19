import { IProfileModel } from "../../data/models/IProfileModel";
import { IProfileRepository } from "../../data/repositories/IProfileRepository";

export class ProfileRepository implements IProfileRepository {
	async findAll(): Promise<IProfileModel[]> {
		throw new Error("Method not implemented.");
	}
	findById(id: string): Promise<IProfileModel> {
		throw new Error("Method not implemented.");
	}
	create(user: IProfileModel): Promise<IProfileModel> {
		throw new Error("Method not implemented.");
	}
	update(user: IProfileModel): Promise<IProfileModel> {
		throw new Error("Method not implemented.");
	}
	delete(id: string): Promise<IProfileModel> {
		throw new Error("Method not implemented.");
	}
}
