import { IUserModel } from "../models/IUserModel";

export interface IUserRepository {
	findAll(): Promise<IUserModel[]>;
	findById(id: string): Promise<IUserModel>;
	create(user: IUserModel): Promise<IUserModel>;
	update(user: IUserModel): Promise<IUserModel>;
	delete(id: string): Promise<IUserModel>;
}
