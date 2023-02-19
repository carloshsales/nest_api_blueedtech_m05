"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUserByIdUseCase = void 0;
class FindUserByIdUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(id) {
        try {
            return await this.repository.findById(id);
        }
        catch (e) {
            throw new Error("Error in find by id: user");
        }
    }
}
exports.FindUserByIdUseCase = FindUserByIdUseCase;
//# sourceMappingURL=FindUserByIdUseCase.js.map