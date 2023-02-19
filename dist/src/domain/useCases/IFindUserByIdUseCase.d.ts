import { User } from "../entities/User";
export interface IFindUserByIdUseCase {
    execute(id: number): Promise<User>;
}
