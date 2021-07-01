import axios from 'axios';

export class TypeRacer {

    private static CORS_ANYWHERE = "https://zach08-cors-anywhere.herokuapp.com/";

    static async getRaces(playerId: string, universe: string, numRaces: number) {
        return await axios.get(
            `${TypeRacer.CORS_ANYWHERE}https://data.typeracer.com/games?playerId=tr:${playerId}&universe=${universe}&n=${numRaces}`,
        );
    }

}