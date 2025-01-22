import { http, HttpMethods, HttpResponse } from "msw";
import people from "./dummy.json";
import header from "./headerInfo.json";
import mainPage from "./mainPageInfo.json";
import userList from "./userInfo.json";
import productMenu from "./productMenu.json";
import product from "./products.json";
import cart from "./cart.json";

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
    const req = await request.json();
    console.log("나야 필터,");
    console.log(typeof req.filter);
    const categoryFilter = req.filter || [];

    const productList = product.filter((item) => {
      const categoryMatch =
        categoryFilter.length === 0 || categoryFilter.includes(item.category);
      return categoryMatch;
    });

    // 필터링된 제품 목록 반환
    return HttpResponse.json(productList);
  }),
  // 회원가입 로직
  http.post("/signup", async ({ request }) => {
    const req = await request.json();
    userList.push({
      id: req.id,
      pw: req.pw,
      name: req.name,
      email: req.email,
      role: req.role,
    });
    return HttpResponse.json(req);
  }),
  // 장바구니 조회
  http.get("/cart", async ({ request }) => {
    const url = new URL(request.url);
    const userId = url.searchParams.get("userId");
    const myCart = cart.filter((item) => item.userId === userId);
    return HttpResponse.json(myCart);
  }),
  // 장바구니 담기
  http.post("/cart", async ({ request }) => {
    const req = await request.json();
    const data = {
      userId: req.userId,
      product: req.product,
    };
    cart.push(data);
    return HttpResponse.json(data);
  }),
  // 장바구니 부분 삭제
  http.post("/delete-cart", async ({ request }) => {
    const req = await request.json();
    const idx = req.index;
    cart.splice(idx, 1);
    return HttpResponse.json(cart);
  }),
  // 장바구니 전체 삭제
  http.post("/delete-all-cart", async () => {
    cart = [];
    return HttpResponse.json(cart);
  }),
];

async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
