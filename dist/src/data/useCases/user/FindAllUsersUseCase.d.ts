import { User } from "../../../domain/entities/User";
import { IFindAllUsersUseCase } from "../../../domain/useCases/IFindAllUsersUseCase";
import { UserRepository } from "../../../infra/repositories/UserRepository";
export declare class FindAllUsersUseCase implements IFindAllUsersUseCase {
    private repository;
    constructor(repository: UserRepository);
    execute(): Promise<User[]>;
}
