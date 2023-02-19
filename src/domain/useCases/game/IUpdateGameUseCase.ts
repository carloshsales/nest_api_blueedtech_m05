import { Game } from "src/domain/entities/Game";

export interface IUpdateGameUseCase {
	execute(game: Game): Promise<Game>;
}
