// У вас есть массив объектов:

// const cars = [
//     { brand: "BMW", price: 20000, isDiesel: true },
//     { brand: "Mercedes", price: 22000, isDiesel: false },
//     { brand: "Porshe", price: 50000, isDiesel: true },
//     { brand: "Nissan", price: 25000, isDiesel: false },
// ];
// Создайте на основе страрого массива новый массив объектов по образу:
//  [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

const newCars = cars.map(({ brand, isDiesel }) => ({ brand, isDiesel }));
console.log(newCars);

//Задание 2
//Создайте новый массив, где оставьте только машины с дизельным двигателем.

const newCarsDiesel = cars.filter(car => car.isDiesel);
console.log(newCarsDiesel);


// Задание 3
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.

const newBenzinCars = cars.filter(car => !car.isDiesel);
console.log(newBenzinCars);