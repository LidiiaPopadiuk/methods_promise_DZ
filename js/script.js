"use strict";

//? 1
// Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.all і обробити результати.

// Створіть функцію delayedPromise, яка приймає значення і затримку (у мілісекундах) і повертає проміс, який вирішується з заданим значенням після затримки.
// Створіть масив з 5 промісів, використовуючи функцію delayedPromise, із різними значеннями та затримками.
// Використайте Promise.all, щоб одночасно виконати всі проміси з масиву.
// Обробіть результати вирішення промісів та виведіть їх у консоль.

const delayedPromises = (value, delay, isWorking = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(isWorking) {
        resolve(value);
      } else {
        reject()
      }
    }, delay);
  });
};

const promiseArray = [
    delayedPromises("A", 1000, false),
    delayedPromises("B", 3000),
    delayedPromises("C", 2000),
];

Promise.all(promiseArray)
.then((value) => console.log(value))
.catch(() => console.log("сталася помилка"))



//? 2
// Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.race і отримати результат найшвидшого проміса.

// Створіть функцію randomDelay, яка приймає значення і повертає проміс з випадковою затримкою (від 1000 до 5000 мілісекунд).
// Створіть масив з 5 промісів, використовуючи функцію randomDelay, із різними значеннями.
// Використайте Promise.race, щоб виконати всі проміси з масиву і отримати результат найшвидшого проміса.
// Обробіть результат найшвидшого проміса та виведіть його у консоль.



const randomDelay = (value) => {
    return new Promise((resolve) => {
        const delay = Math.random() * 5000
        setTimeout(() => {
          const params = {delay: delay, value: value}
            resolve(params);
        }, delay);
    })
}

const promiseArray2 = [
    randomDelay("A"),
    randomDelay("B"),
    randomDelay("C"),
]

Promise.race(promiseArray2)
.then(value => console.log(value));

