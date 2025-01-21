import { http, HttpResponse } from 'msw'
import people from "./dummy.json";
import header from "./headerInfo.json"
import mainPage from "./mainPageInfo.json"
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
    http.get("/headerInfo", async ()=>{
        await sleep(200);

        return HttpResponse.json(header);
    }),
    http.get("/mainPageInfo", async () =>{
        await sleep(200);
    })
];

async function sleep(timeout) {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}