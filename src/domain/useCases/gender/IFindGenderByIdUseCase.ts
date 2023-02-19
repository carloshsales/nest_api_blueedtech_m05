import { Gender } from "src/domain/entities/Gender";

export interface IFindGenderByIdUseCase {
	execute(id: string): Promise<Gender>;
}
