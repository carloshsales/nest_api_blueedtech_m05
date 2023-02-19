import { Game } from "src/domain/entities/Game";

export interface IFindAllGamesUseCase {
	execute(): Promise<Game[]>;
}
