import { User } from "../../entities/User";

export interface IFindUserByIdUseCase {
	execute(id: string): Promise<User>;
}
