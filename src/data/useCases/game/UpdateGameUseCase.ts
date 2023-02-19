import { User } from "src/domain/entities/User";
import { IUpdateUserUseCase } from "src/domain/useCases/user/IUpdateUserUseCase";
import { UserRepository } from "src/infra/repositories/UserRepository";

export class UpdateUserUseCase implements IUpdateUserUseCase {
	constructor(private repository: UserRepository) {}
	async execute(user: User): Promise<User> {
		try {
			return await this.repository.update(user);
		} catch (e) {
			throw new Error("Error create: user");
		}
	}
}
