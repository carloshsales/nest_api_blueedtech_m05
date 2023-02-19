import { Game } from "src/domain/entities/Game";

export interface IFindGameByIdUseCase {
	execute(id: string): Promise<Game>;
}
