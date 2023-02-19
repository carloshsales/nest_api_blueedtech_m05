import { User } from "src/domain/entities/User";
import { IUpdateUserUseCase } from "src/domain/useCases/IUpdateUserUseCase";
import { UserRepository } from "src/infra/repositories/UserRepository";
export declare class UpdateUserUseCase implements IUpdateUserUseCase {
    private repository;
    constructor(repository: UserRepository);
    execute(userId: string, user: User): Promise<User>;
}
