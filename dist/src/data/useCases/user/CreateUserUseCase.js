"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
class CreateUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(user) {
        try {
            return await this.repository.create(user);
        }
        catch (e) {
            throw new Error("Error create: user");
        }
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=CreateUserUseCase.js.map