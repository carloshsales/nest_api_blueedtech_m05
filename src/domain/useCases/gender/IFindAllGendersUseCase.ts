import { Gender } from "src/domain/entities/Gender";

export interface IFindAllGendersUseCase {
	execute(): Promise<Gender[]>;
}
