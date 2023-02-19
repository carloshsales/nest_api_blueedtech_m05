import { User } from "../entities/User";
export interface IGetUserByIdUseCase {
    execute(id: number): Promise<User>;
}
