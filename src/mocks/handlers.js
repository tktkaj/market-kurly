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
    cart.push({
      userId: req.id,
      product: [],
    });
    return HttpResponse.json(req);
  }),
  // 장바구니 조회
  http.post("/myCart", async ({ request }) => {
    const { userId } = await request.json();
    console.log(`지금 user${userId}`);
    const myCart = cart.filter((item) => item.userId === userId);
    return HttpResponse.json(myCart);
  }),
  // 장바구니 담기
  http.post("/cart", async ({ request }) => {
    try {
      // userId, product param 받음
      const { userId, product } = await request.json();

      // user정보가 들어있는 개체배열의 인덱스 찾기
      const userIndex = cart.findIndex((item) => item.userId === userId);

      // 장바구니 안에 추가될 상품이 있는지 확인
      const cartProduct = cart[userIndex].product;
      const productIndex = cartProduct.findIndex(
        (item) => item.title === product.title
      );
      // 상품이 있다면 기존 상품 count++, 없다면 count속성 추가 후 삽입
      if (productIndex !== -1) {
        cart[userIndex].product[productIndex].count++;
      } else {
        product.count = 1;
        cart[userIndex].product.push(product);
      }

      return HttpResponse.json({
        success: true,
        cart: cart[userIndex].product,
      });
    } catch (error) {
      return HttpResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }
  }),

  // 장바구니 부분 삭제
  http.post("/delete-cart", async ({ request }) => {
    console.log("deleteCart Post start");
    const { userId, product } = await request.json();
    // user정보가 들어있는 개체배열의 인덱스 찾기
    const userIndex = cart.findIndex((item) => item.userId === userId);
    // 장바구니 안에 추가될 상품이 있는지 확인
    const cartProduct = cart[userIndex].product;
    const productIndex = cartProduct.findIndex(
      (item) => item.title === product.title
    );

    cart[userIndex].product.splice(productIndex, 1);
    const myCart = cart.filter((item) => item.userId === userId);

    return HttpResponse.json(myCart);
  }),
  // 장바구니 전체 삭제
  http.post("/delete-all-cart", async ({ request }) => {
    const { userId } = await request.json();
    console.log(`userid는 ${userId}`);
    if (userId) {
      const userIndex = cart.findIndex((item) => item.userId === userId);
      cart[userIndex].product = [];
    }
    const myCart = cart.filter((item) => item.userId === userId);
    console.log(myCart);
    return HttpResponse.json(myCart);
  }),
  // 상품 수량 감소
  http.post("/cart-count-down", async ({ request }) => {
    const { userId, product } = await request.json();
    // user정보가 들어있는 개체배열의 인덱스 찾기
    const userIndex = cart.findIndex((item) => item.userId === userId);
    // 장바구니 안에 추가될 상품이 있는지 확인
    const cartProduct = cart[userIndex].product;
    const productIndex = cartProduct.findIndex(
      (item) => item.title === product.title
    );

    cart[userIndex].product[productIndex].count--;
    const myCart = cart.filter((item) => item.userId === userId);
    
    return HttpResponse.json(myCart);
  }),
  // 상품 수량 증가
  http.post("/cart-count-up", async ({ request }) => {
    const { userId, product } = await request.json();
    // user정보가 들어있는 개체배열의 인덱스 찾기
    const userIndex = cart.findIndex((item) => item.userId === userId);
    // 장바구니 안에 추가될 상품이 있는지 확인
    const cartProduct = cart[userIndex].product;
    const productIndex = cartProduct.findIndex(
      (item) => item.title === product.title
    );
    
    cart[userIndex].product[productIndex].count++;
    const myCart = cart.filter((item) => item.userId === userId);
    
    return HttpResponse.json(myCart);
  }),
];

async function sleep(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
