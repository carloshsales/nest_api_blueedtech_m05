import { Gender } from "../../../domain/entities/Gender";
import { IFindGenderByIdUseCase } from "../../../domain/useCases/gender/IFindGenderByIdUseCase";
import { GenderRepository } from "../../../infra/repositories/GenderRepository";

export class FindGenderByIdUseCase implements IFindGenderByIdUseCase {
	constructor(private repository: GenderRepository) {}
	async execute(id: string): Promise<Gender> {
		try {
			return await this.repository.findById(id);
		} catch (e) {
			throw new Error("Error in find by id: Gender");
		}
	}
}
