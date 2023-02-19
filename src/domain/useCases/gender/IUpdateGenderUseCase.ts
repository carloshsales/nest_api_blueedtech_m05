import { Gender } from "src/domain/entities/Gender";

export interface IUpdateGenderUseCase {
	execute(gender: Gender): Promise<Gender>;
}
