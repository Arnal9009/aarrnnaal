class Products {

  constructor () {
    this.classNameActive = 'products__element--btn-active'
    this.labelAdd = 'Добавить в корзину'
    this.labelRemove = 'Убрать из корзины'
  }

  handleLocalStore (element, id) {
    const { pushProducts, products } = localStorageUtil.putProducts(id)

    if (pushProducts) {
      element.innerHTML = this.labelRemove
      element.classList.add(this.classNameActive)
    } else {
      element.innerHTML = this.labelAdd
      element.classList.remove(this.classNameActive)
    }
      headerPage.render(products.length)
  }

  render() {

    const productsStore = localStorageUtil.getProducts()
    let htmlCatalog = ''

    CATALOG.forEach(({ id, name, img, price, type }) => {

      let activeClass = ''
      let activeText = ''

      if (productsStore.indexOf(id) === - 1) {
        activeText = this.labelAdd
      } else {
        activeText = this.labelRemove
        activeClass = " "+this.classNameActive
      }


      htmlCatalog += `
        <li class="products__element">
          <img class="products__element--img" src="${img}" />
          <div class="products__element--info">
            <h4 class="products__element--name">${name}</h4>
            <hr class="products__element--stikc">
            <h4 class="products__element--type">${type}</h4>
          </div>
          <div class="products__element--footer">
            <p class="products__element--price">${price.toLocaleString()} сом.</p>
            <button 
              class="products__element--btn${activeClass}"
              onclick="productsPage.handleLocalStore(this, '${id}')"
            >${activeText}</button>
          </div>
        </li>
      `
    })
    const html = `
      <ul class="products__container">
        ${htmlCatalog}
      </ul>
    `
    ROOT_PRODUCTS.innerHTML = html
  }
}

const productsPage = new Products()
productsPage.render()