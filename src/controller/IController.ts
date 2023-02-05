export interface IController {
	getAll: <T>() => T[];
	getById: <T>(id: number) => T;
	insert: <T>(obj: T) => void;
	update: <T>(id: number) => void;
	delete: <T>(id: number) => void;
}
