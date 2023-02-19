import { Profile } from "src/domain/entities/Profile";

export interface ICreateProfileUseCase {
	execute(profile: Profile): Promise<Profile>;
}
