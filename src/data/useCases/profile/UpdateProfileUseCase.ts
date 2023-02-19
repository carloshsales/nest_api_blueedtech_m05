import { Profile } from "src/domain/entities/Profile";
import { IUpdateProfileUseCase } from "src/domain/useCases/profile/IUpdateProfileUseCase";
import { ProfileRepository } from "src/infra/repositories/ProfileRepository";

export class UpdateProfileUseCase implements IUpdateProfileUseCase {
	constructor(private repository: ProfileRepository) {}
	async execute(user: Profile): Promise<Profile> {
		try {
			return await this.repository.update(user);
		} catch (e) {
			throw new Error("Error create: user");
		}
	}
}
