import { User } from "../../entities/User";

export interface IGetUserByIdUseCase {
	execute(id: string): Promise<User>;
}
