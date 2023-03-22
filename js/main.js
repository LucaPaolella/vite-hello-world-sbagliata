"use strict";

const { createApp } = Vue;

const app = createApp({
    data() {

        return {
            titolo: "La mia prima app con Vite!",
        }

    }
}); app.mount("#app");