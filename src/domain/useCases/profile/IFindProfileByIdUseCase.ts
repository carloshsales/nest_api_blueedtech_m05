import { Profile } from "src/domain/entities/Profile";

export interface IFindProfileByIdUseCase {
	execute(id: string): Promise<Profile>;
}
