import { User } from "../entities/User";
export interface ICreateUserUseCase {
    execute(user: User): Promise<User>;
}
