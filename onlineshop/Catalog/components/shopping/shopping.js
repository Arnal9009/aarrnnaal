class Shopping {

    closeShoppingPage () {
        ROOT_SHOPPING.innerHTML = ''
    }

    render () {
        let htmlCatalog = ''
        let sumCatalog = 0
        const productsStore = localStorageUtil.getProducts()




        CATALOG.forEach(({id, name, price}) => {
            if(productsStore.indexOf(id) !== - 1) {
                htmlCatalog += `
                <tr>
                    <td class="shopping__element--name">${name}</td>
                    <td class="shopping__element--price">${price} сом.</td>
                </tr>
            `
            sumCatalog += price
            }
        }) 


        const html = `
            <div class="shopping__container">
            <div class="shopping__close" onclick="shoppingPage.closeShoppingPage()">
                <img src="components/shopping/img/close.svg">
            </div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping__element--name">Сумма:</td>
                        <td class="shopping__element--price">${sumCatalog.toLocaleString()} сом.</td>
                    </tr>
                </table>
            </div>
        `

        ROOT_SHOPPING.innerHTML = html
    }
}

const shoppingPage = new Shopping()

