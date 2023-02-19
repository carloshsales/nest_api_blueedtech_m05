import { IGameModel } from "../../data/models/IGameModel";
import { IGameRepository } from "../../data/repositories/IGameRepository";

export class GameRepository implements IGameRepository {
	async findAll(): Promise<IGameModel[]> {
		throw new Error("Method not implemented.");
	}
	findById(id: string): Promise<IGameModel> {
		throw new Error("Method not implemented.");
	}
	create(game: IGameModel): Promise<IGameModel> {
		throw new Error("Method not implemented.");
	}
	update(game: IGameModel): Promise<IGameModel> {
		throw new Error("Method not implemented.");
	}
	delete(id: string): Promise<IGameModel> {
		throw new Error("Method not implemented.");
	}
}
