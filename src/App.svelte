<script lang="ts">
import { TypeRacer } from "./TypeRacer";

	/*
	{
        "ac": 0.97,				Accuracy
        "np": 2,				Num players
        "wpm": 92.58,			WPM
        "r": 1,					Result (placement at end of race)
        "t": 1625084782.075,	Timestamp
        "sl": "L6",				Skill level ()
        "tid": 4790199,			Text ID
        "gn": 39,				Game Number (counts up for each game a player plays)
        "pts": 30.86			Points (num words * words per second)
    },
	*/

	let promise = TypeRacer.getRaces("zach_08", "dictionary", 100);

</script>


<main>
	{#await promise}
		Loading...
	{:then data}
		<pre><code>{data.data.map(d => d.wpm).join("\n")}</code></pre>
	{:catch error}
		{error}
	{/await}
</main>


<style>

</style>