class ForLocalStorage {
    constructor() {
        this.keyName = 'products'; // name of key localstorage
    }
//  get Array of products from localstorage
    getProducts() {
        const productslocalStorage = localStorage.getItem(this.keyName);

        if (productslocalStorage !== null) {
            return JSON.parse(productslocalStorage);
        } else {
            return [];
        }
    }
// put prodacts to Array in localstorage
    setProducts(obj) {
        let products = this.getProducts();
        const index = products.find(item => item.id === obj.id); // check if there are the same object in Array

        if (index === undefined) {
            products.push(obj);
        }
        localStorage.setItem(this.keyName, JSON.stringify(products));
    }
}

const itemLocalStorage = new ForLocalStorage();