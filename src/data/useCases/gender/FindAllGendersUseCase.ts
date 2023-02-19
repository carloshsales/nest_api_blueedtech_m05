import { Gender } from "../../../domain/entities/Gender";
import { IFindAllGendersUseCase } from "../../../domain/useCases/gender/IFindAllGendersUseCase";
import { GenderRepository } from "../../../infra/repositories/GenderRepository";

export class FindAllGendersUseCase implements IFindAllGendersUseCase {
	constructor(private repository: GenderRepository) {}
	async execute(): Promise<Gender[]> {
		try {
			return await this.repository.findAll();
		} catch (e) {
			throw new Error("error in find all: user");
		}
	}
}
