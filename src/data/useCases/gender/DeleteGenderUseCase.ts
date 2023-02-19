import { Gender } from "src/domain/entities/Gender";
import { GenderRepository } from "src/infra/repositories/GenderRepository";

export class DeleteGenderUseCase {
	constructor(private repository: GenderRepository) {}
	async execute(id: string): Promise<Gender> {
		try {
			return await this.repository.delete(id);
		} catch (e) {
			throw new Error("Error: delete user");
		}
	}
}
