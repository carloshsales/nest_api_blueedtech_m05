import { User } from "../../../domain/entities/User";
import { IFindAllUsersUseCase } from "../../../domain/useCases/user/IFindAllUsersUseCase";
import { UserRepository } from "../../../infra/repositories/UserRepository";

export class FindAllUsersUseCase implements IFindAllUsersUseCase {
	constructor(private repository: UserRepository) {}
	async execute(): Promise<User[]> {
		try {
			return await this.repository.findAll();
		} catch (e) {
			throw new Error("error in find all: user");
		}
	}
}
