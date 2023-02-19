import { IUserModel } from "../../data/models/IUserModel";
import { IUserRepository } from "../../data/repositories/IUserRepository";
export declare class UserRepository implements IUserRepository {
    findAll(): Promise<IUserModel[]>;
    findById(id: number): Promise<IUserModel>;
    create(user: IUserModel): Promise<IUserModel>;
    update(user: IUserModel): Promise<IUserModel>;
    delete(id: number): Promise<IUserModel>;
}
