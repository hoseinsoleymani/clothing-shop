const openShopCart = document.querySelectorAll(".container-shoping-cart");
const closedShopCart = document.querySelectorAll(".shop-times");
const products = [...document.querySelectorAll(".main-slide")];
const removeProduct = document.querySelector(".remove-product");
const productsContainer = document.querySelector(".products-container");
let productList = [];
let productNumber = 0;

eventListeners();
function eventListeners() {
  products.map((product) => {
    product.addEventListener("click", setShopBtn);
  });
  openShopCart.forEach((open) => {
    open.addEventListener("click", () => {
      addClassToShopEl();
    });
  });
  closedShopCart.forEach((closed) => {
    closed.addEventListener("click", () => {
      deleteClassToShopEl();
    });
  });
  removeProduct.addEventListener("click", removeAllProduct);
}

function deleteClassToShopEl() {
  const shoppingCartContainer = document.querySelector(".shopping-cart");
  const shopBack = document.querySelector(".shopp-back");
  shoppingCartContainer.classList.remove("active");
  shopBack.classList.remove("active");
}

function addClassToShopEl() {
  const shoppingCartContainer = document.querySelector(".shopping-cart");
  const shopBack = document.querySelector(".shopp-back");
  shoppingCartContainer.classList.toggle("active");
  shopBack.classList.toggle("active");
}

function setShopBtn(e) {
  const productContainer = e.target;

  if (productContainer.classList.contains("sea-img")) {
    getProductInfo(productContainer);
    setProductNumber();
  }
}

function setProductNumber() {
  const buyingNumber = document.querySelector(".buying-numebr");
  productNumber++;
  buyingNumber.innerHTML = productNumber;
}

function getProductInfo(productContainer) {
  const parentProduct = productContainer.parentElement;

  const product = {
    src: parentProduct.querySelector("img").src,
    total: parentProduct.parentElement
      .querySelector(".product-price")
      .textContent.trim(),
    title: parentProduct.parentElement
      .querySelector(".product-title")
      .textContent.trim(),
  };

  productList.push(product);
  addToShoppingCart(product);
}

function addToShoppingCart(product) {
  const { src, total, title } = product;

  const productContainerEl = document.createElement("div");
  const productEl = `
    <div class="d-flex shopping-cart-product-container">
        <img src=${src} class="shopping-cart-img"/>
        <div>
            <p class="title-shopping-cart">${title}</p>
            <p class="total-shopping-cart">${total} تومان</p>
        </div>
    </div>
    `;

  productContainerEl.innerHTML = productEl;
  productsContainer.appendChild(productContainerEl);

  setProductPrice();
}

function setProductPrice() {
  const totalEl = document.querySelector("#total");
  const calculatePrice = priceCalculator(productList);

  totalEl.innerHTML = `${+calculatePrice} تومان`;
}

function priceCalculator(productListPa) {
  let calculatePrice = 0;

  productListPa.map((product) => {
    calculatePrice += parseInt(product.total);
  });

  return calculatePrice;
}

function removeAllProduct() {
  const totalEl = document.querySelector("#total");
  const buyingNumber = document.querySelector(".buying-numebr");
  
  productsContainer.innerHTML = "";
  productList = [];
  const calculatePrice = priceCalculator(productList);
  totalEl.innerHTML = `${+calculatePrice}`;

  productNumber = 0;
  buyingNumber.innerHTML = productNumber;
}
