import { populateCommandTypes } from "./ui.js";
import { initBackground } from "./background.js";

let categories = [];

async function loadCategories() {
    try {
        const indexRes = await fetch("commands/index.json");
        const files = await indexRes.json();

        const allCategories = await Promise.all(
            files.map(async (file) => {
                const res = await fetch(`commands/${file}`);
                return await res.json();
            })
        );

        categories = allCategories;
    } catch (err) {
        console.error("Failed to load categories", err);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    initBackground();
    await loadCategories();
    populateCommandTypes(categories);
});