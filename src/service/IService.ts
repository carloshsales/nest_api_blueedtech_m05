import { User } from "../model/entities/User";

export interface IService {
	getAll: <T>() => T[];
	getById: <T>(id: number) => T;
	insert: <T>(object: T) => void;
	update: <T>(id: number, object: T) => void;
	delete: (id: number) => void;
}
