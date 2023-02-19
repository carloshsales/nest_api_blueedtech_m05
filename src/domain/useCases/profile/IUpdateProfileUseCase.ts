import { Profile } from "src/domain/entities/Profile";

export interface IUpdateProfileUseCase {
	execute(profile: Profile): Promise<Profile>;
}
