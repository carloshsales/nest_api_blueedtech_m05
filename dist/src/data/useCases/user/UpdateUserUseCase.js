"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
class UpdateUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(userId, user) {
        try {
            return await this.repository.create(user);
        }
        catch (e) {
            throw new Error("Error create: user");
        }
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
//# sourceMappingURL=UpdateUserUseCase.js.map