import { Gender } from "./Gender";

export type Game = {
	id?: string;
	title: string;
	coverImageUrl: string;
	description: string;
	year: Date;
	imdbScore: number;
	trailerYouTubeUrl: string;
	gameplayYouTubeUrl: string;
	gender: Gender[];
};
