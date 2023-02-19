import { Profile } from "src/domain/entities/Profile";

export interface IGetProfileByIdUseCase {
	execute(id: string): Promise<Profile>;
}
