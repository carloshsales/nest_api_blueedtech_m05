import { Game } from "./Game";

export type Profile = {
	id: number;
	title: string;
	imageUrl: string;
	games: Game[];
};
