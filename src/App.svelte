<script lang="ts">
import type { Game } from "./TypeRacer";
import { getGames } from "./TypeRacer";

    let promise: Promise<Game[]>,
        username: string,
        universe: string,
        count: number;

    async function getRaces() {
        promise = getGames(username, universe, count);
    }

</script>


<main>
    <label for="input-username">Username</label>
    <input id="input-username" bind:value={username} />

    <label for="input-universe">Universe</label>
    <input id="input-universe" bind:value={universe} />

    <label for="input-count">Count</label>
    <input id="input-count" bind:value={count} />

    <br />

    <button on:click={getRaces}>Get Races</button>

    <br />

    {#if promise}
        {#await promise}
            Loading...
        {:then games}
            <pre><code>{games.map(g => g.wpm).join("\n")}</code></pre>
        {:catch error}
            {error}
        {/await}
    {/if}
</main>


<style>

</style>