import { Profile } from "src/domain/entities/Profile";

export interface IFindAllProfilesUseCase {
	execute(): Promise<Profile[]>;
}
