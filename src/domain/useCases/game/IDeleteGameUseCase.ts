import { Game } from "src/domain/entities/Game";

export interface IGetGameByIdUseCase {
	execute(id: string): Promise<Game>;
}
