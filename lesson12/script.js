// 1. Найти по id, используя getElementById, элемент с id равным "super_link" 
// и вывести этот элемент в консоль.

const link = document.querySelector('div.card>div.card-body>#super_link');
console.log(link);
const link2 = document.getElementById("super_link")
console.log(link2);
[]()


// 2. Внутри всех элементов на странице, которые имеют класс "card-link", 
// поменяйте текст внутри элемента на "ссылка".
// []()

const cardLink = document.getElementsByClassName('card-link');
for (const key in cardLink) {
  cardLink[key].textContent = "ссылка";
}



// 3. Найти все элементы на странице с классом "card-link", 
// которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// []()

let cardBody = document.getElementsByClassName('card-body')[0];
let cardLinks = cardBody.getElementsByClassName('card-link');
console.log(cardLinks);



// 4. Найти первый попавшийся элемент на странице у 
// которого есть атрибут data-number со значением 50 и вывести его в консоль.
// []()

const element = document.querySelector('[data-number="50"]');
console.log(element);

// 5. Выведите содержимое тега title в консоль.
// []()

console.log(document.title);

// 6. Получите элемент с классом "card-title" и 
// выведите его родительский узел в консоль.
// []()
const title = document.querySelector('div.card>div.card-body>h5.card-title');
console.log(title.parentNode);

// 7. Создайте тег'p`, запишите внутри него текст "Привет" и 
// добавьте созданный тег в начало элемента, который имеет класс "card".

const textNew = document.createElement('p');
textNew.textContent = 'Привет';
const card = document.querySelector('.card');
card.appendChild(textNew);



// 8. Удалите тег h6 на странице.

const deleteTeg = document.querySelector('div.card>div.card-body>h6');
deleteTeg.remove();