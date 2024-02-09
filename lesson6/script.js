// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6));
// должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться).
// Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

// Задание 1

function numberToCube(number) {
  return number * number * number;
}

let sumCub = numberToCube(2) + numberToCube(3);

console.log(`2^3 степени + 3 ^ 3 степени = ${sumCub}`);

// Задание 2

function PercentageOfNumber(number, percent) {
  let percentNumber = ((100 - percent) / 100) * number;
  return percentNumber;
}

let salary = Number(
  prompt("Введите размер заработной платы до вычетом налогов"));

if (!Number.isFinite(salary)) {
  alert("Значение задано неверно");
} else {
  let salaryAfterTax = PercentageOfNumber(salary, 13);
  console.log(`Размер заработной платы за вычетом налогов = ${salaryAfterTax}`);
}

// Задание 3

function MaxValue(num1, num2, num3) {
  let max = num1;
  if (num2 > max) max = num2;
  if (num3 > max) max = num3;
  return max;
}

let numberOne = Number(prompt("Введите число номер один "));
if (!Number.isFinite(numberOne)) {
  do {
    alert("Неверные данные ");
    numberOne = Number(prompt("Введите число номер один "));
  } while (Number.isFinite(numberOne) !== true);
}

let numberTwo = Number(prompt("Введите число номер два "));
if (!Number.isFinite(numberTwo)) {
  do {
    alert("Неверные данные ");
    numberTwo = Number(prompt("Введите число номер два "));
  } while (Number.isFinite(numberTwo) !== true);
}
let numberThree = Number(prompt("Введите число номер три"));
if (!Number.isFinite(numberThree)) {
  do {
    alert("Неверные данные ");
    numberThree = Number(prompt("Введите число номер три "));
  } while (Number.isFinite(numberThree) !== true);
}

console.log(
  `Максимальное число = ${MaxValue(numberOne, numberTwo, numberThree)}`
);

// Задание 4

function Diff(num1, num2) {
  if (num1 > num2) return num1 - num2;
  return num2 - num1;
}
let Sum = (num1, num2) => num1 + num2;
let Division = (num1, num2) => num1 / num2;
let Multiplying = (num1, num2) => num1 * num2;

console.log(Sum(2, 2), Multiplying(3,3), Diff(2,1), Division(3,4));
