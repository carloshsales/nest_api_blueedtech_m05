import { User } from "src/domain/entities/User";
import { UserRepository } from "src/infra/repositories/UserRepository";

export class DeleteUserUseCase {
	constructor(private repository: UserRepository) {}
	async execute(id: string): Promise<User> {
		try {
			return await this.repository.delete(id);
		} catch (e) {
			throw new Error("Error: delete user");
		}
	}
}
