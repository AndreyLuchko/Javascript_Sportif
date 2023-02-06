class Product {
    constructor() {
        this.nameActive = 'btn_active';
        this.cardAdd = "ADD TO CART";
        this.cardRemove = "REMOVE FROM CART";
    }
// method of rendering cards of product to HTML
    render() {
        let productsCart = itemLocalStorage.getProducts();
        let shortsBlockHtml = '';

        CATALOG.forEach(item => {
            let activeClass = '';
            let activeText = '';

            if (productsCart.find(el => el.id === item.id) === undefined) {
                activeText = this.cardAdd;
            } else {
                activeClass = ' ' + this.nameActive;
                activeText = this.cardRemove;
            }

            shortsBlockHtml +=
                `
            <div class="card-item" id=${item.id}>
                <div class="card-image">
                    <img src=${item.image} alt="short image">
                </div>
                <div class="card-name">
                    <p class="name-item">${item.name}</p>
                </div>
                <div class="card-stars">
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                    <div class="star"></div>
                </div>
                <div class="card-price">
                    <p>As low as <span class="price-item">$${item.price}</span></p>
                </div>
                <div class="card-color-choose">
                    <img src=${item.color} alt="color image">
                </div>
                <button class="card-btn${activeClass}">${activeText}</button>
            </div>
            `;
            document.querySelector('.shorts__block').innerHTML = shortsBlockHtml;
        });
    }
// method of checking rating stars in the product card    
    star() {
        const [...arr] = document.querySelectorAll('.card-item');

        arr.forEach((item, index) => {
            const [...starsArr] = document.querySelectorAll(`#${item.id} .star`);

            if (CATALOG[index].star < starsArr.length) {
                let count = starsArr.length - CATALOG[index].star;
                let newArr = starsArr.slice(-count);
                newArr.forEach(item => {
                    item.classList.add('no-active');
                });
            }
        });
    }
// method can add or remove products on localstorage, and change "ADD TO CART" button
    pushButton() {
        const shortsBlock = document.querySelector('.shorts__block');

        shortsBlock.addEventListener('click', (event) => {
            let target = event.target;
            const [...arr] = document.querySelectorAll('.card-item');

            arr.forEach((item, index) => {
                if (target.parentElement.id === item.id && target.className === 'card-btn') {
                    itemLocalStorage.setProducts(CATALOG[index]);
                    target.className = target.className + " btn_active";
                    target.innerHTML = this.cardRemove;
                } else if ((target.parentElement.id === item.id) && target.classList.contains("btn_active")) {
                    let productsCart = itemLocalStorage.getProducts();
                    let indexChek = productsCart.findIndex(item => target.parentElement.id === item.id);

                    productsCart.splice(indexChek, 1);
                    localStorage.setItem('products', JSON.stringify(productsCart));
                    target.classList.remove("btn_active");
                    target.innerHTML = this.cardAdd;
                }
            });
        });
    }
}

const productPage = new Product();

productPage.render();
productPage.star();
productPage.pushButton();