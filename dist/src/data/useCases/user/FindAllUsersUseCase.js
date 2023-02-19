"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllUsersUseCase = void 0;
class FindAllUsersUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        try {
            return await this.repository.findAll();
        }
        catch (e) {
            throw new Error("error in find all: user");
        }
    }
}
exports.FindAllUsersUseCase = FindAllUsersUseCase;
//# sourceMappingURL=FindAllUsersUseCase.js.map