import { IProfileModel } from "../models/IProfileModel";

export interface IProfileRepository {
	findAll(): Promise<IProfileModel[]>;
	findById(id: string): Promise<IProfileModel>;
	create(profile: IProfileModel): Promise<IProfileModel>;
	update(profile: IProfileModel): Promise<IProfileModel>;
	delete(id: string): Promise<IProfileModel>;
}
