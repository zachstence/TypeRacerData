/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import App from "./App.svelte";

const app = new App({
    target: document.body,
    props: {
        name: "world",
    },
});

export default app;
