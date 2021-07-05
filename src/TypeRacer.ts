import axios from "axios";
import {z} from "zod";

// @ts-expect-error The value of process.env.ENVIRONMENT is replaced by rollup during the build
// eslint-disable-next-line no-undef
const CORS_ANYWHERE = process.env.ENVIRONMENT === "dev"
    ? "http://localhost:8080/"
    : "https://zach08-cors-anywhere.herokuapp.com/";

const DEFAULT_NUM_GAMES = 10;

const zodGame = z.object({
    wpm: z.number(),
    ac: z.number(),
    r: z.number(),
    t: z.number(),
    sl: z.string(),
    tid: z.number(),
    gn: z.number(),
    np: z.number(),
    pts: z.number(),
});
const zodGames = z.array(zodGame);

export type Game = z.infer<typeof zodGame>;

export const getGames = async (playerId: string, universe: string, numRaces: number): Promise<Game[]> => {
    const response = await axios.get(`${CORS_ANYWHERE}https://data.typeracer.com/games?playerId=tr:${playerId}&universe=${universe ? universe : "play"}&n=${numRaces ? numRaces : DEFAULT_NUM_GAMES}`);
    return zodGames.parse(response.data);
};
