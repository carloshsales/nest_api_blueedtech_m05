import { User } from "../entities/User";
export interface IUpdateUserUseCase {
    execute(userId: string, user: User): Promise<User>;
}
