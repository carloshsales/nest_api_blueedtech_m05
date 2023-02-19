import { Game } from "../../../domain/entities/Game";
import { ICreateGameUseCase } from "../../../domain/useCases/Game/ICreateGameUseCase";
import { GameRepository } from "../../../infra/repositories/GameRepository";

export class CreateGameUseCase implements ICreateGameUseCase {
	constructor(private repository: GameRepository) {}
	async execute(Game: Game): Promise<Game> {
		try {
			return await this.repository.create(Game);
		} catch (e) {
			throw new Error("Error create: Game");
		}
	}
}
