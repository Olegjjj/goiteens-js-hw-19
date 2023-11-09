// 1
const categoriesList = document.getElementById('categories');

const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`У списку ${categoryItems.length} категорії.`);

categoryItems.forEach((category) => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('ul>li').length;
  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів: ${categoryElements}`);
});

// 2
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
   ];
   
   const ingredientsList = document.getElementById('ingredients');
   
   ingredients.forEach(ingredient => {
     const li = document.createElement('li');
     li.textContent = ingredient;
     ingredientsList.append(li);
   });

//    3
   const images = [
    {
     url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'White and Black Long Fur Cat',
    },
    {
     url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
     url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Group of Horses Running',
    }];
   
   const gallery = document.getElementById('gallery');
   const galleryMarkup = images.map(image => `<li><img src="${image.url}" alt="${image.alt}"></li>`)
   
   gallery.insertAdjacentHTML('beforeend', galleryMarkup);
   
// 4
let counterValue = 0;

const valueSpan = document.getElementById('value');

const increment = () => {
  counterValue += 1;
  updateCounter();
};

const decrement = () => {
  counterValue -= 1;
  updateCounter();
};

const updateCounter = () => {
  valueSpan.textContent = counterValue;
};
const decrementCounter = counter.querySelector('[data-action="decrement"]');
const incrementCounter = counter.querySelector('[data-action="increment"]');
decrementCounter.addEventListener('click', () => {
    decrement();
});

incrementCounter.addEventListener('click', () => {
    increment();
});