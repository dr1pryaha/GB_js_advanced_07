Vue.component("header-el", {
  // data() {
  //   return {
  //     userSearch: "",
  //   };
  // },
  // props: ["userSearch"],
  template: `
  <div class="header">
  <div class="container">
    <div class="header-menu">
    <div class="header-menu-logo">
      <img class="header-menu-logo-svg" src="img/logo.png" alt="" />
      <filter-el ref="filter-el"></filter-el>
    </div>
    </div>

    <div class="rightHeader">
      <img src="img/bars.png" alt="" />
      <img class="userIcon" src="img/user.png" alt="" />
      <span class="cartIconWrap">
        <img class="cartIcon" src="img/cart.png" alt="" />
        <span>0</span>
      </span>
      <div class="basket hidden">
        <div class="basketRow basketHeader">
          <div>Название товара</div>
          <div>Количество</div>
          <div>Цена за шт.</div>
          <div>Итого</div>
        </div>

        <div class="basketTotal">
          Товаров в корзине на сумму: $<span class="basketTotalValue"
            >0</span
          >
        </div>
      </div>
    </div>
  </div>
</div>
  `,
});
