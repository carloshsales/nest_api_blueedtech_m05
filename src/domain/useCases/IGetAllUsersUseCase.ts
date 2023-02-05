import { User } from "../entities/User";

export interface IGetAllUsersUseCase {
	execute(): Promise<User[]>;
}
