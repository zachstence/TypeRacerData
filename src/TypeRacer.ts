import axios from 'axios';

export class TypeRacer {

    private static CORS_ANYWHERE = process.env.ENVIRONMENT === "dev"
        ? "http://localhost:8080/"
        : "https://zach08-cors-anywhere.herokuapp.com/";


    static async getRaces(playerId: string, universe: string, numRaces: number) {
        return await axios.get(
            `${TypeRacer.CORS_ANYWHERE}https://data.typeracer.com/games?playerId=tr:${playerId}&universe=${universe ? universe : "play"}&n=${numRaces ? numRaces : 10}`,
        );
    }

}