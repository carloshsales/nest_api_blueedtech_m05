import { User } from "../../entities/User";

export interface IUpdateUserUseCase {
	execute(user: User): Promise<User>;
}
