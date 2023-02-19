import { Gender } from "src/domain/entities/Gender";
import { IUpdateGenderUseCase } from "src/domain/useCases/gender/IUpdateGenderUseCase";
import { GenderRepository } from "src/infra/repositories/GenderRepository";

export class UpdateGenderUseCase implements IUpdateGenderUseCase {
	constructor(private repository: GenderRepository) {}
	async execute(gender: Gender): Promise<Gender> {
		try {
			return await this.repository.update(gender);
		} catch (e) {
			throw new Error("Error create: user");
		}
	}
}
