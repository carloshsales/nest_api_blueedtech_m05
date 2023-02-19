import { User } from "../../../domain/entities/User";
import { IFindUserByIdUseCase } from "../../../domain/useCases/IFindUserByIdUseCase";
import { UserRepository } from "../../../infra/repositories/UserRepository";
export declare class FindUserByIdUseCase implements IFindUserByIdUseCase {
    private repository;
    constructor(repository: UserRepository);
    execute(id: number): Promise<User>;
}
