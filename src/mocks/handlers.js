import { http, HttpResponse } from "msw";
import people from "./dummy.json";
import header from "./headerInfo.json";
import mainPage from "./mainPageInfo.json";
import userList from "./userInfo.json";
import productMenu from "./productMenu.json";
import product from "./products.json";

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
  http.get("/headerInfo", async () => {
    await sleep(200);

    return HttpResponse.json(header);
  }),
  http.get("/mainPageInfo", async () => {
    await sleep(200);
    return HttpResponse.json(mainPage);
  }),
  http.post("/login", async () => {
    await sleep(200);
    const id = "john";
    const pw = "1234";

    const user = userList.find((user) => user.id === id && user.pw === pw);
    console.log(user);

    // 유저정보가 없을시
    if (!user) {
      return HttpResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }
    // 유저정보 있을시
    return HttpResponse.json(user);
  }),
  http.get("/productMenu", async () => {
    await sleep(200);
    return HttpResponse.json(productMenu);
  }),
  http.post("/products", async () => {
    await sleep(200);

    const categoryFilter = [];
    const productList = product.filter((item) => {
      const categoryMatch =
        categoryFilter.length === 0 || categoryFilter.includes(item.category);
      return categoryMatch;
    });
    return HttpResponse.json(productList);
  }),
];

async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
