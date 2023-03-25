const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.querySelector('#ingredients');

const foodIngredients = ingredients.map((ingredients) => {
  const item = document.createElement('li');
  item.textContent = ingredients;
  item.classList.add('item');
  return item;

});
ulList.append(...foodIngredients);

