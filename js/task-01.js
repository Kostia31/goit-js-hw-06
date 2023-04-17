const categoriesRefs = document.querySelector("#categories");

console.log(`Number of categories: ${categoriesRefs.childElementCount}`);

const categoriItemEl = document.querySelectorAll(".item");


categoriItemEl.forEach((el) => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
 

  console.log(`Elements: ${el.lastElementChild.childElementCount}`);
});
