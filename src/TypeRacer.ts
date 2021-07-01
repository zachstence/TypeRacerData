import axios from 'axios';

export class TypeRacer {

    private static CORS_ANYWHERE = process.env.ENVIRONMENT === "dev"
        ? "https://zach08-cors-anywhere.herokuapp.com/"
        : "http://localhost:8080/";


    static async getRaces(playerId: string, universe: string, numRaces: number) {
        return await axios.get(
            `${TypeRacer.CORS_ANYWHERE}https://data.typeracer.com/games?playerId=tr:${playerId}&universe=${universe ? universe : "play"}&n=${numRaces ? numRaces : 10}`,
        );
    }

}