import { IUserModel } from "../../data/models/IUserModel";
import { IUserRepository } from "../../data/repositories/IUserRepository";

export class UserRepository implements IUserRepository {
	async findAll(): Promise<IUserModel[]> {
		throw new Error("Method not implemented.");
	}
	findById(id: string): Promise<IUserModel> {
		throw new Error("Method not implemented.");
	}
	create(user: IUserModel): Promise<IUserModel> {
		throw new Error("Method not implemented.");
	}
	update(user: IUserModel): Promise<IUserModel> {
		throw new Error("Method not implemented.");
	}
	delete(id: string): Promise<IUserModel> {
		throw new Error("Method not implemented.");
	}
}
