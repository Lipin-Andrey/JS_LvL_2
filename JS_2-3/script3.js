
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(url, callback) {
    return new Promise((resolve, reject) => {
        console.log('Работает промис');
        let xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject;
        xhr.open("GET", url, true);
        xhr.onload = () => resolve(callback(xhr.responseText));
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
}



class GoodsItem {
    constructor(product_name = 'Product', price = 'No price', img = 'images/no-image.jpg') {
        this.product_name = product_name;
        this.price = price;
        this.img = img;
    }
    render() {
        return `<div class="goods-item"><div class="goods-info"><img src="${this.img}"alt="${this.product_name}"><h3>${this.product_name}</h3><p>${this.price}</p></div><button class='addClick'>Добавить</button></div>`;

    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods(cb) {
        makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            cb();
            console.log(goods);
        })
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price, good.img);
            listHtml += goodItem.render();
        })
        document.querySelector('.goods-list').innerHTML = listHtml;
    }


    calcAllGoods() {
        let totalPrice = 0;
        this.goods.forEach((good) => {
            if (good.price !== undefined) {
                totalPrice += good.price;
                console.log(good.price)
            }
        });
        let totalGoodsAnswer = "Все товары на сумму : " + totalPrice;
        document.querySelector('.goods-total').innerHTML = totalGoodsAnswer;
        console.log(totalPrice);
    }
}

class BasketItem {
    constructor(product_name, price, img) {
        this.product_name = product_name;
        this.price = price;
        this.img = img;
    }
    render() {

    }
}

class Basket {
    constructor() {
        // массив с добавленными товарами
        this.addGoods = [];

    }
    // Добавление товара в корзину 
    addToBasket() { }

    // Удаление товара из корзины 
    deleteFromBasket() { }

}

const list = new GoodsList();
list.fetchGoods(() => {
    list.render()
});

window.onload = () => {
    list.render();
    list.calcAllGoods();
};