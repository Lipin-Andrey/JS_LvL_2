/*2-2
1. Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.
2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.*/

class GoodItem {
    constructor(title = 'Product', price = 'No price', img = 'images/no-image.jpg') {
        this.title = title;
        this.price = price;
        this.img = img;
    }
    render() {
        return `<div class="goods-item">
                <div class="goods-info">
                  <img src="${this.img}" alt="${this.title}">
                  <h3>${this.title}</h3>
                  <p>${this.price}</p>
                </div>
                <button class='addClick'>Добавить</button>
              </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [{
            title: 'Shirt',
            price: 150,
            img: 'images/Shirt.jpg'
        },
        {
            title: 'Socks',
            price: 50,
            img: 'images/Socks.jpg'
        },
        {
            title: 'Jacket',
            price: 350,
            img: 'images/Jacket.jpg'
        },
        {
            title: 'Shoes',
            price: 250,
            img: 'images/Shoes.jpg'
        },
        {
            price: 50,
            img: 'images/Socks.jpg'
        },
        {
            title: 'Cap',
            img: 'images/Cap.jpg'
        },
        {
            title: 'Shoes',
            price: 250,
        },
        {},
        { img: 'images/Cap.jpg' },
        ]
    }

    render() {
        let listHtml = '';
        this.goods.forEach((good) => {
            const goodItem = new GoodItem(good.title, good.price, good.img);
            listHtml += goodItem.render();
        })
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    calcAllGoods() {
        let totalPrice = 0;
        this.goods.forEach((good) => {
            if (good.price !== undefined) {
                totalPrice += good.price;
                console.log(good.price);
            }
        });
        let totalGoodsAnswer = "Все товары на сумму : " + totalPrice;
        document.querySelector('.goods-total').innerHTML = totalGoodsAnswer;
        console.log(totalPrice);
    }
}

class BasketItem {
    constructor(title, price, img, link) {
        this.title = title;
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
list.fetchGoods();

window.onload = () => {
    list.render();
    list.calcAllGoods();
};