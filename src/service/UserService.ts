import { IService } from "./IService";

export class UserService implements IService {
	constructor(private repository: UserRepository) {}

	getAll<User>(): User[] {
		const list = this.repository.getAll();
		if (!list) {
			throw new Error("Error find all");
		}
		return list;
	}

	getById<User>(id: number): User {
		const user = this.repository.getById(id);
		if (!user) {
			throw new Error("Error find by id");
		}
		return user;
	}

	insert<User>(object: User): void {
		this.repository.create(object);
	}
	update<User>(id: number, object: User): void {
		const user = this.getById(id);
		this.repository.create(object);
	}
	delete<User>(id: number): void {
		this.repository.delete(id);
	}
}
