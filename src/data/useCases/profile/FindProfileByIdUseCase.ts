import { Profile } from "../../../domain/entities/Profile";
import { IFindProfileByIdUseCase } from "../../../domain/useCases/profile/IFindProfileByIdUseCase";
import { ProfileRepository } from "../../../infra/repositories/ProfileRepository";

export class FindProfileByIdUseCase implements IFindProfileByIdUseCase {
	constructor(private repository: ProfileRepository) {}
	async execute(id: string): Promise<Profile> {
		try {
			return await this.repository.findById(id);
		} catch (e) {
			throw new Error("Error in find by id: user");
		}
	}
}
