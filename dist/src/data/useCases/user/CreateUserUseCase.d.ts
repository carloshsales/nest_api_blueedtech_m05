import { User } from "../../../domain/entities/User";
import { ICreateUserUseCase } from "../../../domain/useCases/ICreateUserUseCase";
import { UserRepository } from "../../../infra/repositories/UserRepository";
export declare class CreateUserUseCase implements ICreateUserUseCase {
    private repository;
    constructor(repository: UserRepository);
    execute(user: User): Promise<User>;
}
