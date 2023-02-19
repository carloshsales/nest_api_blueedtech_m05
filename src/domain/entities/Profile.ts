import { Game } from "./Game";

export type Profile = {
	id?: string;
	title: string;
	imageUrl: string;
	games: Game[];
};
