import { User } from "../../../domain/entities/User";
import { ICreateUserUseCase } from "../../../domain/useCases/user/ICreateUserUseCase";
import { UserRepository } from "../../../infra/repositories/UserRepository";

export class CreateUserUseCase implements ICreateUserUseCase {
	constructor(private repository: UserRepository) {}
	async execute(user: User): Promise<User> {
		try {
			return await this.repository.create(user);
		} catch (e) {
			throw new Error("Error create: user");
		}
	}
}
