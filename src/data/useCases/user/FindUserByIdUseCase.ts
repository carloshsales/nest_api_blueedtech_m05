import { User } from "../../../domain/entities/User";
import { IFindUserByIdUseCase } from "../../../domain/useCases/user/IFindUserByIdUseCase";
import { UserRepository } from "../../../infra/repositories/UserRepository";

export class FindUserByIdUseCase implements IFindUserByIdUseCase {
	constructor(private repository: UserRepository) {}
	async execute(id: string): Promise<User> {
		try {
			return await this.repository.findById(id);
		} catch (e) {
			throw new Error("Error in find by id: user");
		}
	}
}
