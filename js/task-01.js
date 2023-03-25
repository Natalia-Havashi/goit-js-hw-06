
const liEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${liEl.length}`);

const categoriesArray = [...liEl]
  .map(
    categories => `Category: ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);








