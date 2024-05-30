// 1 Aufgabe:

let menu = {
    width: 200,
    height: 300,
    title: "my menu"
};

menu.width = 400;
menu.height = 600;

console.log(menu);


// 2 Aufgabe:

let arr = [
    {
    id: 1,
    title: "bicycle",
    price: 45000,
    discount: 10
    },
    {
    id: 2,
    title: "roller-skates",
    price: 15000,
    discount: 5
    },
    {
    id: 3,
    title: "Kick scooter",
    price: 10000,
    discount: 30
    },
    {
    id: 4,
    title: "skis",
    price: 25000,
    discount: 20
    },
    {
    id: 5,
    title: "skate",
    price: 10000,
    discount: 0
}
];

// Написать цикл, который выводит только названия товаров

console.log(arr[0].title);
console.log(arr[1].title);
console.log(arr[2].title);
console.log(arr[3].title);
console.log(arr[4].title);


// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена>)”. Пример: bicycle (45000)

// 'name: price'

for(let i = 0; i < phones.length; i++){
    console.log(`${arr[0].name}: ${arr[0].price}`);
    console.log(`${arr[1].name}: ${arr[1].price}`);
    console.log(`${arr[2].name}: ${arr[2].price}`);
    console.log(`${arr[3].name}: ${arr[3].price}`);
    console.log(`${arr[4].name}: ${arr[4].price}`);
}

// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена со скидкой>)”

// 'name: discounted price' 

for(let i = 0; i < phones.length; i++){
    console.log(`${arr[0].discounted}: ${arr[0].price}`);
    console.log(`${arr[1].discounted}: ${arr[1].price}`);
    console.log(`${arr[2].discounted}: ${arr[2].price}`);
    console.log(`${arr[3].discounted}: ${arr[3].price}`);
    console.log(`${arr[4].discounted}: ${arr[4].price}`);
}