import { Gender } from "src/domain/entities/Gender";

export interface ICreateGenderUseCase {
	execute(gender: Gender): Promise<Gender>;
}
