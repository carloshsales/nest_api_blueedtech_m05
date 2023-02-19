import { Gender } from "../../../domain/entities/Gender";
import { ICreateGenderUseCase } from "../../../domain/useCases/gender/ICreateGenderUseCase";
import { GenderRepository } from "../../../infra/repositories/GenderRepository";

export class CreateGenderUseCase implements ICreateGenderUseCase {
	constructor(private repository: GenderRepository) {}
	async execute(user: Gender): Promise<Gender> {
		try {
			return await this.repository.create(user);
		} catch (e) {
			throw new Error("Error create: user");
		}
	}
}
