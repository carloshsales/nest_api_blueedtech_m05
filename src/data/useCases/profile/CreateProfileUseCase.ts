import { Profile } from "../../../domain/entities/Profile";
import { ICreateProfileUseCase } from "../../../domain/useCases/Profile/ICreateProfileUseCase";
import { ProfileRepository } from "../../../infra/repositories/profileRepository";

export class CreateProfileUseCase implements ICreateProfileUseCase {
	constructor(private repository: ProfileRepository) {}
	async execute(user: Profile): Promise<Profile> {
		try {
			return await this.repository.create(user);
		} catch (e) {
			throw new Error("Error create: user");
		}
	}
}
