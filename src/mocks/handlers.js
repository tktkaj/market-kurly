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
  http.post("/login", async ({ request }) => {
    const { id, pw } = await request.json();
    await sleep(200);

    const user = userList.find((user) => user.id === id && user.pw === pw);
    console.log(user);

    if (!user) {
      return new HttpResponse(null);
    }
    return HttpResponse.json(user);
  }),
  // FGMKPR003 메뉴
  http.get("/productMenu", async () => {
    await sleep(200);
    return HttpResponse.json(productMenu);
  }),

  // FGMKPR003 상품리스트
  http.post("/products", async ({ request }) => {
    await sleep(200);
    const { dFilter } = await request.json();
    console.log(dFilter);
    const categoryFilter = ["2025 설 선물"]
    const productList = product.filter((item) => {
      const categoryMatch =
        categoryFilter.length === 0 || categoryFilter.includes(item.category);
      return categoryMatch;
    });

    // 필터링된 제품 목록 반환
    return HttpResponse.json(productList);
  }),
];

async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
