import { Profile } from "src/domain/entities/Profile";
import { ProfileRepository } from "src/infra/repositories/ProfileRepository";

export class DeleteProfileUseCase {
	constructor(private repository: ProfileRepository) {}
	async execute(id: string): Promise<Profile> {
		try {
			return await this.repository.delete(id);
		} catch (e) {
			throw new Error("Error: delete user");
		}
	}
}
