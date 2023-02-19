import { Game } from "src/domain/entities/Game";

export interface ICreateGameUseCase {
	execute(game: Game): Promise<Game>;
}
