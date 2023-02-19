import { Profile } from "./Profile";

export type User = {
	id?: string;
	name: string;
	email: string;
	password: string;
	cpf: string;
	isAdmin: boolean;
	profiles: Profile[];
};
