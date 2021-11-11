class Header {

  handleShoppingOpenPage () {
    shoppingPage.render()
  }

  render (counter) {
    const html = `
      <div class="header__container">
        <nav class="nav">
        <a href="http://127.0.0.1:5500/Main/Main.html"><h3>Shot<span>Shop</span></h3></a>
          <div class="header__inp">
            <input><img src="/Catalog/images/icons/search.svg"></input>
          </div>
          <div class="nav__basket" onclick="headerPage.handleShoppingOpenPage()">
            <div class="nav__burger">
              <img src="/Catalog/images/icons/burger.svg">
              <img src="/Catalog/images/icons/basket.svg">
            </div>
            <div class="basket-radius">
              <span>${counter}</span>
            </div>
          </div>
        </nav>
      </div>
    `
    ROOT_HEADER.innerHTML = html
  }
}

const headerPage = new Header()

const productsStore = localStorageUtil.getProducts()
headerPage.render(productsStore.length)