import { IFindAllProfilesUseCase } from "src/domain/useCases/profile/IFindAllProfilesUseCase";
import { Profile } from "../../../domain/entities/Profile";

import { ProfileRepository } from "../../../infra/repositories/ProfileRepository";

export class FindAllProfilesUseCase implements IFindAllProfilesUseCase {
	constructor(private repository: ProfileRepository) {}
	async execute(): Promise<Profile[]> {
		try {
			return await this.repository.findAll();
		} catch (e) {
			throw new Error("error in find all: user");
		}
	}
}
