// 3.9 Рекомендація
// Поганий приклад:
const fs = require('fs');
import * as helpers from './helpers.js';
window.appConfig = { debug: true };

// Гарний приклад:
import express from 'express'; 
import { formatDate } from './helpers.js';
import { config } from './config.js';



// 3.1 Рекомендація
// Поганий приклад:
const d = 86400;
function Get_user(u) { /* ... */ }
class user_service {}

// Гарний приклад:
const SECONDS_IN_DAY = 86400;
function getUser(userId) { /* ... */ }
class UserService {}



// 3.2 Рекомендація
// Поганий приклад:
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}
// виведе: 3, 3, 3

// Гарний приклад:
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}
// виведе: 0, 1, 2



// 3.3 Рекомендація
// Поганий приклад:
if (inputUserId == "105") {
    // Неявне перетворення рядка в число
}

// Гарний приклад:
if (inputUserId === 105) {
    // Перевіряється і значення, і тип даних
}



// 3.4 Рекомендація
// Поганий приклад:
if (isAdmin) return true
const a1 = 1
[1, 2].forEach(print)
// TypeError: рядки склеїлись

// Гарний приклад:
if (isAdmin) {
    return true;
}
const a2 = 1;
[1, 2].forEach(print);



// 3.5 Рекомендація
// Поганий приклад:
function sum(a,b){
    return a+b
}
const total = calcTotal(items, discount, delivery, tax, currency);

// Гарний приклад:
function sum(a, b) {
    return a + b;
}
const total1 = calcTotal(
    items, discount, delivery, tax, currency,
);



// 3.6 Рекомендація
// Поганий приклад:
const msg1 = 'Hi, ' + firstName +
'! Items: ' + count;

// Гарний приклад:
const msg2 = `Hi, ${firstName}! Items: ${count}`;



// 3.7 Рекомендація
// Поганий приклад:
const name1 = user.name;
const age1 = user.age;
const updated = user;
updated.age = 21; // змінили і user

// Гарний приклад:
const { name, age } = user;
const updated = { ...user, age: 21 };
// user залишився без змін



// 3.8 Рекомендація
// Поганий приклад:
getUser(id, (err, user) => {
    getOrders(user.id, (err, orders) => {
        show(orders);
    });
});

// Гарний приклад:
async function showOrders(id) {
    try {
        const user = await getUser(id);
        show(await getOrders(user.id));
    } catch (error) {
        handleError(error);
    }
}



// 3.10 Рекомендація
// Поганий приклад:
// рахує
function calc(p, d) {
    return p - p * d / 100;
}

// Гарний приклад:
/**
* Обчислює ціну зі знижкою.
* @param {number} price - Початкова ціна.
* @param {number} discount - Знижка, %.
* @returns {number} Підсумкова ціна.
*/
function calcPrice(price, discount) {
    return price - (price * discount) / 100;
}



