import type RawgGame from "./RawgGame";

export default interface RawgGamesResponse {
	results: RawgGame[];
	next: string | null;
	previous: string | null;
	count: number;
}
