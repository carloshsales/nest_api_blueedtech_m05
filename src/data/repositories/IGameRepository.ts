import { IGameModel } from "../models/IGameModel";

export interface IGameRepository {
	findAll(): Promise<IGameModel[]>;
	findById(id: string): Promise<IGameModel>;
	create(game: IGameModel): Promise<IGameModel>;
	update(game: IGameModel): Promise<IGameModel>;
	delete(id: string): Promise<IGameModel>;
}
