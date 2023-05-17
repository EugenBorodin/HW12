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

// Задание 4
// Посчитайте общую стоимость всех машин не с дизельным двигателем.

const totalCost = newBenzinCars.reduce((accumulator, car) => accumulator + car.price, 0);
console.log(totalCost);


// Задание 5
// Повысьте цену всех машин в массиве на 20%.

const updatedCars = cars.map(car => {
    const updatedPrice = car.price * 1.2;
    return { ...car, price: updatedPrice };
  });
console.log(updatedCars);  

// Задание 6
// Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }

const teslaCars = cars.map(car => {
    if (car.isDiesel) {
      return { brand: "Tesla", price: 25000, isDiesel: false };
    }
    return car;
  });
  console.log(teslaCars);
  