import { http, HttpResponse } from 'msw'
import people from "./dummy.json";

export const handlers = [
    http.get("/people", async () => {
        await sleep(200);

        return HttpResponse.json(people);
    }),
    http.post("/people", async () => {
        await sleep(200);
        people.push({
            id: "345",
            name: "son",
            country: "asia",
            lang: "php",
        });

        return HttpResponse.json(people);
    }),
];

async function sleep(timeout) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}