import { Gender } from "src/domain/entities/Gender";

export interface IGetGenderByIdUseCase {
	execute(id: string): Promise<Gender>;
}
